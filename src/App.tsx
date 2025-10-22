import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import TemplateGallery from './components/TemplateGallery';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Header from './components/Header';
import FeatureList from './components/FeatureList';
import TemplateCard from './components/TemplateCard';
import form from './assets/form.png';
import table from './assets/table.png';
import Kanban from './assets/Kanban.png';

const App: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const templates = [
    {
      id: 1,
      title: 'Add New Client',
      image: form,
      triggers: 1,
      type: 'Form' as const
    },
    {
      id: 2,
      title: 'Team members',
      image: table,
      triggers: 3,
      type: 'Table' as const
    },
    {
      id: 3,
      title: 'My tasks',
      image: Kanban,
      triggers: 3,
      type: 'Kanban' as const
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Fixed on left */}
      <aside 
        className={`${
          sidebarCollapsed ? 'w-16' : 'w-64'
        } bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 h-screen z-30 transition-all duration-300 ease-in-out`}
      >
        <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar - Fixed at top, overlapping sidebar */}
        <div className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-40">
          <Topbar sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed} />
        </div>

        {/* Scrollable Content */}
        <main 
          className={`${
            sidebarCollapsed ? 'ml-16' : 'ml-64'
          } flex-1 overflow-y-auto pt-14 transition-all duration-300 ease-in-out`}
        >
          <Header />
          <FeatureList />
          
          <div className="px-8 py-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Start simple</h2>
            <div className="grid grid-cols-3 gap-4">
              {templates.map(template => (
                <TemplateCard
                  key={template.id}
                  title={template.title}
                  image={template.image}
                  triggers={template.triggers}
                  type={template.type}
                />
              ))}
            </div>
          </div>

          <TemplateGallery />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;