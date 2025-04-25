import React, { useState } from 'react';
import { Search, Users, Star, Heart, UserPlus, MessageSquare, Filter, Check, Play, MoreVertical } from 'lucide-react';
import Button from '../components/Button';

interface Creator {
  id: number;
  name: string;
  avatar: string;
  category: string;
  followers: string;
  isFollowing: boolean;
  isLive?: boolean;
  viewerCount?: string;
}

interface Follower {
  id: number;
  name: string;
  avatar: string;
  followDate: string;
  isFollowingBack: boolean;
}

const CommunitySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'discover' | 'following' | 'followers'>('discover');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const creators: Creator[] = [
    {
      id: 1,
      name: "Emma Davis",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      category: "Design",
      followers: "12.5K",
      isFollowing: false,
      isLive: true,
      viewerCount: "1.2K"
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=100",
      category: "Technology",
      followers: "8.2K",
      isFollowing: true
    },
    {
      id: 3,
      name: "Sarah Wilson",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100",
      category: "Art",
      followers: "15.7K",
      isFollowing: false,
      isLive: true,
      viewerCount: "856"
    }
  ];

  const followers: Follower[] = [
    {
      id: 1,
      name: "Alex Thompson",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
      followDate: "2 days ago",
      isFollowingBack: true
    },
    {
      id: 2,
      name: "Jessica Lee",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
      followDate: "1 week ago",
      isFollowingBack: false
    }
  ];

  const categories = ['All', 'Design', 'Technology', 'Gaming', 'Art', 'Music'];

  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Community</h1>
          <p className="text-gray-600 dark:text-gray-400">Connect with other creators and grow your network</p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search creators..."
              className="pl-10 pr-4 py-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <Button variant="outline" icon={<Filter className="w-4 h-4" />}>
            Filters
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          {[
            { id: 'discover', label: 'Discover', icon: <Star className="w-5 h-5" /> },
            { id: 'following', label: 'Following', icon: <Heart className="w-5 h-5" /> },
            { id: 'followers', label: 'Followers', icon: <Users className="w-5 h-5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center space-x-2 pb-4 px-1 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Category Filter */}
      {activeTab === 'discover' && (
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category.toLowerCase())}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                categoryFilter === category.toLowerCase()
                  ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === 'discover' && creators.map((creator) => (
          <div key={creator.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {creator.isLive && (
                    <span className="absolute -top-1 -right-1 px-2 py-0.5 bg-red-500 text-white text-xs font-medium rounded-full">
                      LIVE
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {creator.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {creator.category} • {creator.followers} followers
                  </p>
                </div>
              </div>
              <Button
                variant={creator.isFollowing ? 'outline' : 'primary'}
                size="sm"
                icon={creator.isFollowing ? <Check className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
              >
                {creator.isFollowing ? 'Following' : 'Follow'}
              </Button>
            </div>

            {creator.isLive && (
              <div className="mt-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {creator.viewerCount} viewers
                  </span>
                  <Button variant="primary" size="sm" icon={<Play className="w-4 h-4" />}>
                    Watch Stream
                  </Button>
                </div>
              </div>
            )}

            <div className="mt-4 flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                icon={<MessageSquare className="w-4 h-4" />}
                className="text-gray-600 dark:text-gray-400"
              >
                Message
              </Button>
              <button className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}

        {activeTab === 'followers' && followers.map((follower) => (
          <div key={follower.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={follower.avatar}
                  alt={follower.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {follower.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Followed {follower.followDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {follower.isFollowingBack ? (
                  <span className="text-sm text-green-500">Follows you</span>
                ) : (
                  <Button variant="outline" size="sm" icon={<UserPlus className="w-4 h-4" />}>
                    Follow Back
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<MessageSquare className="w-4 h-4" />}
                  className="text-gray-600 dark:text-gray-400"
                >
                  Message
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunitySection;