import React from 'react';

interface TemplateCardProps {
  title: string;
  image: string;
  triggers: number;
  type: 'Form' | 'Table' | 'Kanban';
}

const TemplateCard: React.FC<TemplateCardProps> = ({ title, image, triggers, type }) => {
  return (
    <div className="bg-teal-50 rounded-lg overflow-hidden m-5">
      <img src={image} alt={title} className="w-full h-42 object-cover" />
      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{type}</h3>
          <p className="text-sm text-gray-600">{triggers} trigger</p>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
