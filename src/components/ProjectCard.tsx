import React from 'react';
import { MapPin, Zap } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  location: string;
  capacity: string;
  progress: number;
  image: string;
}

export function ProjectCard({ title, location, capacity, progress, image }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            {location}
          </div>
          <div className="flex items-center text-gray-600">
            <Zap className="w-4 h-4 mr-2" />
            {capacity}
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Progress</span>
            <span className="text-indigo-600 font-medium">{progress}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-indigo-600 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}