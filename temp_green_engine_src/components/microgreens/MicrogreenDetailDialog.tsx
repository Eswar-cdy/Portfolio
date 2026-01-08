import React, { useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MicrogreenVariety } from '@/data/microgreens_varieties';
import { Badge } from '@/components/ui/badge';
import { getPlaceholderImage } from '@/utils/getPlaceholderImage';
import { Star } from 'lucide-react';
import { getUnifiedMicrogreenById, UnifiedMicrogreenData } from '@/data/microgreensUnified';
import { microgreenVarieties } from '@/data/microgreens_varieties';
import { NutritionChart } from './NutritionChart';
import { GrowingParamsCard } from './GrowingParamsCard';
import { UsageSection } from './UsageSection';

interface MicrogreenDetailDialogProps {
  microgreen: MicrogreenVariety;
  open: boolean;
  onClose: () => void;
}

export const MicrogreenDetailDialog: React.FC<MicrogreenDetailDialogProps> = ({
  microgreen,
  open,
  onClose,
}) => {
  const unified = useMemo(() => {
    return getUnifiedMicrogreenById(microgreenVarieties, microgreen.id);
  }, [microgreen.id]);
  
  if (!unified) {
    return null;
  }

  const difficulty = unified.difficulty ?? 3;
  const harvestDaysRange = unified.harvestDaysRange ?? { min: 7, max: 10 };
  const flavorProfile = unified.flavorProfile;
  const tags = unified.tags ?? [];
  const healthGoals = unified.healthGoals ?? [];
  const topNutrients = unified.topNutrients ?? [];
  const culinaryUses = unified.culinaryUses;
  const growingParams = unified.growingParameters;

  const imageUrl = getPlaceholderImage(unified.imageUrl, unified.family, unified.name);

  const renderDifficultyStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < difficulty
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-300 text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">{unified.name}</DialogTitle>
          <DialogDescription className="text-base italic">
            {unified.scientificName}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image */}
          <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
            <img
              src={imageUrl}
              alt={unified.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Difficulty</div>
              <div className="flex items-center gap-1">
                {renderDifficultyStars()}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Harvest Time</div>
              <div className="font-semibold">
                {harvestDaysRange.min}-{harvestDaysRange.max} days
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Family</div>
              <div className="font-semibold">{unified.family}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Popularity</div>
              <div className="font-semibold">{(unified.popularity ?? 5)}/10</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{unified.description}</p>
          </div>

          {/* Flavor Profile */}
          {flavorProfile && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Flavor Profile</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default" className="text-sm">
                  {flavorProfile.primary}
                </Badge>
                {flavorProfile.secondary?.map((flavor, idx) => (
                  <Badge key={idx} variant="outline" className="text-sm">
                    {flavor}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Intensity: {flavorProfile.intensity}/5
              </p>
            </div>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Nutritional Profile */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Nutritional Profile</h3>
            <p className="text-gray-700">{unified.nutritionalProfile}</p>
          </div>

          {/* Top Nutrients */}
          {topNutrients.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Top Nutrients</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {topNutrients.map((nutrient, idx) => (
                  <li key={idx}>
                    <strong>{nutrient.name}:</strong> {nutrient.amount}
                    {nutrient.dailyValue && ` (${nutrient.dailyValue}% DV)`}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Health Benefits */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Health Benefits</h3>
            <p className="text-gray-700">{unified.healthBenefits}</p>
          </div>

          {/* Health Goals */}
          {healthGoals.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Health Goals</h3>
              <div className="flex flex-wrap gap-2">
                {healthGoals.map((goal, idx) => (
                  <Badge key={idx} variant="outline" className="text-sm bg-green-50 text-green-700">
                    {goal.replace(/-/g, ' ')}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Culinary Uses */}
          {culinaryUses && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Culinary Uses</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Pairs With:</div>
                  <div className="flex flex-wrap gap-2">
                    {culinaryUses.pairsWith.map((item, idx) => (
                      <Badge key={idx} variant="outline" className="text-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Best For:</div>
                  <div className="flex flex-wrap gap-2">
                    {culinaryUses.bestFor.map((item, idx) => (
                      <Badge key={idx} variant="outline" className="text-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                {culinaryUses.dressingIdeas && culinaryUses.dressingIdeas.length > 0 && (
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">Dressing Ideas:</div>
                    <div className="flex flex-wrap gap-2">
                      {culinaryUses.dressingIdeas.map((item, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm">
                          {item.replace(/-/g, ' ')}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Growing Parameters - Visual Component */}
          <GrowingParamsCard microgreen={unified} />

          {/* Nutrition Charts */}
          <NutritionChart microgreen={unified} />

          {/* Usage Section */}
          <UsageSection microgreen={unified} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

