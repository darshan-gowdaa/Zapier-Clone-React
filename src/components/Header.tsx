import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 mx-12 mt-5">
      <div className="flex items-center">
        <div className="bg-orange-600 w-8 h-8 mr-3"></div>
        <h1 className="text-3xl font-bold text-gray-800">Interfaces</h1>
      </div>
      <button className="flex items-center px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Start blank
      </button>
    </div>
  );
};

export default Header;