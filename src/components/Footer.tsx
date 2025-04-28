
import { Link } from 'react-router-dom';
import { MapPin, Facebook, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4">H-Groups</h3>
            <p className="mb-4 text-gray-300">
              Pure dairy and premium meats, directly from farm to your table. Quality products since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/milky-cow" className="text-gray-300 hover:text-white transition">Milky Cow</Link>
              </li>
              <li>
                <Link to="/royal-butcher" className="text-gray-300 hover:text-white transition">Royal Butcher</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-heading font-semibold text-xl mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-gray-300" />
                <span className="text-gray-300">123 Farm Road, Country Side, State 12345</span>
              </div>
              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-gray-300" />
                <span className="text-gray-300">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">info@hgroups.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} H-Groups. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
