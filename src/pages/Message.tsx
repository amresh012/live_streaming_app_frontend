// Project: Chat Application

import React, { useState, useRef, useEffect } from 'react';
import { Send, Image, Smile, Paperclip, MoreVertical, VideoIcon, Phone, Search } from 'lucide-react';
import EmojiPicker from '@emoji-mart/react';
import data from '@emoji-mart/data';

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
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: 'Hey! Loved your last stream about design systems!',
      sender: 'Sarah Wilson',
      timestamp: '10:30 AM',
      isOwn: false,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
  ]);

  

  const [messageInput, setMessageInput] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [activeChat, setActiveChat] = useState<number>(1);

  const emojiPickerRef = useRef(null);

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
      id: 1,
      name: "Sarah Wilson",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      lastMessage: "Looking to your next stream!",
      timestamp: "2m ago",
      unread: 2,
      online: true
    },
  ]
  // Handle message send
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return; // Prevent sending empty messages

    // Create a new message
    const newMessage: Message = {
      id: messages.length + 1,
      content: messageInput,
      sender: 'You',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    };

    // Add the new message to the messages list
    setMessages([...messages, newMessage]);

    // Reset the input field
    setMessageInput('');
  };

  // Handle emoji picker outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (emojiPickerRef.current && !(emojiPickerRef.current as any).contains(event.target)) {
        setShowPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Auto-resize textarea with max rows
  useEffect(() => {
    const MAX_ROWS = 5;
    const textarea = inputRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    const lineHeight = 24; // Approx line height (tailwind base)
    const scrollHeight = textarea.scrollHeight;
    const maxHeight = lineHeight * MAX_ROWS;

    textarea.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
  }, [messageInput]);

  // Add emoji to the input field
  const handleEmojiSelect = (emoji: any) => {
    setMessageInput(prev => prev + emoji.native);
  };

  return (
    <div className="flex h-[calc(100vh-2rem)] bg-white dark:bg-gray-800 rounded-xl shadow-sm">
 {/* Chat List */}
 <div className="w-80 border-r border-gray-200 dark:border-gray-700">

        <div className="p-4">
          {/* searchbar to filter messages */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
{/* chatlist */}
        <div className="overflow-y-auto space-y-2 h-[calc(100vh-8rem)]">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`w-full p-4 flex items-center space-x-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${activeChat === chat.id ? 'bg-purple-50 dark:bg-purple-900/20' : ''}`}
            >
              <div className="relative">
                <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover" />
                {chat.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{chat.timestamp}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && <span className="bg-purple-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">{chat.unread}</span>}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Messages</h2>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
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
            <div key={message.id} className={`flex items-start space-x-3 ${message.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <img src={message.avatar} alt={message.sender} className="w-8 h-8 rounded-full object-cover" />
              <div className={`max-w-md px-4 py-2 rounded-lg ${message.isOwn ? 'bg-purple-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'}`}>
                <p>{message.content}</p>
                <span className={`text-xs ${message.isOwn ? 'text-purple-200' : 'text-gray-500 dark:text-gray-400'} block mt-1`}>
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            {/* media picker */}
            <button type="button" className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="relative flex-1">
              <textarea
                ref={inputRef}
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e); // triggers form submit
                  }
                }}
                placeholder="Type a message..."
                rows={1}
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-auto max-h-[calc(1.5rem_*_5)]"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              {/* image picker */}
                <button type="button" className="p-1 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                  <Image className="w-5 h-5" />
                </button>
                <button type="button" className="p-1 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300" onClick={() => setShowPicker(!showPicker)}>
                  <Smile className="w-5 h-5" />
                </button>
              </div>
              {showPicker && (
                <div ref={emojiPickerRef} className="absolute bottom-16 right-0 z-10">
                  <EmojiPicker onEmojiSelect={handleEmojiSelect} data={data} />
                </div>
              )}
            </div>
            <button type="submit" className="p-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default MessagesSection;
