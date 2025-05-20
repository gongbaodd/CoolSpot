import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import TransportOption from '../components/ui/TransportOption';
import { useTravelContext } from '../context/TravelContext';
import { TransportMode } from '../types';

const TransportPage: React.FC = () => {
  const { selectedTransportModes, toggleTransportMode } = useTravelContext();
  
  const transportModes: TransportMode[] = ['foot', 'bike', 'car', 'public'];

  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">How Would You Prefer to Move Around?</h1>
            <p className="text-gray-600">
              Choose your preferred methods of transportation to find the best experiences for you.
              You can select multiple options.
            </p>
          </div>

          <div className="space-y-4">
            {transportModes.map((mode) => (
              <TransportOption
                key={mode}
                mode={mode}
                isSelected={selectedTransportModes.includes(mode)}
                onToggle={toggleTransportMode}
              />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/experiences"
              className="btn btn-primary"
            >
              View Experiences
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6 text-center">Transport Tips in Tallinn</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TransportTipCard
              title="Public Transport"
              description="Tallinn's public transportation is free for residents, but tourists will need to purchase tickets. A single ticket costs €2, but a 1-day ticket (€5) or 3-day ticket (€7) is more economical for exploring."
            />
            <TransportTipCard
              title="Taxis and Ride-Sharing"
              description="Bolt (Estonia's own ride-hailing app) and Uber operate in Tallinn. They're convenient for getting around, especially in the evening or to reach places outside the city center."
            />
            <TransportTipCard
              title="Bike Rentals"
              description="Tallinn has an excellent bike-sharing system called Sixt, with stations throughout the city. You can also rent bikes from various private companies for longer periods."
            />
            <TransportTipCard
              title="Walking in Old Town"
              description="Tallinn's Old Town is compact and pedestrian-friendly. Most attractions within the Old Town are within a 10-15 minute walk of each other."
            />
            <TransportTipCard
              title="Car Rentals"
              description="While not necessary for exploring the city center, a rental car is useful for day trips to Lahemaa National Park, Haapsalu, or other locations outside Tallinn."
            />
            <TransportTipCard
              title="Tallinn Card"
              description="The Tallinn Card includes free public transportation and free entry to many museums and attractions. It's worth considering if you plan to visit multiple sites."
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface TransportTipCardProps {
  title: string;
  description: string;
}

const TransportTipCard: React.FC<TransportTipCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold mb-3 text-blue-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TransportPage;