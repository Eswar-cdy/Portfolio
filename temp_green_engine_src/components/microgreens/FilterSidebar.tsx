import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useMicrogreensFilter } from '@/contexts/MicrogreensFilterContext';
import { microgreenFamilies } from '@/data/microgreens_varieties';
import { Star, X } from 'lucide-react';

export const FilterSidebar: React.FC = () => {
  const { filters, updateFilters, clearFilters, allMicrogreens } = useMicrogreensFilter();

  // Get unique values for filters
  const allFlavors = Array.from(
    new Set(
      allMicrogreens
        .map((m) => [
          m.flavorProfile?.primary,
          ...(m.flavorProfile?.secondary || []),
        ])
        .flat()
        .filter(Boolean) as string[]
    )
  ).sort();

  const allHealthGoals = Array.from(
    new Set(allMicrogreens.flatMap((m) => m.healthGoals || []))
  ).sort();

  // Count microgreens per family
  const familyCounts = microgreenFamilies.map((family) => ({
    ...family,
    count: allMicrogreens.filter((m) => m.family === family.name).length,
  }));

  const hasActiveFilters =
    filters.searchQuery !== '' ||
    filters.selectedFamilies.length > 0 ||
    filters.difficultyRange[0] !== 1 ||
    filters.difficultyRange[1] !== 5 ||
    filters.harvestTimeRange[0] !== 0 ||
    filters.harvestTimeRange[1] !== 30 ||
    filters.selectedFlavors.length > 0 ||
    filters.selectedHealthGoals.length > 0;

  const toggleFamily = (familyName: string) => {
    const newFamilies = filters.selectedFamilies.includes(familyName)
      ? filters.selectedFamilies.filter((f) => f !== familyName)
      : [...filters.selectedFamilies, familyName];
    updateFilters({ selectedFamilies: newFamilies });
  };

  const toggleFlavor = (flavor: string) => {
    const newFlavors = filters.selectedFlavors.includes(flavor)
      ? filters.selectedFlavors.filter((f) => f !== flavor)
      : [...filters.selectedFlavors, flavor];
    updateFilters({ selectedFlavors: newFlavors });
  };

  const toggleHealthGoal = (goal: string) => {
    const newGoals = filters.selectedHealthGoals.includes(goal)
      ? filters.selectedHealthGoals.filter((g) => g !== goal)
      : [...filters.selectedHealthGoals, goal];
    updateFilters({ selectedHealthGoals: newGoals });
  };

  return (
    <div className="w-full md:w-64 lg:w-80 space-y-4 sticky top-4">
      {/* Clear filters button */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={clearFilters}
          className="w-full"
        >
          <X className="w-4 h-4 mr-2" />
          Clear All Filters
        </Button>
      )}

      {/* Active filter chips */}
      {(filters.selectedFamilies.length > 0 ||
        filters.selectedFlavors.length > 0 ||
        filters.selectedHealthGoals.length > 0) && (
        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-700">Active Filters:</div>
          <div className="flex flex-wrap gap-2">
            {filters.selectedFamilies.map((family) => (
              <Badge
                key={family}
                variant="secondary"
                className="cursor-pointer"
                onClick={() => toggleFamily(family)}
              >
                {family}
                <X className="w-3 h-3 ml-1" />
              </Badge>
            ))}
            {filters.selectedFlavors.map((flavor) => (
              <Badge
                key={flavor}
                variant="secondary"
                className="cursor-pointer"
                onClick={() => toggleFlavor(flavor)}
              >
                {flavor}
                <X className="w-3 h-3 ml-1" />
              </Badge>
            ))}
            {filters.selectedHealthGoals.map((goal) => (
              <Badge
                key={goal}
                variant="secondary"
                className="cursor-pointer"
                onClick={() => toggleHealthGoal(goal)}
              >
                {goal.replace('-', ' ')}
                <X className="w-3 h-3 ml-1" />
              </Badge>
            ))}
          </div>
        </div>
      )}

      <Accordion type="multiple" className="w-full" defaultValue={['family', 'difficulty']}>
        {/* Family Filter */}
        <AccordionItem value="family">
          <AccordionTrigger>Family</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {familyCounts.map((family) => (
                <label
                  key={family.id}
                  className="flex items-center justify-between p-2 rounded hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.selectedFamilies.includes(family.name)}
                      onChange={() => toggleFamily(family.name)}
                      className="mr-2 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700">{family.name}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {family.count}
                  </Badge>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Difficulty Filter */}
        <AccordionItem value="difficulty">
          <AccordionTrigger>Difficulty Level</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-700 mb-2 block">
                  Range: {filters.difficultyRange[0]} - {filters.difficultyRange[1]} stars
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={filters.difficultyRange[1]}
                  onChange={(e) =>
                    updateFilters({
                      difficultyRange: [filters.difficultyRange[0], parseInt(e.target.value)],
                    })
                  }
                  className="w-full"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((level) => {
                  const isInRange =
                    level >= filters.difficultyRange[0] &&
                    level <= filters.difficultyRange[1];
                  return (
                    <button
                      key={level}
                      onClick={() =>
                        updateFilters({
                          difficultyRange: [level, level],
                        })
                      }
                      className={`flex items-center gap-1 px-3 py-1 rounded text-sm border ${
                        isInRange
                          ? 'bg-green-100 border-green-500 text-green-700'
                          : 'bg-gray-50 border-gray-300 text-gray-600'
                      }`}
                    >
                      {Array.from({ length: level }, (_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </button>
                  );
                })}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Harvest Time Filter */}
        <AccordionItem value="harvest-time">
          <AccordionTrigger>Harvest Time</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-700 mb-2 block">
                  Range: {filters.harvestTimeRange[0]} - {filters.harvestTimeRange[1]} days
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="0"
                    max="30"
                    value={filters.harvestTimeRange[0]}
                    onChange={(e) =>
                      updateFilters({
                        harvestTimeRange: [
                          parseInt(e.target.value) || 0,
                          filters.harvestTimeRange[1],
                        ],
                      })
                    }
                    className="w-20 px-2 py-1 border rounded text-sm"
                  />
                  <span className="self-center text-gray-500">to</span>
                  <input
                    type="number"
                    min="0"
                    max="30"
                    value={filters.harvestTimeRange[1]}
                    onChange={(e) =>
                      updateFilters({
                        harvestTimeRange: [
                          filters.harvestTimeRange[0],
                          parseInt(e.target.value) || 30,
                        ],
                      })
                    }
                    className="w-20 px-2 py-1 border rounded text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => updateFilters({ harvestTimeRange: [0, 7] })}
                  className="text-left px-3 py-2 rounded border hover:bg-gray-50 text-sm"
                >
                  ⚡ Quick (0-7 days)
                </button>
                <button
                  onClick={() => updateFilters({ harvestTimeRange: [8, 14] })}
                  className="text-left px-3 py-2 rounded border hover:bg-gray-50 text-sm"
                >
                  🕐 Medium (8-14 days)
                </button>
                <button
                  onClick={() => updateFilters({ harvestTimeRange: [15, 30] })}
                  className="text-left px-3 py-2 rounded border hover:bg-gray-50 text-sm"
                >
                  🕐🕐 Slow (15+ days)
                </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Flavor Filter */}
        <AccordionItem value="flavor">
          <AccordionTrigger>Flavor Profile</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {allFlavors.map((flavor) => (
                <label
                  key={flavor}
                  className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.selectedFlavors.includes(flavor)}
                    onChange={() => toggleFlavor(flavor)}
                    className="mr-2 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700 capitalize">{flavor}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Health Goals Filter */}
        <AccordionItem value="health-goals">
          <AccordionTrigger>Health Goals</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {allHealthGoals.map((goal) => (
                <label
                  key={goal}
                  className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.selectedHealthGoals.includes(goal)}
                    onChange={() => toggleHealthGoal(goal)}
                    className="mr-2 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700 capitalize">
                    {goal.replace(/-/g, ' ')}
                  </span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

