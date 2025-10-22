// Sidebar.tsx
import { Home, Globe, Zap, Table, Layout, MessageSquare, Settings, Bot, Grid, Clock, MoreHorizontal, CreditCard } from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar = ({ collapsed }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: Globe, label: 'Discover' },
    { type: 'divider' as const },
    { icon: Zap, label: 'Zaps' },
    { icon: Table, label: 'Tables' },
    { icon: Layout, label: 'Interfaces', active: true },
    { icon: MessageSquare, label: 'Chatbots' },
    { icon: Settings, label: 'Canvas' },
    { icon: Bot, label: 'Agents' },
    { type: 'divider' as const },
    { icon: Grid, label: 'Apps' },
    { icon: Clock, label: 'Zap History' },
    { icon: MoreHorizontal, label: 'More' },
    { type: 'divider' as const },
    { icon: CreditCard, label: 'Professional plan (Trial)' }
  ];

  return (
    <>
      {/* Create Button */}
      <div className="p-4 pt-16">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded flex items-center justify-center gap-2 transition-all duration-300">
          <span className="text-xl leading-none">+</span>
          {!collapsed && <span className="transition-opacity duration-300">Create</span>}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-2 overflow-y-auto">
        {menuItems.map((item, index) => {
          if (item.type === 'divider') {
            return <div key={`divider-${index}`} className="border-t border-gray-200 my-2" />;
          }

          const Icon = item.icon!;
          return (
            <div
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-all duration-300 ${
                item.active ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon size={20} className="flex-shrink-0" />
              {!collapsed && (
                <span className="text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300">
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer Stats */}
      <div className={`border-t border-gray-200 text-xs text-gray-600 transition-all duration-300 overflow-hidden ${
        collapsed ? 'h-0 p-0' : 'h-auto p-4'
      }`}>
        <div className="flex justify-between mb-1">
          <span>Tasks</span>
          <span>0 / 1,000</span>
        </div>
        <div className="flex justify-between">
          <span>Zaps</span>
          <span>Unlimited</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;