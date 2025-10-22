import { Search, HelpCircle, Grid, ChevronLeft, ChevronRight } from 'lucide-react';

interface TopbarProps {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (value: boolean) => void;
}

const Topbar = ({ sidebarCollapsed, setSidebarCollapsed }: TopbarProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
      {/* Left Section - Collapse/Expand Button + Zapier Logo */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          {sidebarCollapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          )}
        </button>

        {/* Zapier Logo */}
        <div className="flex items-center">
          <span className="font-bold text-2xl text-black">zapier</span>
          <div className="w-3 h-3 bg-orange-500 rounded-sm ml-1"></div>
        </div>
      </div>

      {/* Right Section - Actions */}
      <div className="flex items-center space-x-5">
        <button className="flex items-center text-gray-700 hover:text-gray-900">
          <Search className="w-5 h-5 mr-1" />
          <span>Search</span>
        </button>

        <button className="flex items-center text-gray-700 hover:text-gray-900">
          <HelpCircle className="w-5 h-5 mr-1" />
          <span>Help</span>
        </button>

        <button className="flex items-center text-gray-700 hover:text-gray-900">
          <Grid className="w-5 h-5 mr-1" />
          <span>Explore apps</span>
        </button>

        <button className="text-gray-700 hover:text-gray-900 border border-gray-300 px-4 py-1.5 rounded-md">
          Contact Sales
        </button>

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-1.5 rounded-md transition-colors">
          Upgrade
        </button>

        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
          D
        </div>
      </div>
    </div>
  );
};

export default Topbar;