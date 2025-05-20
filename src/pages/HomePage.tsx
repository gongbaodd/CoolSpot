import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import CategoryCard from '../components/ui/CategoryCard';
import { categories } from '../data/categories';

const HomePage: React.FC = () => {
  return (
    <Layout withPadding={false}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/2765872/pexels-photo-2765872.jpeg)',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        </div>

        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Cool Spots in Tallinn
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Find the best time to experience Estonia's charming capital
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/transport" className="btn btn-primary">
              Start Exploring
            </Link>
            <Link to="/experiences" className="btn btn-secondary">
              View All Experiences
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a 
            href="#categories" 
            className="text-white bg-blue-800 bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition"
          >
            <ArrowRight size={24} className="transform rotate-90" />
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Tallinn By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From medieval streets to modern attractions, Tallinn offers diverse experiences for every traveler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Time Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Best Time to Visit Tallinn</h2>
              <div className="space-y-6">
                <SeasonCard 
                  title="Summer (June-August)" 
                  description="Peak season with warm weather, long daylight hours, and numerous festivals. Perfect for outdoor activities and exploring the Old Town."
                />
                <SeasonCard 
                  title="Spring (April-May)" 
                  description="Flowers bloom and temperatures rise. Less crowded than summer, with pleasant conditions for sightseeing."
                />
                <SeasonCard 
                  title="Autumn (September-October)" 
                  description="Beautiful fall colors, fewer tourists, and mild weather. Great for cultural experiences and photography."
                />
                <SeasonCard 
                  title="Winter (November-March)" 
                  description="Snow-covered medieval Old Town is magical. Christmas markets in December, but prepare for cold temperatures and limited daylight."
                />
              </div>
              <div className="mt-8">
                <Link to="/transport" className="btn btn-primary">
                  Plan Your Visit 
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/19502142/pexels-photo-19502142/free-photo-of-aerial-shot-of-tallinn-old-town-in-estonia.jpeg" 
                alt="Tallinn through seasons" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Tallinn?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Start planning your perfect Tallinn experience today. Choose your preferred transportation method and discover the best attractions tailored to your interests.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/transport" className="btn bg-white text-blue-800 hover:bg-gray-100">
              <MapPin size={18} className="mr-2" />
              Start Planning
            </Link>
            <Link to="/experiences" className="btn border-2 border-white text-white hover:bg-blue-700">
              <Calendar size={18} className="mr-2" />
              View All Experiences
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface SeasonCardProps {
  title: string;
  description: string;
}

const SeasonCard: React.FC<SeasonCardProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HomePage;