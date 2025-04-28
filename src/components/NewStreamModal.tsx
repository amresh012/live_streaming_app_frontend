import React, { useState } from 'react';
import { X, Video, Calendar, Tag } from 'lucide-react';
import Button from './Button';
import { useCreateStreamMutation } from '../services/streamApi';
interface NewStreamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewStreamModal: React.FC<NewStreamModalProps> = ({ isOpen, onClose }) => {
  const [createStream, { isLoading }] = useCreateStreamMutation();
  const [streamData, setStreamData] = useState({
    title: '',
    description: '',
    category: '',
    scheduledAt: '',
    isPrivate: false
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Stream data:', streamData);
  //   onClose();
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const payload = {
        ...streamData,
        scheduledAt: streamData.date && streamData.time 
          ? new Date(`${streamData.date}T${streamData.time}`).toISOString()
          : null,
      };
      
      const response = await createStream(payload).unwrap();
      
      console.log('Stream Created ✅', response);
  
      // Show Stream Key + URL to user (if needed) or redirect to Live Room
      onClose();
    } catch (error) {
      console.error('Error creating stream ❌', error);
    }
  };
  

  const getMinDateTime = () => {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const local = new Date(now.getTime() - offset * 60 * 1000);
    return local.toISOString().slice(0, 16); // "2025-04-26T10:30"
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />

        <div className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <Video className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Start New Stream
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <form onSubmit={handleSubmit} className="px-6 py-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Stream Title
              </label>
              <input
                type="text"
                value={streamData.title}
                onChange={(e) => setStreamData({ ...streamData, title: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your stream title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                value={streamData.description}
                onChange={(e) => setStreamData({ ...streamData, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500"
                placeholder="Describe your stream"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Category
              </label>
              <div className="relative">
                <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={streamData.category}
                  onChange={(e) => setStreamData({ ...streamData, category: e.target.value })}
                  className="w-full pl-10 pr-3 py-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a category</option>
                  <option value="gaming">Gaming</option>
                  <option value="tech">Technology</option>
                  <option value="creative">Creative</option>
                  <option value="irl">Just Chatting</option>
                  <option value="music">Music</option>
                </select>
              </div>
            </div>

            {/* Schedule Stream (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Schedule Stream (Optional)
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="datetime-local"
                  value={streamData.scheduledAt}
                  onChange={(e) => setStreamData({ ...streamData, scheduledAt: e.target.value })}
                  min={getMinDateTime()}
                  className="w-full pl-10 pr-3 py-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Private Stream */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="private"
                checked={streamData.isPrivate}
                onChange={(e) => setStreamData({ ...streamData, isPrivate: e.target.checked })}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="private" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Make this stream private
              </label>
            </div>

            {/* Quick Tips */}
            <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <h4 className="text-sm font-medium text-purple-800 dark:text-purple-300 mb-2">
                Quick Tips
              </h4>
              <ul className="text-sm text-purple-700 dark:text-purple-200 space-y-1">
                <li>• Use a clear and descriptive title</li>
                <li>• Set a schedule to notify your followers</li>
                <li>• Choose the right category for better visibility</li>
              </ul>
            </div>
          </form>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-row-reverse gap-3">
              <Button onClick={handleSubmit} type="submit" variant="primary">
                Start Stream
              </Button>
              <Button onClick={handleSubmit} type="submit" variant="secondary">
                Schedule Stream
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewStreamModal;
