import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MicrogreenVariety } from '@/data/microgreens_varieties';
import { getPlaceholderImage } from '@/utils/getPlaceholderImage';
import { Star, Clock, Thermometer, Droplet, Sun, Plus } from 'lucide-react';
import { useComparisonStore } from '@/stores/comparisonStore';

interface MicrogreenCardProps {
  microgreen: MicrogreenVariety;
  onViewDetails?: (microgreen: MicrogreenVariety) => void;
}

export const MicrogreenCard: React.FC<MicrogreenCardProps> = ({
  microgreen,
  onViewDetails,
}) => {
  const { addToComparison, selectedMicrogreens, removeFromComparison } = useComparisonStore();
  const isInComparison = selectedMicrogreens.includes(microgreen.id);
  const canAddToComparison = selectedMicrogreens.length < 3;

  const handleCompare = () => {
    if (isInComparison) {
      removeFromComparison(microgreen.id);
    } else if (canAddToComparison) {
      addToComparison(microgreen.id);
    }
  };

  const difficulty = microgreen.difficulty ?? 3;
  const harvestDays = microgreen.harvestDays ?? 10;
  const harvestDaysRange = microgreen.harvestDaysRange ?? { min: harvestDays - 2, max: harvestDays + 2 };
  const flavorProfile = microgreen.flavorProfile ?? { primary: 'mild', intensity: 2 };
  const tags = microgreen.tags ?? [];
  const healthGoals = microgreen.healthGoals ?? [];
  const growingParams = microgreen.growingParameters;

  const imageUrl = getPlaceholderImage(microgreen.imageUrl, microgreen.family, microgreen.name);

  // Determine harvest time badge
  const getHarvestTimeBadge = () => {
    if (harvestDays <= 7) return { label: '⚡ Quick', variant: 'default' as const, days: `${harvestDaysRange.min}-${harvestDaysRange.max} days` };
    if (harvestDays <= 14) return { label: '🕐 Medium', variant: 'secondary' as const, days: `${harvestDaysRange.min}-${harvestDaysRange.max} days` };
    return { label: '🕐🕐 Slow', variant: 'outline' as const, days: `${harvestDaysRange.min}-${harvestDaysRange.max} days` };
  };

  const harvestBadge = getHarvestTimeBadge();

  // Render difficulty stars
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

  // Get temperature, water, light info
  const tempInfo = growingParams?.temperature
    ? `${growingParams.temperature.min}-${growingParams.temperature.max}°${growingParams.temperature.unit}`
    : '65-75°F';
  const waterLevel = growingParams?.water?.level ?? 'moderate';
  const lightLevel = growingParams?.light?.level ?? 'medium';
  const lightHours = growingParams?.light?.hours
    ? `${growingParams.light.hours.min}-${growingParams.light.hours.max}hr`
    : '12-14hr';

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-green-200">
      {/* Image section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={microgreen.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Badges overlaid on image */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Badge variant="default" className="bg-green-600 text-white border-0">
            {harvestBadge.label} {harvestDaysRange.min}-{harvestDaysRange.max}d
          </Badge>
          <Badge variant="secondary" className="bg-white/90 text-gray-800 border-0 flex items-center gap-1">
            {renderDifficultyStars()}
            <span className="text-xs">Easy</span>
          </Badge>
        </div>
      </div>

      {/* Content section */}
      <CardContent className="p-6">
        {/* Title and scientific name */}
        <div className="mb-3">
          <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
            {microgreen.name}
          </h3>
          <p className="text-sm text-gray-500 italic">{microgreen.scientificName}</p>
        </div>

        {/* Quick stats */}
        {growingParams && (
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 p-2 sm:p-3 bg-gray-50 rounded-lg">
            <div className="flex flex-col items-center">
              <Thermometer className="w-4 h-4 text-green-600 mb-1" />
              <span className="text-xs text-gray-600 text-center">{tempInfo}</span>
            </div>
            <div className="flex flex-col items-center">
              <Droplet className="w-4 h-4 text-blue-500 mb-1" />
              <span className="text-xs text-gray-600 text-center capitalize">{waterLevel}</span>
            </div>
            <div className="flex flex-col items-center">
              <Sun className="w-4 h-4 text-yellow-500 mb-1" />
              <span className="text-xs text-gray-600 text-center">{lightHours}</span>
            </div>
          </div>
        )}

        {/* Flavor tags */}
        {flavorProfile && (
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="outline" className="text-xs">
              {flavorProfile.primary}
            </Badge>
            {flavorProfile.secondary?.slice(0, 2).map((flavor, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {flavor}
              </Badge>
            ))}
          </div>
        )}

        {/* Health goals preview */}
        {healthGoals.length > 0 && (
          <div className="mb-4">
            <div className="text-xs text-gray-500 mb-1">Top Benefits:</div>
            <div className="flex flex-wrap gap-1">
              {healthGoals.slice(0, 3).map((goal, idx) => (
                <Badge key={idx} variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                  {goal.replace('-', ' ')}
                </Badge>
              ))}
              {healthGoals.length > 3 && (
                <span className="text-xs text-gray-500">+{healthGoals.length - 3} more</span>
              )}
            </div>
          </div>
        )}

        {/* Description preview */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {microgreen.description}
        </p>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button
            variant="default"
            className="flex-1 bg-green-600 hover:bg-green-700"
            onClick={() => onViewDetails?.(microgreen)}
          >
            View Details
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleCompare}
            disabled={!isInComparison && !canAddToComparison}
            title={
              isInComparison
                ? 'Remove from comparison'
                : canAddToComparison
                ? 'Add to comparison'
                : 'Comparison full (max 3)'
            }
          >
            <Plus className={`w-4 h-4 ${isInComparison ? 'text-green-600' : ''}`} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

