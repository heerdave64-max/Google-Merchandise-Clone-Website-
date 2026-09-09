import React from 'react';
import { BrandFilter } from '../types';

interface CategoryPillsProps {
  selectedBrand: BrandFilter;
  onSelectBrand: (brand: BrandFilter) => void;
  brandCounts: Record<BrandFilter, number>;
}

export const CategoryPills: React.FC<CategoryPillsProps> = ({
  selectedBrand,
  onSelectBrand,
  brandCounts
}) => {
  const brands: { id: BrandFilter; label: string; iconColor?: string }[] = [
    { id: 'All Merch', label: 'All Merch' },
    { id: 'Google', label: 'Google', iconColor: 'text-blue-500' },
    { id: 'YouTube', label: 'YouTube', iconColor: 'text-red-500' },
    { id: 'Android', label: 'Android', iconColor: 'text-green-500' },
    { id: 'Google Cloud', label: 'Google Cloud', iconColor: 'text-blue-400' }
  ];

  return (
    <section id="brands" className="py-5 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center space-x-2.5 overflow-x-auto pb-1 scrollbar-none">
          {brands.map(({ id, label }) => {
            const isSelected = selectedBrand === id;
            const count = brandCounts[id] || 0;

            return (
              <button
                key={id}
                id={`brand-pill-${id.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => onSelectBrand(id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gray-900 text-white shadow-sm ring-2 ring-gray-900 ring-offset-1'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <span>{label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
