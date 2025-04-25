import React from 'react';
import { Bell, Settings, X, ExternalLink } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';

interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsDropdown: React.FC<NotificationsDropdownProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      type: 'follower',
      content: 'Sarah Williams started following you',
      time: '2 min ago',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      unread: true
    },
    {
      id: 2,
      type: 'achievement',
      content: 'You reached 1,000 followers! 🎉',
      time: '1 hour ago',
      unread: true
    },
    {
      id: 3,
      type: 'stream',
      content: 'Your last stream reached 500 views',
      time: '3 hours ago',
      unread: false
    },
    {
      id: 4,
      type: 'mention',
      content: '@davidchen mentioned you in a comment',
      time: '5 hours ago',
      unread: false
    }
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Dropdown */}
      <div className="absolute top-[2em] right-[1rem] mt-2 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-lg z-50 border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
            </div>
            <div className="flex items-center space-x-2">
             <Link to="/dashboard/settings">
             <button 
                className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <Settings className="w-5 h-5" />
              </button>
             </Link>
              <button 
                onClick={onClose}
                className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                notification.unread ? 'bg-purple-50 dark:bg-purple-900/20' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                {notification.avatar ? (
                  <img
                    src={notification.avatar}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white">
                    {notification.content}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {notification.time}
                  </p>
                </div>
                {notification.unread && (
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
          <Button 
            variant="ghost" 
            fullWidth 
            className="text-gray-700 dark:text-gray-300"
            icon={<ExternalLink className="w-4 h-4" />}
          >
            View All Notifications
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotificationsDropdown;