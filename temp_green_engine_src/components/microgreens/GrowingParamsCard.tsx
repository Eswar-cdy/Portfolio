import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { UnifiedMicrogreenData } from '@/data/microgreensUnified';
import { Sun, Droplet, Thermometer, Sprout, Calendar } from 'lucide-react';

interface GrowingParamsCardProps {
  microgreen: UnifiedMicrogreenData;
}

export const GrowingParamsCard: React.FC<GrowingParamsCardProps> = ({
  microgreen,
}) => {
  const growingParams = microgreen.growingParameters;

  if (!growingParams) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-gray-500">Growing parameters not available.</p>
        </CardContent>
      </Card>
    );
  }

  // Calculate timeline progress
  const totalDays = growingParams.harvest.max;
  const germinationDays = growingParams.germination.max;
  const harvestDays = growingParams.harvest.max;

  // Calculate percentages for meters
  const getLightMeter = () => {
    if (growingParams.light.level === 'low') return 33;
    if (growingParams.light.level === 'medium') return 66;
    return 100;
  };

  const getWaterMeter = () => {
    if (growingParams.water.level === 'low') return 33;
    if (growingParams.water.level === 'moderate') return 66;
    return 100;
  };

  const getTempMeter = () => {
    const range = growingParams.temperature.max - growingParams.temperature.min;
    const optimal = growingParams.temperature.optimal || (growingParams.temperature.min + range / 2);
    const normalized = ((optimal - 50) / 50) * 100; // Normalize to 0-100
    return Math.max(0, Math.min(100, normalized));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Growing Parameters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Timeline Progress */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-green-600" />
            Growth Timeline
          </h4>
          <div className="relative">
            {/* Timeline bar */}
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-500"
                style={{ width: '100%' }}
              />
            </div>
            {/* Timeline markers */}
            <div className="flex justify-between mt-2 text-xs text-gray-600">
              <div className="flex flex-col items-center">
                <Sprout className="w-4 h-4 text-green-600 mb-1" />
                <span>Day {germinationDays}</span>
                <span className="text-gray-400">Germination</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mb-1" />
                <span>Day {harvestDays}</span>
                <span className="text-gray-400">Harvest</span>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Grid */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Requirements</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Light */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-yellow-500" />
                <span className="font-medium text-gray-900">Light</span>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 capitalize">{growingParams.light.level}</span>
                  <span className="text-gray-600">
                    {growingParams.light.hours.min}-{growingParams.light.hours.max}hr
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 transition-all duration-300"
                    style={{ width: `${getLightMeter()}%` }}
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500">{growingParams.light.description}</p>
            </div>

            {/* Water */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Droplet className="w-5 h-5 text-blue-500" />
                <span className="font-medium text-gray-900">Water</span>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 capitalize">{growingParams.water.level}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-400 transition-all duration-300"
                    style={{ width: `${getWaterMeter()}%` }}
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500">{growingParams.water.description}</p>
            </div>

            {/* Temperature */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Thermometer className="w-5 h-5 text-red-500" />
                <span className="font-medium text-gray-900">Temperature</span>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">
                    {growingParams.temperature.min}-{growingParams.temperature.max}°
                    {growingParams.temperature.unit}
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-400 transition-all duration-300"
                    style={{ width: `${getTempMeter()}%` }}
                  />
                </div>
              </div>
              {growingParams.temperature.optimal && (
                <p className="text-xs text-gray-500">
                  Optimal: {growingParams.temperature.optimal}°{growingParams.temperature.unit}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Additional Details */}
        <Accordion type="single" collapsible>
          <AccordionItem value="details">
            <AccordionTrigger>Additional Details</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Germination:</span>{' '}
                  <span className="text-gray-600">
                    {growingParams.germination.min}-{growingParams.germination.max}{' '}
                    {growingParams.germination.unit}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Harvest:</span>{' '}
                  <span className="text-gray-600">
                    {growingParams.harvest.min}-{growingParams.harvest.max}{' '}
                    {growingParams.harvest.unit}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Soil Type:</span>{' '}
                  <span className="text-gray-600">{growingParams.soil.type}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Soil pH:</span>{' '}
                  <span className="text-gray-600">
                    {growingParams.soil.ph.min}-{growingParams.soil.ph.max}
                  </span>
                </div>
                {growingParams.specialNotes && (
                  <div>
                    <span className="font-medium text-gray-700">Special Notes:</span>{' '}
                    <span className="text-gray-600">{growingParams.specialNotes}</span>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

