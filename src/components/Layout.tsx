import React, { useState } from 'react';
import { Activity, Briefcase, FileText, Map, Settings, Users } from 'lucide-react';
import { Projects } from './Projects';
import { SiteAnalysis } from './SiteAnalysis';
import { Dashboard } from './Dashboard';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'projects':
        return <Projects />;
      case 'site-analysis':
        return <SiteAnalysis />;
      default:
        return children;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Activity className="w-8 h-8" />
            PowerPlan AI
          </h1>
          <p className="text-sm text-indigo-200 mt-2">by AMIR KALANTARI</p>
        </div>
        <nav className="mt-6">
          {[
            { id: 'dashboard', icon: Activity, label: 'Dashboard' },
            { id: 'projects', icon: Briefcase, label: 'Projects' },
            { id: 'site-analysis', icon: Map, label: 'Site Analysis' },
            { id: 'reports', icon: FileText, label: 'Reports' },
            { id: 'team', icon: Users, label: 'Team' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setCurrentView(id)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-gray-100 hover:bg-indigo-600 transition-colors ${
                currentView === id ? 'bg-indigo-600' : ''
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">{renderContent()}</div>
      </main>
    </div>
  );
}