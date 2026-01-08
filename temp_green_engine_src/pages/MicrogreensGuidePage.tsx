import React, { useState, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MicrogreensFilterProvider, useMicrogreensFilter } from '@/contexts/MicrogreensFilterContext';
import { HeroSection } from '@/components/microgreens/HeroSection';
import { FilterSidebar } from '@/components/microgreens/FilterSidebar';
import { MicrogreenCard } from '@/components/microgreens/MicrogreenCard';
import { MicrogreenDetailDialog } from '@/components/microgreens/MicrogreenDetailDialog';
import { ComparisonTool } from '@/components/microgreens/ComparisonTool';
import { microgreenFamilies, microgreenVarieties, MicrogreenVariety } from '@/data/microgreens_varieties';
import { getUnifiedMicrogreens } from '@/data/microgreensUnified';

const MicrogreensGuideContent: React.FC = () => {
  const { filteredMicrogreens, filters, updateFilters } = useMicrogreensFilter();
  const [selectedMicrogreen, setSelectedMicrogreen] = useState<MicrogreenVariety | null>(null);
  const [selectedFamily, setSelectedFamily] = useState<string>('all');

  // Get microgreens for selected family
  const familyMicrogreens = useMemo(() => {
    if (selectedFamily === 'all') {
      return filteredMicrogreens;
    }
    return filteredMicrogreens.filter((m: MicrogreenVariety) => m.family === selectedFamily);
  }, [filteredMicrogreens, selectedFamily]);

  // Sort microgreens by popularity (highest first), then by name
  const sortedMicrogreens = useMemo(() => {
    return [...familyMicrogreens].sort((a, b) => {
      const popularityA = a.popularity ?? 5;
      const popularityB = b.popularity ?? 5;
      if (popularityA !== popularityB) {
        return popularityB - popularityA;
      }
      return a.name.localeCompare(b.name);
    });
  }, [familyMicrogreens]);

  const handleViewDetails = (microgreen: MicrogreenVariety) => {
    setSelectedMicrogreen(microgreen);
  };

  const handleCloseDialog = () => {
    setSelectedMicrogreen(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        searchValue={filters.searchQuery}
        onSearchChange={(value: string) => updateFilters({ searchQuery: value })}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className="lg:sticky lg:top-4 lg:h-fit w-full lg:w-auto">
            <FilterSidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Results count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{sortedMicrogreens.length}</span> of{' '}
                <span className="font-semibold text-gray-900">{filteredMicrogreens.length}</span> microgreens
                {selectedFamily !== 'all' && ` in ${selectedFamily}`}
              </p>
            </div>

            {/* Family Tabs */}
            <Tabs value={selectedFamily} onValueChange={setSelectedFamily} className="mb-8">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                {microgreenFamilies.map((family: { id: string; name: string; description: string }) => (
                  <TabsTrigger key={family.id} value={family.name}>
                    {family.name.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedFamily} className="mt-0">
                {sortedMicrogreens.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No microgreens match your filters.</p>
                    <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedMicrogreens.map((microgreen) => (
                      <MicrogreenCard
                        key={microgreen.id}
                        microgreen={microgreen}
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>

      {/* Comparison Tool */}
      <ComparisonTool microgreens={microgreenVarieties} />

      {/* Detail Dialog */}
      {selectedMicrogreen && (
        <MicrogreenDetailDialog
          microgreen={selectedMicrogreen}
          open={!!selectedMicrogreen}
          onClose={handleCloseDialog}
        />
      )}
    </div>
  );
};

const MicrogreensGuidePage: React.FC = () => {
  // Get unified microgreens data
  const unifiedMicrogreens = useMemo(() => {
    return getUnifiedMicrogreens(microgreenVarieties);
  }, []);

  return (
    <MicrogreensFilterProvider microgreens={unifiedMicrogreens}>
      <MicrogreensGuideContent />
    </MicrogreensFilterProvider>
  );
};

export default MicrogreensGuidePage;
