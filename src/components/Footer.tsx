
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-red">Open Door Hospital</h3>
            <p className="text-gray-600">
              Providing quality healthcare services to the Lagos community since 2015.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary-blue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-primary-blue transition-colors">Services</Link></li>
              <li><Link to="/doctors" className="text-gray-600 hover:text-primary-blue transition-colors">Doctors</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">Emergency Care</li>
              <li className="text-gray-600">Primary Care</li>
              <li className="text-gray-600">Specialized Treatment</li>
              <li className="text-gray-600">Laboratory Services</li>
              <li className="text-gray-600">Preventive Care</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone size={18} />
                <span>+234 803 207 6163</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail size={18} />
                <span>opendoorhospital@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <MapPin size={18} />
                <span>4, Owutedo Street, Isheri-Olofin, Lagos.</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Clock size={18} />
                <span>24/7 Emergency Services</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Open Door Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
