import { BarChart, DollarSign, MessageSquare, Settings, Star, Tv, Users, Video } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Sidebar Navigation
 const Sidebar = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
  
    const navItems = [
      { icon: <BarChart className="w-5 h-5" />, label: 'Dashboard', path: '/dashboard' },
      { icon: <Video className="w-5 h-5" />, label: 'My Streams', path: '/dashboard/streams' },
      { icon: <DollarSign className="w-5 h-5" />, label: 'Monetization', path: '/dashboard/monetize' },
      { icon: <Users className="w-5 h-5" />, label: 'Community', path: '/dashboard/community' },
      { icon: <Star className="w-5 h-5" />, label: 'Subscription', path: '/dashboard/subscription' },
      { icon: <MessageSquare className="w-5 h-5" />, label: 'Messages', path: '/dashboard/messages' },
      { icon: <Settings className="w-5 h-5" />, label: 'Settings', path: '/dashboard/settings' },
    ];
  
    return (
      <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center space-x-2 mb-8">
          <Tv className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            StreamWave
          </span>
        </div>
  
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    );
  };


  export default Sidebar;