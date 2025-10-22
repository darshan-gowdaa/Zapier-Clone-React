import React from 'react';
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
    <div className="flex h-screen flex-col">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className='flex-1 flex flex-col'>
          <main className="flex-1">
            <Header />
            <FeatureList />
            <div className="mt-3">
              <h2 className="text-2xl font-bold text-gray-800 mb-1 ms-8">Start simple</h2>
              <div className="grid grid-cols-3 ">
                {templates.map(template => (
                  <div key={template.id} className="transform scale-80">
                    <TemplateCard
                      title={template.title}
                      image={template.image}
                      triggers={template.triggers}
                      type={template.type}
                    />
                  </div>
                ))}
              </div>
            </div>

            <TemplateGallery />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
