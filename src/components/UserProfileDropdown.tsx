import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User,
  Settings,
  CreditCard,
  HelpCircle,
  LogOut,
  Moon,
  Sun,
  Shield,
  Star
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface UserProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfileDropdown: React.FC<UserProfileDropdownProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Dropdown */}
      <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-lg z-50 border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* User Info */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                Alex Johnson
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                @alexjohnson
              </p>
            </div>
          </div>
          
          <div className="mt-3 grid grid-cols-2 gap-2 text-center text-sm">
            <div className="px-3 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <p className="font-semibold text-gray-900 dark:text-white">1.2K</p>
              <p className="text-gray-500 dark:text-gray-400">Followers</p>
            </div>
            <div className="px-3 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <p className="font-semibold text-gray-900 dark:text-white">Pro</p>
              <p className="text-gray-500 dark:text-gray-400">Status</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-2">
          <Link
            to="/dashboard/settings"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={onClose}
          >
            <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300">View Profile</span>
          </Link>
          
          <Link
            to="/dashboard/settings"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={onClose}
          >
            <Settings className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300">Settings</span>
          </Link>
          
          <Link
            to="/dashboard/settings/billing"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={onClose}
          >
            <CreditCard className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300">Billing</span>
          </Link>

          <Link
            to="/dashboard/settings/security"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={onClose}
          >
            <Shield className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300">Security</span>
          </Link>

          <Link
            to="/dashboard/settings/subscription"
            className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={onClose}
          >
            <div className="flex items-center space-x-3">
              <Star className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">Subscription</span>
            </div>
            <span className="text-xs font-medium text-purple-600 dark:text-purple-400">Pro</span>
          </Link>

          <hr className="my-2 border-gray-200 dark:border-gray-700" />

          <button
            onClick={() => {
              toggleTheme();
              onClose();
            }}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            )}
            <span className="text-gray-700 dark:text-gray-300">
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>

          <Link
            to="/help"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={onClose}
          >
            <HelpCircle className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300">Help Center</span>
          </Link>

          <hr className="my-2 border-gray-200 dark:border-gray-700" />

          <button
            onClick={() => {
              // Handle logout
              localStorage.removeItem('isAuthenticated');
              window.location.href = '/login';
            }}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600 dark:text-red-400 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfileDropdown;