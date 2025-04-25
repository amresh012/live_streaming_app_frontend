import React, { useState } from 'react';
import { 
  Users, 
  Share2, 
  Heart,
  MessageSquare,
  Send,
  Gift,
  Settings,
  MoreVertical,
  Smile,
  Image as ImageIcon
} from 'lucide-react';
import Button from '../components/Button';

const LiveStream: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isLiked, setIsLiked] = useState(false);

  const messages = [
    {
      id: 1,
      user: "Sarah",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      message: "Great stream! Love the content 🎉",
      time: "2m ago",
      isModerator: true
    },
    {
      id: 2,
      user: "Alex",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
      message: "Could you explain that last part again?",
      time: "1m ago",
      isSubscriber: true
    },
    {
      id: 3,
      user: "Mike",
      avatar: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=100",
      message: "Thanks for sharing your knowledge!",
      time: "Just now",
      isSubscriber: true
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Handle sending message
    setMessage('');
  };

  return (
    <div className="h-[calc(100vh-2rem)] flex flex-col lg:flex-row gap-4 p-4">
      {/* Main Content */}
      <div className="flex-1">
        {/* Video Player */}
        <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
          <video
            className="w-full h-full object-contain"
            src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4"
            autoPlay
            controls
          />
          <div className="absolute top-4 left-4 px-2 py-1 bg-red-500 text-white text-sm font-medium rounded-full flex items-center">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
            LIVE
          </div>
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <div className="px-3 py-1 bg-black/50 text-white rounded-full text-sm flex items-center">
              <Users className="w-4 h-4 mr-2" />
              1.2k viewers
            </div>
          </div>
        </div>

        {/* Stream Info */}
        <div className="mt-4 bg-white dark:bg-gray-800 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Design Systems Workshop
              </h1>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Streamer"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-900 dark:text-white">Alex Johnson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">1.2M followers</p>
                  </div>
                </div>
                <Button variant="primary">Follow</Button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                icon={<Share2 className="w-4 h-4" />}
                onClick={() => {}}
              >
                Share
              </Button>
              <Button
                variant={isLiked ? 'primary' : 'outline'}
                icon={<Heart className="w-4 h-4" />}
                onClick={() => setIsLiked(!isLiked)}
              >
                {isLiked ? 'Liked' : 'Like'}
              </Button>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-gray-700 dark:text-gray-300">
              Join me as we explore the fundamentals of design systems and how to implement them effectively in your projects. We'll cover component architecture, documentation, and best practices.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                Design
              </span>
              <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                UI/UX
              </span>
              <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                Development
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-full lg:w-80 bg-white dark:bg-gray-800 rounded-xl flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Live Chat</h2>
            <div className="flex items-center space-x-2">
              <button className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                <Settings className="w-5 h-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-start space-x-3">
              <img
                src={msg.avatar}
                alt={msg.user}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {msg.user}
                  </span>
                  {msg.isModerator && (
                    <span className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs rounded">
                      Mod
                    </span>
                  )}
                  {msg.isSubscriber && (
                    <span className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded">
                      Sub
                    </span>
                  )}
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {msg.time}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  {msg.message}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSendMessage} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Send a message..."
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                <button
                  type="button"
                  className="p-1.5 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <Smile className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="p-1.5 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <ImageIcon className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="p-1.5 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <Gift className="w-5 h-5" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;