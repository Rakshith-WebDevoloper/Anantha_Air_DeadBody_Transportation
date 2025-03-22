import React from 'react';
import { Phone } from 'lucide-react';

export default function EmergencyCTA() {
  return (
    <div className="bg-blue-700 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <span className="text-base sm:text-lg text-center sm:text-left">Need immediate assistance?</span>
          <a
            href="tel:8999653202"
            className="flex items-center bg-white text-blue-700 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-semibold">Call 8999653202</span>
          </a>
        </div>
      </div>
    </div>
  );
}