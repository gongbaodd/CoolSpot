import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  return (
    <div 
      className={`card group animate-fade-in animate-delay-${index + 1}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-white text-xl font-bold">{category.title}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-600 mb-4">{category.description}</p>
        <Link
          to={`/experiences?category=${category.id}`}
          className="inline-flex items-center text-blue-800 font-medium group-hover:underline"
        >
          Explore 
          <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;