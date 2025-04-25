import React, { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { 
  Tv, 
  Settings, 
  Users, 
  BarChart, 
  Video, 
  MessageSquare, 
  Bell, 
  Search,
  Plus,
  Check,
  Play,
  MoreVertical,
  LayoutGrid,
  LayoutList,
  DollarSign
} from 'lucide-react';
import Button from '../components/Button';
import SettingsSection from './setting';
import MessagesSection from './Message';
import CommunitySection from './Community';
import LiveStream from './Livestream';
import NewStreamModal from '../components/NewStreamModal';
import NotificationsDropdown from '../components/NotifictionDropdown';
import UserProfileDropdown from '../components/UserProfileDropdown';
import MultiplatformConnect from '../components/MutiPlatform';

// Analytics Stats
const AnalyticsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
    {[
      { label: 'Total Views', value: '24.5k', change: '+12%' },
      { label: 'Followers', value: '1,234', change: '+3%' },
      { label: 'Stream Time', value: '45.2h', change: '+8%' },
      { label: 'Stream Revenu', value: '45k', change: '+4%' },
    ].map((stat) => (
      <div key={stat.label} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
        <div className="flex items-end space-x-2 mt-2">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
          <span className="text-sm text-green-500">{stat.change}</span>
        </div>
      </div>
    ))}
  </div>
);

// Recent Streams Section
const RecentStreamsSection = ({ onNewStream }: { onNewStream: () => void }) => {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  
  const recentStreams = [
    {
      id: 1,
      title: 'Design Systems in 2024',
      thumbnail: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      views: '1.2k',
      duration: '1:45:30',
      date: 'Mar 10, 2024',
      category: 'Design'
    },
    {
      id: 2,
      title: 'Figma Advanced Techniques',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      views: '856',
      duration: '1:15:00',
      date: 'Mar 8, 2024',
      category: 'Tutorial'
    },
    {
      id: 3,
      title: 'UI/UX Design Workshop',
      thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      views: '2.1k',
      duration: '2:30:00',
      date: 'Mar 7, 2024',
      category: 'Workshop'
    },
    {
      id: 4,
      title: 'Creating Design Systems',
      thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      views: '1.5k',
      duration: '1:20:00',
      date: 'Mar 6, 2024',
      category: 'Design'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Streams</h2>
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setLayout('grid')}
              className={`p-1.5 rounded ${
                layout === 'grid'
                  ? 'bg-white dark:bg-gray-600 text-purple-600 dark:text-purple-400 shadow-sm'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLayout('list')}
              className={`p-1.5 rounded ${
                layout === 'list'
                  ? 'bg-white dark:bg-gray-600 text-purple-600 dark:text-purple-400 shadow-sm'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <LayoutList className="w-4 h-4" />
            </button>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            icon={<Plus className="w-4 h-4" />}
            onClick={onNewStream}
          >
            New Stream
          </Button>
        </div>
      </div>
      
      {layout === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentStreams.map((stream) => (
            <div key={stream.id} className="group relative">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
                  {stream.duration}
                </span>
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {stream.title}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {stream.views} views • {stream.date}
                  </span>
                  <span className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-2 py-0.5 rounded">
                    {stream.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {recentStreams.map((stream) => (
            <div key={stream.id} className="flex space-x-4 group">
              <div className="relative flex-shrink-0">
                <div className="relative w-48 h-28 rounded-lg overflow-hidden">
                  <img
                    src={stream.thumbnail}
                    alt={stream.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
                    {stream.duration}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {stream.title}
                </h3>
                <div className="mt-1 space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stream.views} views • {stream.date}
                  </p>
                  <span className="inline-block text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-2 py-0.5 rounded">
                    {stream.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Upcoming Streams Section
const UpcomingStreamsSection = () => {
  const upcomingStreams = [
    { id: 1, title: 'UI/UX Design Workshop', date: 'Mar 15, 2024', time: '3:00 PM' },
    { id: 2, title: 'Weekly Q&A Session', date: 'Mar 17, 2024', time: '5:00 PM' },
  ];

  return (
    <>
    <div>
      <MultiplatformConnect/>
      </div>
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Upcoming Streams
      </h2>
      <div className="space-y-4">
        {upcomingStreams.map((stream) => (
          <div
            key={stream.id}
            className="border-l-4 border-purple-500 pl-4 py-2"
            >
            <h3 className="font-medium text-gray-900 dark:text-white">
              {stream.title}
            </h3>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
              {stream.date} at {stream.time}
            </p>
            <Button variant='outline'>Reschedule</Button>
          </div>
        ))}
      </div>
    </div>
        </>
  );
};

// Notifications Section
const NotificationsSection = () => {
  const notifications = [
    { id: 1, message: 'New follower: @sarah_designs', time: '2 min ago' },
    { id: 2, message: 'Your last stream reached 1k views!', time: '1 hour ago' },
    { id: 3, message: 'Subscription payment received', time: '3 hours ago' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Recent Notifications
      </h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start space-x-3">
            <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>
            <div>
              <p className="text-gray-900 dark:text-white text-sm">
                {notification.message}
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {notification.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sidebar Navigation
const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: <BarChart className="w-5 h-5" />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Video className="w-5 h-5" />, label: 'My Streams', path: '/dashboard/streams' },
    { icon: <DollarSign className="w-5 h-5" />, label: 'Monetization', path: '/dashboard/monetize' },
    { icon: <Users className="w-5 h-5" />, label: 'Community', path: '/dashboard/community' },
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

// Header with Search and Profile
const Header = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search streams, analytics, settings..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button 
            className="relative p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            onClick={() => {
              setIsNotificationsOpen(!isNotificationsOpen);
              setIsProfileOpen(false);
            }}
          >
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <NotificationsDropdown 
            isOpen={isNotificationsOpen} 
            onClose={() => setIsNotificationsOpen(false)} 
          />
        </div>
        <div className="relative">
          <button
            onClick={() => {
              setIsProfileOpen(!isProfileOpen);
              setIsNotificationsOpen(false);
            }}
            className="relative w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all"
          >
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>
          <UserProfileDropdown 
            isOpen={isProfileOpen} 
            onClose={() => setIsProfileOpen(false)} 
          />
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Content
const DashboardContent = () => {
  const [isNewStreamModalOpen, setIsNewStreamModalOpen] = useState(false);

  return (
    <>
      <Header />
      <AnalyticsSection />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecentStreamsSection onNewStream={() => setIsNewStreamModalOpen(true)} />
        </div>
        <div className="space-y-8">
          <UpcomingStreamsSection />
          <NotificationsSection />
        </div>
      </div>
      <NewStreamModal 
        isOpen={isNewStreamModalOpen} 
        onClose={() => setIsNewStreamModalOpen(false)} 
      />
    </>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      {/* Main content */}
      <main className="ml-64 p-8">
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/settings" element={<SettingsSection />} />
          <Route path="/messages" element={<MessagesSection />} />
          <Route path="/community" element={<CommunitySection />} />
          <Route path="/stream/:id" element={<LiveStream />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;