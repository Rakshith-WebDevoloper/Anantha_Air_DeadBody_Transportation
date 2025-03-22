import React from 'react';
import { useParams } from 'react-router-dom';
import { CITIES, City } from '../types';
import EmergencyCTA from '../components/EmergencyCTA';
import { Phone, MapPin, Clock, Shield, Plane, Truck } from 'lucide-react';

export default function CityService() {
  const { cityName } = useParams<{ cityName: string }>();
  const city = CITIES.find(c => c.name === cityName) as City;

  if (!city) {
    return <div>City not found</div>;
  }

  return (
    <div>
      <div className="relative bg-blue-700">
        <div className="absolute inset-0">
          <img
            src={city.imageUrl}
            alt={city.title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold text-white mb-6">
            {city.title}
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            {city.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8999653202"
              className="inline-flex items-center bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call us now: 8999653202
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Plane className="w-8 h-8 text-blue-700 mr-3" />
              <h3 className="text-2xl font-semibold">Air Transport Services in {city.name}</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-blue-700 mr-2 mt-1" />
                <span>Complete embalming and certification services</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-blue-700 mr-2 mt-1" />
                <span>Customs-approved packaging with metal or wooden coffins</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-blue-700 mr-2 mt-1" />
                <span>Assistance with Police NOC and death certificate</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-blue-700 mr-2 mt-1" />
                <span>Flight booking for deceased and family members</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Truck className="w-8 h-8 text-blue-700 mr-3" />
              <h3 className="text-2xl font-semibold">Road Transport Services in {city.name}</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-blue-700 mr-2 mt-1" />
                <span>Normal ambulance services for short distances</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-blue-700 mr-2 mt-1" />
                <span>Freezer box ambulances for long-distance transport</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-blue-700 mr-2 mt-1" />
                <span>Door-to-door pickup and drop service</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-blue-700 mr-2 mt-1" />
                <span>24/7 support and tracking</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AnantaAir in {city.name}?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                Round-the-clock service with immediate response in {city.name}
              </p>
            </div>

            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Complete Support</h3>
              <p className="text-gray-600">
                Full documentation and transport logistics handling
              </p>
            </div>

            <div className="text-center">
              <MapPin className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of {city.name}'s transport requirements
              </p>
            </div>
          </div>
        </div>
      </div>

      <EmergencyCTA />
    </div>
  );
}