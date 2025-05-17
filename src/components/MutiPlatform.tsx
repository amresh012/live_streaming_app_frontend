import React, { useState } from 'react';
import { Plus, Check, X, Link, Youtube, Facebook, Twitch } from 'lucide-react';
import Button from './Button';

const defaultPlatforms = [
  { name: 'YouTube', key: 'youtube', icon: <Youtube/> },
  { name: 'Facebook', key: 'facebook', icon: <Facebook/> },
  { name: 'Twitch', key: 'twitch', icon: <Twitch/> },
];

const MultiplatformManager: React.FC = () => {
  const [availablePlatforms, setAvailablePlatforms] = useState(defaultPlatforms);
  const [selected, setSelected] = useState<string[]>([]);
  const [streamKeys, setStreamKeys] = useState<Record<string, string>>({});
  const [connectionStatus, setConnectionStatus] = useState<Record<string, boolean>>({});
  const [newPlatform, setNewPlatform] = useState({ name: '', key: '' });
  const [showAddPlatform, setShowAddPlatform] = useState(false);

  const handleSelect = (platformKey: string) => {
    setSelected(prev => 
      prev.includes(platformKey)
        ? prev.filter(key => key !== platformKey)
        : [...prev, platformKey]
    );
  };

  const handleKeyChange = (key: string, value: string) => {
    setStreamKeys(prev => ({ ...prev, [key]: value }));
    setConnectionStatus(prev => ({ ...prev, [key]: !!value }));
  };

  const handleAddPlatform = () => {
    if (newPlatform.name && newPlatform.key) {
      setAvailablePlatforms(prev => [...prev, { ...newPlatform, icon: '🌐' }]);
      setNewPlatform({ name: '', key: '' });
      setShowAddPlatform(false);
    }
  };

  const handleConnect = () => {
    const payload = selected.map(key => ({
      platform: key,
      streamKey: streamKeys[key],
    }));
    console.log('Connecting to:', payload);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Multiplatform Streaming
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Stream to multiple platforms simultaneously
          </p>
        </div>
      </div>

      {/* Platform Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availablePlatforms.map(platform => (
          <div
            key={platform.key}
            onClick={() => handleSelect(platform.key)}
            className={`flex items-center p-4 rounded-lg cursor-pointer border transition-colors ${
              selected.includes(platform.key)
                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
            }`}
          >
            <div className="flex-1 flex items-center space-x-3">
              <span className="text-2xl">{platform.icon}</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {platform.name}
              </span>
            </div>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              selected.includes(platform.key)
                ? 'bg-purple-500 text-white'
                : 'border-2 border-gray-300 dark:border-gray-600'
            }`}>
              {selected.includes(platform.key) && <Check className="w-3 h-3" />}
            </div>
          </div>
        ))}
      </div>

      {/* Stream Keys */}
      {selected.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
            Stream Keys
          </h3>
          {selected.map(key => {
            const platform = availablePlatforms.find(p => p.key === key);
            return (
              <div key={key} className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {platform?.name}
                  </label>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                    connectionStatus[key]
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {connectionStatus[key] ? 'Connected' : 'Not Connected'}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={`Enter ${platform?.name} stream key`}
                    value={streamKeys[key] || ''}
                    onChange={e => handleKeyChange(key, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                  />
                  <Link className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Add Platform Modal */}
      {showAddPlatform && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add Custom Platform
              </h3>
              <button
                onClick={() => setShowAddPlatform(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Platform Name
                </label>
                <input
                  type="text"
                  value={newPlatform.name}
                  onChange={e => setNewPlatform(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter platform name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Platform Key
                </label>
                <input
                  type="text"
                  value={newPlatform.key}
                  onChange={e => setNewPlatform(prev => ({ ...prev, key: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter unique identifier"
                />
              </div>
            </div>

            <div className="flex  justify-end space-x-3 mt-6">
              <Button
                variant="ghost"
                onClick={() => setShowAddPlatform(false)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleAddPlatform}
                disabled={!newPlatform.name || !newPlatform.key}
              >
                Add Platform
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Connect Button */}
      {selected.length > 0 && (
        <Button
          variant="primary"
          fullWidth
          onClick={handleConnect}
          disabled={selected.some(key => !streamKeys[key])}
        >
          Connect & Start Streaming
        </Button>
      )}
       <Button
          variant="outline"
          size="sm"
          className='text-xs'
          icon={<Plus className="w-4 h-4" />}
          onClick={() => setShowAddPlatform(true)}
        >
          Add Platform
        </Button>
    </div>
  );
};

export default MultiplatformManager;