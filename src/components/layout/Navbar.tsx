import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Map, Compass } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-xl font-bold"
        >
          <Compass 
            size={28} 
            className={`transition-colors ${isScrolled ? 'text-blue-800' : 'text-white'}`} 
          />
          <span className={`transition-colors ${isScrolled ? 'text-blue-800' : 'text-white'}`}>
            Tallinn Explorer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" isScrolled={isScrolled} />
          <NavLink to="/transport" label="Transport" isScrolled={isScrolled} />
          <NavLink to="/experiences" label="Experiences" isScrolled={isScrolled} />
          <Link 
            to="/experiences" 
            className="btn btn-primary"
          >
            <Map size={18} className="mr-2" />
            Explore Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-4">
            <MobileNavLink to="/" label="Home" />
            <MobileNavLink to="/transport" label="Transport" />
            <MobileNavLink to="/experiences" label="Experiences" />
            <Link
              to="/experiences"
              className="btn btn-primary w-full justify-center mt-4"
            >
              <Map size={18} className="mr-2" />
              Explore Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isScrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`font-medium transition-colors ${
        isActive 
          ? 'text-blue-800' 
          : isScrolled 
            ? 'text-gray-800 hover:text-blue-800' 
            : 'text-white hover:text-blue-100'
      }`}
    >
      {label}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`block py-2 px-4 font-medium rounded-md ${
        isActive
          ? 'bg-blue-50 text-blue-800'
          : 'text-gray-800 hover:bg-gray-100'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;