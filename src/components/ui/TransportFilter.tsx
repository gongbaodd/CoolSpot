import React from 'react';
import { useTravelContext } from '../../context/TravelContext';
import { Footprints, Bike, Car, Bus } from 'lucide-react';
import { TransportMode } from '../../types';

const TransportFilter: React.FC = () => {
  const { selectedTransportModes, toggleTransportMode } = useTravelContext();

  const transportOptions: { mode: TransportMode; icon: React.ReactNode; label: string }[] = [
    { mode: 'foot', icon: <Footprints size={18} />, label: 'On foot' },
    { mode: 'bike', icon: <Bike size={18} />, label: 'Bike/E-bike' },
    { mode: 'car', icon: <Car size={18} />, label: 'Car' },
    { mode: 'public', icon: <Bus size={18} />, label: 'Public' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <h3 className="text-lg font-semibold mb-4">Transport Mode</h3>
      <div className="flex flex-wrap gap-2">
        {transportOptions.map((option) => (
          <TransportButton
            key={option.mode}
            mode={option.mode}
            icon={option.icon}
            label={option.label}
            isSelected={selectedTransportModes.includes(option.mode)}
            onToggle={toggleTransportMode}
          />
        ))}
      </div>
    </div>
  );
};

interface TransportButtonProps {
  mode: TransportMode;
  icon: React.ReactNode;
  label: string;
  isSelected: boolean;
  onToggle: (mode: TransportMode) => void;
}

const TransportButton: React.FC<TransportButtonProps> = ({
  mode,
  icon,
  label,
  isSelected,
  onToggle,
}) => {
  return (
    <button
      onClick={() => onToggle(mode)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2
        ${isSelected
          ? 'bg-blue-800 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
    >
      <span className={isSelected ? 'text-white' : 'text-blue-800'}>{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default TransportFilter;