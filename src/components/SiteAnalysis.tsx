import React from 'react';
import { Cloud, Sun, Wind, Droplets, ThermometerSun, Map as MapIcon } from 'lucide-react';

export function SiteAnalysis() {
  const sites = [
    {
      id: 1,
      name: 'Desert Valley Site',
      location: 'Arizona, USA',
      coordinates: '33.4484° N, 112.0740° W',
      suitability: 92,
      factors: {
        solar: 95,
        wind: 75,
        water: 45,
        temperature: 88,
      },
      image: 'https://images.unsplash.com/photo-1469533778471-92a68acc3633?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      name: 'Coastal Wind Farm',
      location: 'Oregon, USA',
      coordinates: '44.0521° N, 123.0868° W',
      suitability: 87,
      factors: {
        solar: 65,
        wind: 92,
        water: 85,
        temperature: 72,
      },
      image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Site Analysis</h1>
          <p className="mt-2 text-gray-600">Analyze and compare potential project locations</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
          <MapIcon className="w-5 h-5" />
          Open Map View
        </button>
      </div>

      {/* Sites Grid */}
      <div className="grid gap-6">
        {sites.map((site) => (
          <div key={site.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex">
              <div 
                className="w-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${site.image})` }}
              />
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{site.name}</h3>
                    <p className="text-gray-600 mt-1">{site.location}</p>
                    <p className="text-sm text-gray-500 mt-1">{site.coordinates}</p>
                  </div>
                  <div className="bg-green-100 px-3 py-1 rounded-full">
                    <span className="text-green-700 font-medium">{site.suitability}% Suitable</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Sun className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Solar</p>
                      <p className="font-medium">{site.factors.solar}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Wind className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Wind</p>
                      <p className="font-medium">{site.factors.wind}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-cyan-100 rounded-lg">
                      <Droplets className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Water</p>
                      <p className="font-medium">{site.factors.water}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <ThermometerSun className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Temperature</p>
                      <p className="font-medium">{site.factors.temperature}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}