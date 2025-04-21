import React from 'react';
import FeatureCard from '../components/FeatureCard';
import AnimatedVideo from '../components/AnimatedVideo';
import { Tv, Users, Sparkles, Zap, Flame, Award } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Tv className="w-6 h-6" />,
      title: 'HD Streaming',
      description: 'Stream in high definition up to 4K resolution with adaptive bitrate for all devices and connection speeds.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Interactive Community',
      description: 'Engage with viewers through real-time chat, polls, and interactive elements to build your community.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Custom Branding',
      description: 'Personalize your channel with custom overlays, themes, and animations to stand out from the crowd.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Ultra-Low Latency',
      description: 'Experience real-time interaction with viewers with our industry-leading low-latency technology.'
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: 'Multi-Platform Streaming',
      description: 'Stream to multiple platforms simultaneously to maximize your reach and audience growth.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Analytics Dashboard',
      description: 'Track your performance with detailed analytics on viewership, engagement, and revenue.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Powerful Features For <span className="text-purple-600 dark:text-purple-400">Modern Creators</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to create engaging live content and grow your audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Real-time Engagement Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Connect with your audience like never before with our suite of interactive tools designed to increase engagement and build a loyal community.
            </p>
            
            <ul className="space-y-4">
              {[
                'Live polls and viewer voting', 
                'Custom emotes and reactions', 
                'Interactive overlays and alerts',
                'Moderation tools for healthy community',
                'Viewer milestones and achievements'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <AnimatedVideo 
              src="https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-happily-4640-large.mp4"
              poster="https://images.pexels.com/photos/7175450/pexels-photo-7175450.jpeg?auto=compress&cs=tinysrgb&w=1200"
              className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-[1.02]"
            />
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-5 -left-5 w-24 h-24 bg-purple-500/20 dark:bg-purple-500/10 rounded-lg rotate-12"></div>
            <div className="absolute -z-10 -bottom-5 -right-5 w-24 h-24 bg-pink-500/20 dark:bg-pink-500/10 rounded-lg -rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;