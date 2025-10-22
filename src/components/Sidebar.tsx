// Sidebar.tsx
import { useState } from 'react';
import { Layout, Home, Globe, Zap, Table, MessageSquare, Cannabis, Bot, Grid, Clock, MoreHorizontal, CreditCard, ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: Globe, label: 'Discover' },
    { icon: null, label: 'divider' },
    { icon: Zap, label: 'Zaps' },
    { icon: Table, label: 'Tables' },
    { icon: Layout, label: 'Interfaces', active: true },
    { icon: MessageSquare, label: 'Chatbots', beta: true },
    { icon: Cannabis, label: 'Canvas', beta: true },
    { icon: Bot, label: 'Agents', beta: true },
    { icon: null, label: 'divider' },
    { icon: Grid, label: 'Apps' },
    { icon: Clock, label: 'Zap History' },
    { icon: MoreHorizontal, label: 'More' },
    { icon: null, label: 'divider' },
    { icon: CreditCard, label: 'Professional plan (Trial)' }
  ];

  return (
    <div className={`${collapsed ? 'w-16' : 'w-64'} h-screen sticky top-0 bg-white border-r border-gray-200 flex flex-col transition-all duration-300 `}>
      {/* Toggle button */}
      <button 
        className="absolute -right-3 top-20 bg-orange-100 rounded-full p-1 border border-gray-300 shadow-2xl z-10"
        onClick={toggleSidebar}
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Create button */}
      <div className="p-4">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center">
          {collapsed ? '+' : '+ Create'}
        </button>
      </div>
      
      {/* Menu items */}
      <div className="mt-2 px-2 flex-1 overflow-y-auto">
        {menuItems.map((item, index) => {
          if (item.label === 'divider') {
            return <div key={`divider-${index}`} className="my-2 border-b border-gray-200"></div>;
          }
          
          const Icon = item.icon;
          
          return (
            <div 
              key={item.label} 
              className={`flex items-center py-2 px-3 ${collapsed ? 'justify-center' : ''} text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer transition-colors ${item.active ? 'bg-orange-50 text-orange-500' : ''}`}
            >
              {Icon && <Icon className={`${collapsed ? 'w-5 h-5' : 'w-4 h-4 mr-2'}`} />}
              {!collapsed && (
                <div className="flex justify-between items-center w-full">
                  <span className="text-sm">{item.label}</span>
                  {item.beta && <span className="text-xs bg-gray-100 px-1 rounded">Beta</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Tasks and Zaps counter */}
      {!collapsed && (
        <div className="mt-auto p-4 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Tasks</span>
            <span>0 / 1,000</span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Zaps</span>
            <span>Unlimited</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
