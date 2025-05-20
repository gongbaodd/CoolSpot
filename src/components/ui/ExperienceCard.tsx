import React from 'react';
import { Clock, Calendar, DollarSign, Star } from 'lucide-react';
import { Experience, TransportMode } from '../../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const getTransportIcons = (modes: TransportMode[]) => {
    return modes.map(mode => {
      switch (mode) {
        case 'foot':
          return <span key={mode} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">On foot</span>;
        case 'bike':
          return <span key={mode} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Bike</span>;
        case 'car':
          return <span key={mode} className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Car</span>;
        case 'public':
          return <span key={mode} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Public</span>;
        default:
          return null;
      }
    });
  };

  return (
    <div className="card h-full flex flex-col">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex items-center bg-white rounded-full px-2 py-1 shadow-md">
          <Star size={16} className="text-yellow-500 fill-current" />
          <span className="ml-1 text-sm font-semibold">{experience.rating}</span>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{experience.description}</p>
        
        <div className="space-y-3 mt-auto">
          <div className="flex items-center">
            <Calendar size={16} className="text-blue-800 mr-2" />
            <span className="text-sm text-gray-700">Best time: {experience.bestTime}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="text-blue-800 mr-2" />
            <span className="text-sm text-gray-700">Duration: {experience.duration}</span>
          </div>
          <div className="flex items-center">
            <DollarSign size={16} className="text-blue-800 mr-2" />
            <span className="text-sm text-gray-700">Price: {experience.price}</span>
          </div>
          
          <div className="pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-2">Accessible by:</p>
            <div className="flex flex-wrap gap-2">
              {getTransportIcons(experience.transportModes)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;