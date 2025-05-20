import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, Compass } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Compass size={28} className="text-blue-400" />
              <span className="text-xl font-bold">Tallinn Explorer</span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Discover the best experiences Tallinn has to offer, from historic sites to natural wonders.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook size={20} />} href="https://facebook.com" />
              <SocialLink icon={<Twitter size={20} />} href="https://twitter.com" />
              <SocialLink icon={<Instagram size={20} />} href="https://instagram.com" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink label="Home" to="/" />
              <FooterLink label="Experiences" to="/experiences" />
              <FooterLink label="Transport" to="/transport" />
              <FooterLink label="About Tallinn" to="/about" />
              <FooterLink label="Travel Tips" to="/tips" />
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <FooterLink label="Historic Experiences" to="/experiences?category=historic" />
              <FooterLink label="Nature Experiences" to="/experiences?category=nature" />
              <FooterLink label="Gastronomy" to="/experiences?category=gastronomy" />
              <FooterLink label="Sports" to="/experiences?category=sports" />
              <FooterLink label="Events" to="/experiences?category=events" />
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Tourism Information Center, Niguliste 2, 10146 Tallinn</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+372 5555 1234</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@tallinnexplorer.ee</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Tallinn Explorer. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-gray-500 text-sm hover:text-gray-400 cursor-pointer">Privacy Policy</span>
              <span className="text-gray-500 text-sm hover:text-gray-400 cursor-pointer">Terms of Service</span>
              <span className="text-gray-500 text-sm hover:text-gray-400 cursor-pointer">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-blue-800 transition-colors p-2 rounded-full"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  label: string;
  to: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, to }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-400 hover:text-blue-400 transition-colors"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer;