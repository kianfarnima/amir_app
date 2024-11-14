import React, { createContext, useContext, ReactNode } from 'react';

interface Project {
  id: string;
  title: string;
  location: string;
  capacity: string;
  progress: number;
}

interface ProjectContextType {
  projects: Project[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Solar Farm Expansion',
      location: 'Nevada, USA',
      capacity: '500 MW',
      progress: 75,
    },
    {
      id: '2',
      title: 'Wind Turbine Installation',
      location: 'Scotland, UK',
      capacity: '200 MW',
      progress: 45,
    },
  ];

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
}