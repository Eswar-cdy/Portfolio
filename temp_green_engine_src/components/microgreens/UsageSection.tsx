import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UnifiedMicrogreenData } from '@/data/microgreensUnified';
import { Utensils, ChefHat, Droplet } from 'lucide-react';

interface UsageSectionProps {
  microgreen: UnifiedMicrogreenData;
}

export const UsageSection: React.FC<UsageSectionProps> = ({ microgreen }) => {
  const culinaryUses = microgreen.culinaryUses;

  if (!culinaryUses) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Utensils className="w-5 h-5 text-green-600" />
          Culinary Uses & Pairings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Pairs With */}
        {culinaryUses.pairsWith && culinaryUses.pairsWith.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-green-600" />
              Pairs Well With
            </h4>
            <div className="flex flex-wrap gap-2">
              {culinaryUses.pairsWith.map((item, idx) => (
                <Badge key={idx} variant="outline" className="text-sm py-1 px-3">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Best For */}
        {culinaryUses.bestFor && culinaryUses.bestFor.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Best For</h4>
            <div className="flex flex-wrap gap-2">
              {culinaryUses.bestFor.map((item, idx) => (
                <Badge
                  key={idx}
                  variant="default"
                  className="text-sm py-1 px-3 bg-green-600 hover:bg-green-700"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Dressing Ideas */}
        {culinaryUses.dressingIdeas && culinaryUses.dressingIdeas.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Droplet className="w-4 h-4 text-green-600" />
              Dressing Ideas
            </h4>
            <div className="flex flex-wrap gap-2">
              {culinaryUses.dressingIdeas.map((item, idx) => (
                <Badge key={idx} variant="secondary" className="text-sm py-1 px-3">
                  {item.replace(/-/g, ' ')}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Usage Tips */}
        {microgreen.nutritionalData && (
          <div className="pt-4 border-t">
            <h4 className="font-semibold text-gray-900 mb-2">Usage Tips</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Add to salads for fresh flavor and nutrition</li>
              <li>Use as a garnish on soups and main dishes</li>
              <li>Blend into smoothies for added nutrients</li>
              <li>Top sandwiches and wraps for texture and flavor</li>
              <li>Add to stir-fries at the end to preserve nutrients</li>
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

