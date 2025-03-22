import React from 'react';
import { Link } from 'react-router-dom';
import { CITIES } from '../types';
import { Plane, Truck, ArrowRight } from 'lucide-react';
import EmergencyCTA from '../components/EmergencyCTA';

export default function Services() {
  return (
    <div>
      <div className="bg-blue-700 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 text-center">
            Comprehensive Dead Body Transportation Services Across India
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 text-center mb-8">
            Professional and compassionate transport services available 24/7
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Plane className="w-8 h-8 text-blue-700 mr-3" />
              <h2 className="text-xl sm:text-2xl font-semibold">Dead Body Transport by Air</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Complete assistance with embalming, packaging, customs clearance, cargo booking, and flight arrangements.
              </p>
              <h3 className="font-semibold text-lg">Key Features:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Embalming & Certification with official documentation</li>
                <li>• Customs-Approved Packaging (Metal/Wooden coffins)</li>
                <li>• Police NOC Assistance</li>
                <li>• Death Certificate Coordination</li>
                <li>• Flight Booking for deceased and family</li>
                <li>• Airport-to-Airport Ambulance Service</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Truck className="w-8 h-8 text-blue-700 mr-3" />
              <h2 className="text-xl sm:text-2xl font-semibold">Dead Body Transport by Road</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Short and long-distance transportation with normal ambulances and freezer box ambulances.
              </p>
              <h3 className="font-semibold text-lg">Key Features:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Normal Ambulances for short distances</li>
                <li>• Freezer Box Ambulances for long journeys</li>
                <li>• Door-to-Door Transportation</li>
                <li>• 24/7 Support and Tracking</li>
                <li>• Professional and Experienced Staff</li>
                <li>• Complete Documentation Support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Our Service Locations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CITIES.map((city) => (
              <Link
                key={city.name}
                to={`/services/${city.name}`}
                className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={city.imageUrl}
                  alt={city.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Services in {city.name.charAt(0).toUpperCase() + city.name.slice(1)}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{city.description}</p>
                  <div className="flex items-center text-blue-700">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <EmergencyCTA />
    </div>
  );
}