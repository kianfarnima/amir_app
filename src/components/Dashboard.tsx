import React from 'react';
import { BarChart3, Battery, Cpu, Globe2, Users2, Wind } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { StatsCard } from './StatsCard';
import { useProject } from '../context/ProjectContext';

export function Dashboard() {
  const { projects } = useProject();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Project Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Monitor and manage your power infrastructure projects
        </p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard
          icon={Wind}
          title="Active Projects"
          value="12"
          trend="+2 this month"
          trendUp={true}
        />
        <StatsCard
          icon={Battery}
          title="Total Capacity"
          value="2.4 GW"
          trend="+0.3 GW YTD"
          trendUp={true}
        />
        <StatsCard
          icon={Globe2}
          title="Sites Analyzed"
          value="47"
          trend="+5 this week"
          trendUp={true}
        />
      </div>

      {/* Project Overview */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Recent Projects</h2>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            New Project
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProjectCard
            title="Solar Farm Expansion"
            location="Nevada, USA"
            capacity="500 MW"
            progress={75}
            image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80"
          />
          <ProjectCard
            title="Wind Turbine Installation"
            location="Scotland, UK"
            capacity="200 MW"
            progress={45}
            image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80"
          />
        </div>
      </section>

      {/* Analytics Section */}
      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Analytics</h2>
        <div className="h-64 flex items-center justify-center text-gray-400">
          <BarChart3 className="w-12 h-12" />
        </div>
      </section>
    </div>
  );
}