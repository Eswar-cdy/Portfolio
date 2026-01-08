import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { MicrogreenVariety } from '@/data/microgreens_varieties';

interface FilterState {
  searchQuery: string;
  selectedFamilies: string[];
  difficultyRange: [number, number];
  harvestTimeRange: [number, number];
  selectedFlavors: string[];
  selectedHealthGoals: string[];
}

interface MicrogreensFilterContextType {
  filters: FilterState;
  updateFilters: (updates: Partial<FilterState>) => void;
  clearFilters: () => void;
  filteredMicrogreens: MicrogreenVariety[];
  allMicrogreens: MicrogreenVariety[];
}

const defaultFilters: FilterState = {
  searchQuery: '',
  selectedFamilies: [],
  difficultyRange: [1, 5],
  harvestTimeRange: [0, 30],
  selectedFlavors: [],
  selectedHealthGoals: [],
};

const MicrogreensFilterContext = createContext<MicrogreensFilterContextType | null>(null);

interface MicrogreensFilterProviderProps {
  children: ReactNode;
  microgreens: MicrogreenVariety[];
}

export const MicrogreensFilterProvider: React.FC<MicrogreensFilterProviderProps> = ({
  children,
  microgreens,
}) => {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const updateFilters = (updates: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updates }));
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
  };

  const filteredMicrogreens = useMemo(() => {
    return microgreens.filter((microgreen) => {
      // Search query filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesSearch =
          microgreen.name.toLowerCase().includes(query) ||
          microgreen.scientificName.toLowerCase().includes(query) ||
          microgreen.description.toLowerCase().includes(query) ||
          microgreen.tags?.some((tag) => tag.toLowerCase().includes(query)) ||
          microgreen.family.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Family filter
      if (filters.selectedFamilies.length > 0) {
        if (!filters.selectedFamilies.includes(microgreen.family)) return false;
      }

      // Difficulty filter (provide default if missing)
      const difficulty = microgreen.difficulty ?? 3; // Default to medium difficulty
      if (
        difficulty < filters.difficultyRange[0] ||
        difficulty > filters.difficultyRange[1]
      ) {
        return false;
      }

      // Harvest time filter (provide default if missing)
      const harvestDays = microgreen.harvestDays ?? 10; // Default to 10 days
      if (
        harvestDays < filters.harvestTimeRange[0] ||
        harvestDays > filters.harvestTimeRange[1]
      ) {
        return false;
      }

      // Flavor filter
      if (filters.selectedFlavors.length > 0) {
        if (!microgreen.flavorProfile) return false;
        const matchesFlavor =
          filters.selectedFlavors.includes(microgreen.flavorProfile.primary) ||
          microgreen.flavorProfile.secondary?.some((flavor) =>
            filters.selectedFlavors.includes(flavor)
          );
        if (!matchesFlavor) return false;
      }

      // Health goals filter
      if (filters.selectedHealthGoals.length > 0) {
        if (!microgreen.healthGoals || microgreen.healthGoals.length === 0) return false;
        const matchesHealthGoal = filters.selectedHealthGoals.some((goal) =>
          microgreen.healthGoals?.includes(goal)
        );
        if (!matchesHealthGoal) return false;
      }

      return true;
    });
  }, [microgreens, filters]);

  return (
    <MicrogreensFilterContext.Provider
      value={{
        filters,
        updateFilters,
        clearFilters,
        filteredMicrogreens,
        allMicrogreens: microgreens,
      }}
    >
      {children}
    </MicrogreensFilterContext.Provider>
  );
};

export const useMicrogreensFilter = () => {
  const context = useContext(MicrogreensFilterContext);
  if (!context) {
    throw new Error('useMicrogreensFilter must be used within MicrogreensFilterProvider');
  }
  return context;
};

