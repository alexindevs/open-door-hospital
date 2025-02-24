
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-primary-red rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">OH</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" isActive={isActive("/")}>Home</NavLink>
            <NavLink to="/about" isActive={isActive("/about")}>About</NavLink>
            <NavLink to="/services" isActive={isActive("/services")}>Services</NavLink>
            <NavLink to="/team" isActive={isActive("/team")}>Team</NavLink>
            <NavLink to="/contact" isActive={isActive("/contact")}>Contact</NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+2348000000000" className="flex items-center space-x-2 text-primary-blue hover:text-primary-red transition-colors">
              <Phone size={20} />
              <span>Emergency: 0800 000 0000</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg animate-fadeIn">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <MobileNavLink to="/" isActive={isActive("/")} onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/about" isActive={isActive("/about")} onClick={() => setIsMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink to="/services" isActive={isActive("/services")} onClick={() => setIsMenuOpen(false)}>
                Services
              </MobileNavLink>
              <MobileNavLink to="/team" isActive={isActive("/team")} onClick={() => setIsMenuOpen(false)}>
                Team
              </MobileNavLink>
              <MobileNavLink to="/contact" isActive={isActive("/contact")} onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavLink>
              
              <a 
                href="tel:+2348000000000" 
                className="flex items-center space-x-2 text-primary-blue hover:text-primary-red transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={20} />
                <span>Emergency: 0800 000 0000</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, isActive }: { to: string; children: React.ReactNode; isActive: boolean }) => (
  <Link
    to={to}
    className={`${
      isActive
        ? "text-primary-red font-semibold"
        : "text-gray-600 hover:text-primary-blue"
    } transition-colors font-raleway`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  isActive,
  onClick 
}: { 
  to: string; 
  children: React.ReactNode; 
  isActive: boolean;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`${
      isActive
        ? "text-primary-red font-semibold"
        : "text-gray-600 hover:text-primary-blue"
    } transition-colors font-raleway p-2 block`}
  >
    {children}
  </Link>
);

export default Navbar;
