import React from 'react';
import { ArrowRight, Plane, Truck, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmergencyCTA from '../components/EmergencyCTA';

export default function Home() {
  return (
    <div>
      <div className="relative bg-blue-700">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Compassionate and Reliable Dead Body Transport Across India
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
            AnantaAir - Trusted by families for seamless Air and Road transportation of loved ones. Available 24/7.
          </p>
          <a
            href="tel:8999653202"
            className="inline-flex items-center bg-white text-blue-700 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Need immediate assistance? Call us now: 8999653202
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Services</h2>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Plane className="w-8 h-8 text-blue-700 mr-3" />
              <h3 className="text-xl sm:text-2xl font-semibold">Dead Body Transport by Air</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Complete assistance with embalming, packaging, customs clearance, cargo booking, and flight arrangements.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center text-blue-700 hover:text-blue-800"
            >
              Learn more <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Truck className="w-8 h-8 text-blue-700 mr-3" />
              <h3 className="text-xl sm:text-2xl font-semibold">Dead Body Transport by Road</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Short and long-distance transportation with normal ambulances and freezer box ambulances.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center text-blue-700 hover:text-blue-800"
            >
              Learn more <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Why Choose AnantaAir?</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                We're here for you around the clock, ready to provide immediate assistance.
              </p>
            </div>

            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Complete Support</h3>
              <p className="text-gray-600">
                We handle all documentation, packaging, and transport logistics.
              </p>
            </div>

            <div className="text-center">
              <Plane className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Pan-India Service</h3>
              <p className="text-gray-600">
                Comprehensive coverage across all major cities in India.
              </p>
            </div>
          </div>
        </div>
      </div>

      <EmergencyCTA />
    </div>
  );
}