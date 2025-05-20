import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ExperienceCard from '../components/ui/ExperienceCard';
import CategoryFilter from '../components/ui/CategoryFilter';
import TransportFilter from '../components/ui/TransportFilter';
import { useTravelContext } from '../context/TravelContext';
import { ExperienceCategory } from '../types';

const ExperiencesPage: React.FC = () => {
  const { filteredExperiences, toggleCategory, resetFilters } = useTravelContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Handle category from URL params
  React.useEffect(() => {
    const categoryParam = searchParams.get('category') as ExperienceCategory | null;
    if (categoryParam) {
      toggleCategory(categoryParam);
      setSearchParams({});
    }
  }, [searchParams, toggleCategory, setSearchParams]);

  // Filter experiences by search query
  const searchedExperiences = filteredExperiences.filter(
    (experience) =>
      experience.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      experience.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">Explore Tallinn Experiences</h1>
        
        {/* Search and Filter Controls */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search experiences..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <button
            className="md:hidden btn btn-secondary flex items-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={20} className="mr-2" />
            {showFilters ? 'Hide' : 'Show'} Filters
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Mobile */}
          <div 
            className={`md:hidden ${showFilters ? 'block' : 'hidden'} w-full`}
          >
            <div className="sticky top-20 space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  onClick={resetFilters}
                  className="text-sm text-blue-800 hover:underline flex items-center"
                >
                  <X size={16} className="mr-1" />
                  Clear all
                </button>
              </div>
              <CategoryFilter />
              <TransportFilter />
            </div>
          </div>
          
          {/* Filters - Desktop */}
          <div className="hidden md:block w-full md:w-72 lg:w-80 flex-shrink-0">
            <div className="sticky top-20 space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  onClick={resetFilters}
                  className="text-sm text-blue-800 hover:underline flex items-center"
                >
                  <X size={16} className="mr-1" />
                  Clear all
                </button>
              </div>
              <CategoryFilter />
              <TransportFilter />
            </div>
          </div>
          
          {/* Experiences List */}
          <div className="flex-1">
            {searchedExperiences.length > 0 ? (
              <>
                <p className="text-gray-600 mb-6">
                  Showing {searchedExperiences.length} experiences
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchedExperiences.map((experience) => (
                    <ExperienceCard key={experience.id} experience={experience} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No experiences found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="btn btn-secondary"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExperiencesPage;