import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Video, 
  Shield, 
  Wallet, 
  Globe,
  Camera,
  Mic,
  Save
} from 'lucide-react';
import Button from '../components/Button';

const SettingsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    streamAlerts: true,
    mentionNotifications: true,
    followerAlerts: true
  });

  const [streamSettings, setStreamSettings] = useState({
    quality: '1080p',
    bitrate: '6000',
    encoder: 'x264'
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'stream', label: 'Stream Settings', icon: <Video className="w-5 h-5" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'billing', label: 'Billing', icon: <Wallet className="w-5 h-5" /> },
    { id: 'integrations', label: 'Integrations', icon: <Globe className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Settings Navigation */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Settings Content */}
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Profile Settings</h2>
                
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120"
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <button className="absolute bottom-0 right-0 p-1.5 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Profile Photo</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Upload a new profile photo
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Display Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                      defaultValue="Alex Johnson"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                      defaultValue="@alexjohnson"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                      defaultValue="Professional streamer and content creator. Sharing my passion for gaming and technology."
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'stream' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Stream Settings</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Video Settings</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Stream Quality
                      </label>
                      <select
                        value={streamSettings.quality}
                        onChange={(e) => setStreamSettings({...streamSettings, quality: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="720p">720p</option>
                        <option value="1080p">1080p</option>
                        <option value="1440p">1440p</option>
                        <option value="4k">4K</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Bitrate (kbps)
                      </label>
                      <input
                        type="number"
                        value={streamSettings.bitrate}
                        onChange={(e) => setStreamSettings({...streamSettings, bitrate: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Audio Settings</h3>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Microphone
                        </label>
                        <div className="flex items-center space-x-2">
                          <Mic className="w-5 h-5 text-gray-400" />
                          <select className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white">
                            <option>Default Microphone</option>
                            <option>External Mic</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Audio Bitrate
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white">
                        <option>128 kbps</option>
                        <option>160 kbps</option>
                        <option>192 kbps</option>
                        <option>256 kbps</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button variant="primary" icon={<Save className="w-4 h-4" />}>
                    Save Stream Settings
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Notification Preferences</h2>
                
                <div className="space-y-4">
                  {Object.entries(notificationSettings).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                      <div>
                        <h3 className="text-base font-medium text-gray-900 dark:text-white">
                          {key.split(/(?=[A-Z])/).join(' ')}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Receive notifications for {key.toLowerCase()}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={() => setNotificationSettings({
                            ...notificationSettings,
                            [key]: !value
                          })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default SettingsSection;