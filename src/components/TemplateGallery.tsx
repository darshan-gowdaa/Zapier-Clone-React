import { useState, useEffect, useRef } from 'react';
import { templates } from '../data/templates';
import { TemplateType } from '../types/template';
import { Search, Users, ChevronDown, UserCheck, SquarePlus, TrendingUp } from 'lucide-react'; // Updated imports
import { categories, Category } from '../data/categories';

const roles = [
  'All Roles',
  'Business Owner',
  'Customer Support Ops',
  'Data Science',
  'Engineering',
  'HR / Recruiting Ops',
  'IT'
];

const TemplateGallery = () => {
  // dedupe handled inline when rendering

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRole, setSelectedRole] = useState('All Roles');
  const [filteredTemplates, setFilteredTemplates] = useState<TemplateType[]>(templates);
  // no separate newTemplates state required
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const filtered = templates.filter((template: TemplateType) => {
      const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
      const matchesRole = selectedRole === 'All Roles' || (template.role && template.role === selectedRole);
      return matchesSearch && matchesCategory && matchesRole;
    });

    setFilteredTemplates(filtered);
  }, [searchTerm, selectedCategory, selectedRole]);


  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-6">Templates</h1>

      <div className="flex justify-between mb-6 relative">
        <div className="relative">
          <button
            className="flex items-center px-4 py-2 border rounded-lg text-purple-700 bg-purple-100 hover:bg-purple-200 transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Users className="w-4 h-4 mr-2" />
            {selectedRole}
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>
          {isDropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-60 bg-white border rounded-lg shadow-lg z-10 transition-all duration-300 transform origin-top"
              ref={dropdownRef}
            >
              {roles.map((role) => (
                <div
                  key={role}
                  className={`flex items-center px-4 py-2 cursor-pointer transition-colors duration-200 ${selectedRole === role
                      ? 'bg-purple-100 text-purple-700 font-medium'
                      : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  onClick={() => setSelectedRole(role)}
                >
                  <UserCheck className="w-4 h-4 mr-2" />
                  {role}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for a template"
            className="pl-10 pr-4 py-2 border rounded-lg w-64 transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {categories.map((category: Category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`px-3 py-1 text-sm whitespace-nowrap rounded-full transition-colors duration-200 cursor-pointer ${selectedCategory === category.value
                ? 'bg-purple-700 text-white font-semibold'
                : 'bg-gray-100 hover:bg-purple-200'
              }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTemplates.filter((template, index, self) =>
          index === self.findIndex((t) => t.title === template.title)
        ).map((template) => (


          <div
            key={template.title}
            className="border rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:bg-purple-100 hover:border-purple-700"
          >
            <h3 className="font-medium mb-2">{template.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{template.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {template.usageCount ? (
                  <span className="text-sm text-gray-500"><Users className="w-4 h-4 inline mr-1" /> {template.usageCount}</span>
                ) : (
                  <span className="text-sm text-gray-500"><TrendingUp className="w-4 h-4 inline mr-1" /> New</span>
                )}
              </div>
              <button className="text-purple-700 hover:text-purple-900 text-xs font-medium transition-colors duration-200 cursor-pointer">
                <SquarePlus className="w-4 h-4 inline mr-1" /> Use template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateGallery;
