import React from 'react';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { UnifiedMicrogreenData } from '@/data/microgreensUnified';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface NutritionChartProps {
  microgreen: UnifiedMicrogreenData;
  comparisonMicrogreens?: UnifiedMicrogreenData[];
}

export const NutritionChart: React.FC<NutritionChartProps> = ({
  microgreen,
  comparisonMicrogreens = [],
}) => {
  // Prepare radar chart data
  const radarData = React.useMemo(() => {
    const nutrients = microgreen.nutritionalData;
    const data: Array<{ nutrient: string; value: number; fullMark: number }> = [];

    // Add vitamins
    nutrients.vitamins.forEach((vitamin) => {
      const maxValue = Math.max(
        vitamin.dailyValue || vitamin.amount,
        ...comparisonMicrogreens.map((m) => {
          const v = m.nutritionalData.vitamins.find((v) => v.name === vitamin.name);
          return v ? (v.dailyValue || v.amount) : 0;
        })
      );
      data.push({
        nutrient: vitamin.name,
        value: vitamin.dailyValue || vitamin.amount,
        fullMark: maxValue * 1.2, // Add 20% padding
      });
    });

    // Add minerals
    nutrients.minerals.forEach((mineral) => {
      const maxValue = Math.max(
        mineral.dailyValue || mineral.amount,
        ...comparisonMicrogreens.map((m) => {
          const min = m.nutritionalData.minerals.find((m) => m.name === mineral.name);
          return min ? (min.dailyValue || min.amount) : 0;
        })
      );
      data.push({
        nutrient: mineral.name,
        value: mineral.dailyValue || mineral.amount,
        fullMark: maxValue * 1.2,
      });
    });

    return data;
  }, [microgreen, comparisonMicrogreens]);

  // Prepare bar chart data for comparison
  const barChartData = React.useMemo(() => {
    if (comparisonMicrogreens.length === 0) return [];

    const allMicrogreens = [microgreen, ...comparisonMicrogreens];
    const nutrients = ['Vitamin C', 'Vitamin K', 'Iron', 'Calcium', 'Protein'];

    return nutrients.map((nutrientName) => {
      const entry: Record<string, string | number> = { nutrient: nutrientName };

      allMicrogreens.forEach((mg) => {
        const vitamin = mg.nutritionalData.vitamins.find((v) => v.name === nutrientName);
        const mineral = mg.nutritionalData.minerals.find((m) => m.name === nutrientName);
        const value = vitamin || mineral;

        if (value) {
          entry[mg.name] = value.dailyValue || value.amount;
        } else if (nutrientName === 'Protein') {
          entry[mg.name] = mg.nutritionalData.macronutrients.protein;
        } else {
          entry[mg.name] = 0;
        }
      });

      return entry;
    });
  }, [microgreen, comparisonMicrogreens]);

  return (
    <div className="space-y-6">
      {/* Radar Chart */}
      {radarData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Nutritional Profile (Radar Chart)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="nutrient" tick={{ fontSize: 12 }} />
                <PolarRadiusAxis angle={90} domain={[0, 'auto']} />
                <Radar
                  name={microgreen.name}
                  dataKey="value"
                  stroke="#059669"
                  fill="#059669"
                  fillOpacity={0.6}
                />
                <Tooltip />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Bar Chart for Comparison */}
      {comparisonMicrogreens.length > 0 && barChartData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Nutrient Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nutrient" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey={microgreen.name} fill="#059669" />
                {comparisonMicrogreens.map((mg, idx) => {
                  const colors = ['#dc2626', '#f59e0b', '#3b82f6'];
                  return <Bar key={mg.id} dataKey={mg.name} fill={colors[idx % colors.length]} />;
                })}
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Nutrient List with Daily Values */}
      <Card>
        <CardHeader>
          <CardTitle>Nutrient Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Vitamins */}
            {microgreen.nutritionalData.vitamins.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Vitamins</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {microgreen.nutritionalData.vitamins.map((vitamin, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-2 bg-gray-50 rounded"
                    >
                      <span className="text-sm text-gray-700">{vitamin.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">
                          {vitamin.amount} {vitamin.unit}
                        </span>
                        {vitamin.dailyValue && (
                          <Badge variant="outline" className="text-xs">
                            {vitamin.dailyValue}% DV
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Minerals */}
            {microgreen.nutritionalData.minerals.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Minerals</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {microgreen.nutritionalData.minerals.map((mineral, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-2 bg-gray-50 rounded"
                    >
                      <span className="text-sm text-gray-700">{mineral.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">
                          {mineral.amount} {mineral.unit}
                        </span>
                        {mineral.dailyValue && (
                          <Badge variant="outline" className="text-xs">
                            {mineral.dailyValue}% DV
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Macronutrients */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Macronutrients</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs text-gray-500">Protein</div>
                  <div className="font-semibold">
                    {microgreen.nutritionalData.macronutrients.protein}g
                  </div>
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs text-gray-500">Fiber</div>
                  <div className="font-semibold">
                    {microgreen.nutritionalData.macronutrients.fiber}g
                  </div>
                </div>
                {microgreen.nutritionalData.macronutrients.fat !== undefined && (
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="text-xs text-gray-500">Fat</div>
                    <div className="font-semibold">
                      {microgreen.nutritionalData.macronutrients.fat}g
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

