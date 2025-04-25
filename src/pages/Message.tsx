import React, { useState } from 'react';
import { Search, MoreVertical, Send, Image, Smile, Paperclip, Phone, Video as VideoIcon } from 'lucide-react';
import Button from '../components/Button';

interface Message {
  id: number;
  content: string;
  sender: string;
  timestamp: string;
  isOwn: boolean;
  avatar: string;
}

interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online: boolean;
}

const MessagesSection: React.FC = () => {
  const [activeChat, setActiveChat] = useState<number>(1);
  const [messageInput, setMessageInput] = useState('');

  const chats: Chat[] = [
    {
      id: 1,
      name: "Sarah Wilson",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      lastMessage: "Looking forward to your next stream!",
      timestamp: "2m ago",
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: "David Chen",
      avatar: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=100",
      lastMessage: "Thanks for the tips!",
      timestamp: "1h ago",
      unread: 0,
      online: true
    },
    {
      id: 3,
      name: "Emma Thompson",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100",
      lastMessage: "Great stream today!",
      timestamp: "3h ago",
      unread: 1,
      online: false
    },
    {
        id: 4,
        name: "Emma Thompson",
        avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100",
        lastMessage: "Great stream today!",
        timestamp: "3h ago",
        unread: 1,
        online: false
      },
      {
        id: 5,
        name: "David Chen",
        avatar: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=100",
        lastMessage: "Thanks for the tips!",
        timestamp: "1h ago",
        unread: 0,
        online: true
      },
  ];

  const messages: Message[] = [
    {
      id: 1,
      content: "Hey! Loved your last stream about design systems!",
      sender: "Sarah Wilson",
      timestamp: "10:30 AM",
      isOwn: false,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 2,
      content: "Thanks Sarah! I'm glad you found it helpful 😊",
      sender: "You",
      timestamp: "10:32 AM",
      isOwn: true,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 3,
      content: "Will you be covering more advanced topics in the next stream?",
      sender: "Sarah Wilson",
      timestamp: "10:33 AM",
      isOwn: false,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 4,
      content: "Yes! I'm planning to dive into design tokens and component architecture.",
      sender: "You",
      timestamp: "10:35 AM",
      isOwn: true,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    
    // Handle sending message
    console.log('Sending message:', messageInput);
    setMessageInput('');
  };

  return (
    <div className="flex h-[calc(100vh-2rem)] bg-white dark:bg-gray-800 rounded-xl shadow-sm">
      {/* Chat List */}
      <div className="w-80 border-r border-gray-200 dark:border-gray-700">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-8rem)]">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`w-full p-4 flex items-center space-x-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                activeChat === chat.id ? 'bg-purple-50 dark:bg-purple-900/20' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {chat.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {chat.name}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{chat.timestamp}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {chat.lastMessage}
                </p>
              </div>
              {chat.unread > 0 && (
                <span className="bg-purple-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                  {chat.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Content */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={chats.find(chat => chat.id === activeChat)?.avatar}
              alt="Chat avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                {chats.find(chat => chat.id === activeChat)?.name}
              </h2>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
              <VideoIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 ${
                message.isOwn ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <img
                src={message.avatar}
                alt={message.sender}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div
                className={`max-w-md px-4 py-2 rounded-lg ${
                  message.isOwn
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}
              >
                <p>{message.content}</p>
                <span className={`text-xs ${
                  message.isOwn ? 'text-purple-200' : 'text-gray-500 dark:text-gray-400'
                } block mt-1`}>
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="relative flex-1">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type a message..."
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                <button
                  type="button"
                  className="p-1 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <Image className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="p-1 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <Smile className="w-5 h-5" />
                </button>
              </div>
            </div>
            <Button
              type="submit"
              variant="primary"
              className="!p-2"
              disabled={!messageInput.trim()}
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessagesSection;