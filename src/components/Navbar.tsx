import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../public/Full-Logo.png'; // ✅ place your logo in /src/assets and adjust the path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="The Indian Feast" 
                className="h-40 w-30 pt-3" // adjust size as needed
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              About
            </Link>

            {/* Menu Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  isActive('/menu') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Menu
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isMenuOpen && (
                <div
                  onMouseEnter={() => setIsMenuOpen(true)}
                  onMouseLeave={() => setIsMenuOpen(false)}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                >
                  <Link
                    to="/menu"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Full Menu
                  </Link>
                  <div className="border-t border-gray-200"></div>
                  <div className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wide">Categories</div>
                  <Link
                    to="/menu#starters"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                  >
                    Starters
                  </Link>
                  <Link
                    to="/menu#mains"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                  >
                    Main Courses
                  </Link>
                  <Link
                    to="/menu#biryanis"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                  >
                    Biryanis
                  </Link>
                  <Link
                    to="/menu#desserts"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                  >
                    Desserts
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/catering"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/catering') ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Catering
            </Link>
            <Link
              to="/book-table"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/book-table') ? 'text-yellow-600 bg-yellow-50' : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              Book a Table
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/menu"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                to="/catering"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600"
                onClick={() => setIsOpen(false)}
              >
                Catering
              </Link>
              <Link
                to="/book-table"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600"
                onClick={() => setIsOpen(false)}
              >
                Book a Table
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
