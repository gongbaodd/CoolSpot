import React from 'react';
import { useTravelContext } from '../../context/TravelContext';
import { categories } from '../../data/categories';
import { ExperienceCategory } from '../../types';

const CategoryFilter: React.FC = () => {
  const { selectedCategories, toggleCategory } = useTravelContext();

  return (
    <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
      <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            category={category.id}
            title={category.title}
            isSelected={selectedCategories.includes(category.id)}
            onToggle={toggleCategory}
          />
        ))}
      </div>
    </div>
  );
};

interface CategoryButtonProps {
  category: ExperienceCategory;
  title: string;
  isSelected: boolean;
  onToggle: (category: ExperienceCategory) => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  title,
  isSelected,
  onToggle,
}) => {
  return (
    <button
      onClick={() => onToggle(category)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
        ${isSelected
          ? 'bg-blue-800 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
    >
      {title}
    </button>
  );
};

export default CategoryFilter;