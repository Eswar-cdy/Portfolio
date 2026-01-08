import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useComparisonStore } from '@/stores/comparisonStore';
import { MicrogreenVariety } from '@/data/microgreens_varieties';
import { getUnifiedMicrogreenById, UnifiedMicrogreenData } from '@/data/microgreensUnified';
import { X, Star } from 'lucide-react';
import { getPlaceholderImage } from '@/utils/getPlaceholderImage';

interface ComparisonToolProps {
  microgreens: MicrogreenVariety[];
}

export const ComparisonTool: React.FC<ComparisonToolProps> = ({ microgreens }) => {
  const { selectedMicrogreens, removeFromComparison, clearComparison } = useComparisonStore();

  const comparisonItems = useMemo(() => {
    return selectedMicrogreens
      .map((id) => getUnifiedMicrogreenById(microgreens, id))
      .filter((item): item is UnifiedMicrogreenData => item !== undefined);
  }, [selectedMicrogreens, microgreens]);

  if (comparisonItems.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-50 p-2 sm:p-4 max-h-[60vh] overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-2 sm:mb-4">
          <h3 className="text-sm sm:text-lg font-bold text-gray-900">
            Compare ({comparisonItems.length}/3)
          </h3>
          <Button variant="ghost" size="sm" onClick={clearComparison} className="text-xs sm:text-sm">
            <X className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
            <span className="hidden sm:inline">Clear All</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          {comparisonItems.map((item) => (
            <Card key={item.id} className="relative">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => removeFromComparison(item.id)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 italic">{item.scientificName}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Image */}
                <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={getPlaceholderImage(item.imageUrl, item.family, item.name)}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Difficulty */}
                <div>
                  <div className="text-xs font-medium text-gray-700 mb-1">Difficulty:</div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < (item.difficulty ?? 3)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-gray-300 text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Harvest Time */}
                <div>
                  <div className="text-xs font-medium text-gray-700 mb-1">Harvest Time:</div>
                  <Badge variant="outline" className="text-xs">
                    {item.harvestDaysRange
                      ? `${item.harvestDaysRange.min}-${item.harvestDaysRange.max} days`
                      : item.harvestDays
                      ? `${item.harvestDays} days`
                      : 'N/A'}
                  </Badge>
                </div>

                {/* Flavor */}
                {item.flavorProfile && (
                  <div>
                    <div className="text-xs font-medium text-gray-700 mb-1">Flavor:</div>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        {item.flavorProfile.primary}
                      </Badge>
                      {item.flavorProfile.secondary?.slice(0, 1).map((flavor, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {flavor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Top Nutrients */}
                {item.topNutrients && item.topNutrients.length > 0 && (
                  <div>
                    <div className="text-xs font-medium text-gray-700 mb-1">Top Nutrients:</div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {item.topNutrients.slice(0, 3).map((nutrient, idx) => (
                        <li key={idx}>• {nutrient.name}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Health Goals */}
                {item.healthGoals && item.healthGoals.length > 0 && (
                  <div>
                    <div className="text-xs font-medium text-gray-700 mb-1">Health Goals:</div>
                    <div className="flex flex-wrap gap-1">
                      {item.healthGoals.slice(0, 3).map((goal, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-green-50 text-green-700">
                          {goal.replace('-', ' ')}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          {/* Empty slots */}
          {Array.from({ length: 3 - comparisonItems.length }).map((_, idx) => (
            <Card key={`empty-${idx}`} className="border-dashed border-2 border-gray-300">
              <CardContent className="flex items-center justify-center h-full min-h-[300px]">
                <p className="text-sm text-gray-400 text-center">
                  Add {comparisonItems.length === 0 ? 'a microgreen' : 'another microgreen'} to compare
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

