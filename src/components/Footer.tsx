import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">AnantaAir</h3>
            <p className="text-gray-400">
              Compassionate and reliable dead body transport services across India.
              Available 24/7 for your needs.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <a href="tel:8999653202" className="flex items-center justify-center md:justify-start hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                8999653202
              </a>
              <a href="mailto:support@anantaair.com" className="flex items-center justify-center md:justify-start hover:text-white">
                <Mail className="w-5 h-5 mr-2" />
                support@anantaair.com
              </a>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-5 h-5 mr-2" />
                India
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 mb-4">AnantaAir Dead Body Transport - Available 24/7. Compassionate, reliable, and fast service for your loved ones.</p>
          <a href="tel:8999653202" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold">
            <Phone className="w-5 h-5 mr-2" />
            Call us now: 8999653202
          </a>
        </div>
      </div>
    </footer>
  );
}