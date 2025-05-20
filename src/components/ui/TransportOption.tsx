import React from 'react';
import { TransportMode } from '../../types';
import { Footprints, Bike, Car, Bus } from 'lucide-react';

interface TransportOptionProps {
  mode: TransportMode;
  isSelected: boolean;
  onToggle: (mode: TransportMode) => void;
}

const TransportOption: React.FC<TransportOptionProps> = ({ mode, isSelected, onToggle }) => {
  const getIcon = () => {
    switch (mode) {
      case 'foot':
        return <Footprints size={24} />;
      case 'bike':
        return <Bike size={24} />;
      case 'car':
        return <Car size={24} />;
      case 'public':
        return <Bus size={24} />;
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (mode) {
      case 'foot':
        return 'On foot';
      case 'bike':
        return 'By bike/e-bike';
      case 'car':
        return 'Rent a car';
      case 'public':
        return 'Use public transport';
      default:
        return '';
    }
  };

  const getDescription = () => {
    switch (mode) {
      case 'foot':
        return 'Perfect for exploring the Old Town and central areas.';
      case 'bike':
        return 'Great way to cover more ground with freedom to stop anywhere.';
      case 'car':
        return 'Ideal for reaching destinations outside the city center.';
      case 'public':
        return 'Convenient and affordable way to get around the city.';
      default:
        return '';
    }
  };

  return (
    <div 
      className={`relative rounded-xl p-6 transition duration-300 cursor-pointer
        ${isSelected 
          ? 'bg-blue-50 border-2 border-blue-800 shadow-md' 
          : 'bg-white border-2 border-gray-200 hover:border-blue-300'
        }`}
      onClick={() => onToggle(mode)}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div 
            className={`p-3 rounded-full 
              ${isSelected 
                ? 'bg-blue-800 text-white' 
                : 'bg-blue-100 text-blue-800'
              }`}
          >
            {getIcon()}
          </div>
        </div>
        
        <div className="ml-4 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{getTitle()}</h3>
            <div 
              className={`h-5 w-5 border-2 rounded-md flex items-center justify-center transition-colors
                ${isSelected 
                  ? 'bg-blue-800 border-blue-800' 
                  : 'border-gray-300'
                }`}
            >
              {isSelected && (
                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </div>
          <p className="mt-2 text-gray-600">{getDescription()}</p>
        </div>
      </div>
    </div>
  );
};

export default TransportOption;