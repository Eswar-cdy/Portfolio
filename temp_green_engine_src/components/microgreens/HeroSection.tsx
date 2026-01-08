import React from 'react';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Search } from 'lucide-react';

interface HeroSectionProps {
  onSearch?: (query: string) => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  searchValue = '',
  onSearchChange,
}) => {
  const handleSearchChange = (value: string) => {
    onSearchChange?.(value);
  };

  return (
    <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-green-500 text-white py-16 md:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
            Discover 30+ Nutrient-Dense Microgreens
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
            Science-backed growing guides for every variety. Find the perfect microgreens for your health goals and growing experience.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 mb-6 sm:mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
              <div className="text-green-100 text-sm md:text-base">Varieties</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold mb-2">6</div>
              <div className="text-green-100 text-sm md:text-base">Plant Families</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold mb-2">5-30</div>
              <div className="text-green-100 text-sm md:text-base">Days to Harvest</div>
            </div>
          </div>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mt-8">
            <Command className="rounded-lg border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
              <CommandInput
                placeholder="Search microgreens... (e.g., 'broccoli' or 'quick growing')"
                value={searchValue}
                onValueChange={handleSearchChange}
                className="h-12 text-base"
              />
              <CommandList className="max-h-64">
                <CommandEmpty>No microgreens found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>Broccoli</CommandItem>
                  <CommandItem>Radish</CommandItem>
                  <CommandItem>Sunflower</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-300/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

