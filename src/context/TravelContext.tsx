import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ExperienceCategory, TransportMode, Experience } from '../types';
import { experiences } from '../data/experiences';

interface TravelContextType {
  selectedCategories: ExperienceCategory[];
  toggleCategory: (category: ExperienceCategory) => void;
  selectedTransportModes: TransportMode[];
  toggleTransportMode: (mode: TransportMode) => void;
  filteredExperiences: Experience[];
  resetFilters: () => void;
}

const TravelContext = createContext<TravelContextType | undefined>(undefined);

export const TravelProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState<ExperienceCategory[]>([]);
  const [selectedTransportModes, setSelectedTransportModes] = useState<TransportMode[]>([]);

  const toggleCategory = (category: ExperienceCategory) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleTransportMode = (mode: TransportMode) => {
    setSelectedTransportModes(prev => 
      prev.includes(mode)
        ? prev.filter(m => m !== mode)
        : [...prev, mode]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedTransportModes([]);
  };

  const filteredExperiences = experiences.filter(experience => {
    // If no categories selected, show all
    const categoryMatch = selectedCategories.length === 0 || 
      selectedCategories.includes(experience.category);
    
    // If no transport modes selected, show all
    const transportMatch = selectedTransportModes.length === 0 || 
      experience.transportModes.some(mode => selectedTransportModes.includes(mode));
    
    return categoryMatch && transportMatch;
  });

  return (
    <TravelContext.Provider
      value={{
        selectedCategories,
        toggleCategory,
        selectedTransportModes,
        toggleTransportMode,
        filteredExperiences,
        resetFilters
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export const useTravelContext = () => {
  const context = useContext(TravelContext);
  if (context === undefined) {
    throw new Error('useTravelContext must be used within a TravelProvider');
  }
  return context;
};