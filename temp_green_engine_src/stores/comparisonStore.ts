import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ComparisonStore {
  selectedMicrogreens: string[]; // IDs
  addToComparison: (id: string) => void;
  removeFromComparison: (id: string) => void;
  clearComparison: () => void;
}

export const useComparisonStore = create<ComparisonStore>()(
  persist(
    (set) => ({
      selectedMicrogreens: [],

      addToComparison: (id) =>
        set((state) => {
          if (state.selectedMicrogreens.length >= 3) {
            return state; // Max 3
          }
          if (state.selectedMicrogreens.includes(id)) {
            return state; // Already added
          }
          return { selectedMicrogreens: [...state.selectedMicrogreens, id] };
        }),

      removeFromComparison: (id) =>
        set((state) => ({
          selectedMicrogreens: state.selectedMicrogreens.filter((i) => i !== id),
        })),

      clearComparison: () => set({ selectedMicrogreens: [] }),
    }),
    {
      name: 'microgreens-comparison',
    }
  )
);

