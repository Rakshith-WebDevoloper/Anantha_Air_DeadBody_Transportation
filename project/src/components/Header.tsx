import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-semibold text-blue-700">AnantaAir</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-700">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-700">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-700">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-700">Contact</Link>
          </div>

          <div className="hidden md:flex">
            <a href="tel:8999653202" className="flex items-center text-blue-700 hover:text-blue-800">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-semibold">8999653202</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-blue-50"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:8999653202"
                className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>8999653202</span>
                </div>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}