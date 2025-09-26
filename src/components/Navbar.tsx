import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { menuData } from '../data/menuData';
import logo from '../../public/Full-Logo.png'; // ✅ place your logo in /src/assets and adjust the path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleMenuMouseEnter = () => {
    setIsMenuDropdownOpen(true);
  };

  const handleMenuMouseLeave = () => {
    setIsMenuDropdownOpen(false);
    setActiveCategory(null);
    setActiveSubcategory(null);
  };

  const handleCategoryMouseEnter = (categoryId: string) => {
    setActiveCategory(categoryId);
    setActiveSubcategory(null);
  };

  const handleSubcategoryMouseEnter = (subcategoryId: string) => {
    setActiveSubcategory(subcategoryId);
  };

  const getSpiceColor = (spice: string) => {
    switch (spice) {
      case 'Mild': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'Hot': return 'text-orange-600';
      case 'Very Hot': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };
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
            <div 
              className="relative"
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMenuMouseLeave}
            >
              <Link
                to="/menu"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/menu') ? 'text-yellow-600 bg-yellow-50' : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                Menu
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>

              {/* Menu Dropdown */}
              {isMenuDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  {menuData.map((category) => (
                    <div key={category.id} className="relative">
                      {/* Category Level */}
                      <div
                        className={`flex items-center justify-between px-4 py-3 text-sm font-medium cursor-pointer transition-colors ${
                          activeCategory === category.id 
                            ? 'bg-green-50 text-green-700' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onMouseEnter={() => handleCategoryMouseEnter(category.id)}
                      >
                        <span className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-3 ${
                            category.id === 'veg' ? 'bg-green-500' : 'bg-red-500'
                          }`}></div>
                          {category.name}
                        </span>
                        <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                      </div>

                      {/* Subcategories */}
                      {activeCategory === category.id && (
                        <div className="absolute left-full top-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg ml-1">
                          {category.subcategories.map((subcategory) => (
                            <div key={subcategory.id} className="relative">
                              {/* Subcategory Level */}
                              <div
                                className={`flex items-center justify-between px-4 py-3 text-sm cursor-pointer transition-colors ${
                                  activeSubcategory === subcategory.id 
                                    ? 'bg-yellow-50 text-yellow-700' 
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                                onMouseEnter={() => handleSubcategoryMouseEnter(subcategory.id)}
                              >
                                <span>{subcategory.name}</span>
                                <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                              </div>

                              {/* Items */}
                              {activeSubcategory === subcategory.id && (
                                <div className="absolute left-full top-0 w-80 bg-white border border-gray-200 rounded-md shadow-lg max-h-96 overflow-y-auto ml-1">
                                  {subcategory.items.map((item) => (
                                    <div
                                      key={item.id}
                                      className="px-4 py-3 cursor-pointer hover:bg-orange-50 border-b border-gray-100 last:border-b-0 transition-colors"
                                      onClick={() => {
                                        console.log('Selected item:', item);
                                        setIsMenuDropdownOpen(false);
                                        setActiveCategory(null);
                                        setActiveSubcategory(null);
                                      }}
                                    >
                                      <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                                        {item.price && (
                                          <span className="text-green-600 font-semibold text-sm ml-2">{item.price}</span>
                                        )}
                                      </div>
                                      {item.description && (
                                        <p className="text-xs text-gray-600 mb-2 leading-relaxed">{item.description}</p>
                                      )}
                                      <div className="flex items-center justify-between">
                                        {item.spiceLevel && (
                                          <span className={`text-xs font-medium ${getSpiceColor(item.spiceLevel)}`}>
                                            🌶️ {item.spiceLevel}
                                          </span>
                                        )}
                                        <div className="flex items-center">
                                          <div className={`w-2 h-2 rounded-full ${
                                            item.isVegetarian ? 'bg-green-500' : 'bg-red-500'
                                          }`}></div>
                                          <span className="text-xs text-gray-500 ml-1">
                                            {item.isVegetarian ? 'Veg' : 'Non-Veg'}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
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
