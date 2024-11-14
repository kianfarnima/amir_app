import React from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { ProjectProvider } from './context/ProjectContext';

function App() {
  return (
    <ProjectProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </ProjectProvider>
  );
}

export default App;