import { Search, HelpCircle, Grid, X } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <button className="mr-4">
            <X className="w-5 h-5 text-gray-500" />
          </button>
          
          <div className="flex items-center">
            <span className="font-bold text-2xl mr-1 text-black">zapier</span>
            <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
          </div>
        </div>
        
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
          
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-1.5 rounded-md transition-colors">
            Upgrade
          </button>
          
          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-medium">
            D
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
