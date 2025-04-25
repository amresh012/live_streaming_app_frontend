import React, { useRef, useState } from 'react';
import { X, Video, Calendar, Clock, Tag } from 'lucide-react';
import Button from './Button';

interface NewStreamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewStreamModal: React.FC<NewStreamModalProps> = ({ isOpen, onClose }) => {
  const [streamData, setStreamData] = useState({
    title: '',
    description: '',
    category: '',
    date: '',
    time: '',
    isPrivate: false
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle stream creation logic here
    console.log('Stream data:', streamData);
    onClose();
  };
  // let mediaStream: MediaStream | null = null;

  // const videoEl = document.getElementById("video") as HTMLVideoElement;
  // const handleMedia = async (e: React.FormEvent) => {
  //   e.preventDefault();
  
  //   mediaStream = await navigator.mediaDevices.getUserMedia({
  //     audio: true,
  //     video: true,
  //   });
  
  //   if (videoEl) {
  //     videoEl.srcObject = mediaStream;
  //     videoEl.play();
  //   }
  // };

  // const stopMedia = () => {
  //   if (mediaStream) {
  //     mediaStream.getTracks().forEach(track => track.stop());
  //     mediaStream = null;
  //   }
  
  //   const videoEl = document.getElementById("video") as HTMLVideoElement;
  //   if (videoEl) {
  //     videoEl.srcObject = null;
  //   }
  // };

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
          {/* <video id='video' src={videoEl} muted></video> */}

          {/* Content */}
          <form onSubmit={handleSubmit} className="px-6 py-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Stream Title
                </label>
                <input
                  type="text"
                  value={streamData.title}
                  onChange={(e) => setStreamData({ ...streamData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
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
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
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
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      value={streamData.date}
                      onChange={(e) => setStreamData({ ...streamData, date: e.target.value })}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="time"
                      value={streamData.time}
                      onChange={(e) => setStreamData({ ...streamData, time: e.target.value })}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
              </div>

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
              <Button onClick={handleSubmit} type="submit" variant="primary" >
                Start Stream
              </Button>
              <Button type="submit" variant="secondary" onClick={handleSubmit}>
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