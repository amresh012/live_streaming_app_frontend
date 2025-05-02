import React, { useState } from 'react';
import Button from '../components/Button';
import { Play, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {

const token = localStorage.getItem("token")
 
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full">
                Streaming Reimagined
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span className="block">Stream Your Content</span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Like Never Before
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Create, stream, and engage with your audience in real-time using our powerful platform designed for creators of all sizes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 ">
               { token ?
               <Link to="/dashboard" >
                 <Button 
                variant="primary" 
                size="lg" 
                icon={<Play className="w-5 h-5" />}
              >
                Start Streaming Now
              </Button> 
               </Link>: 
               <Link to="/login">
               <Button 
                variant="primary" 
                size="lg" 
                icon={<Play className="w-5 h-5" />}
              >
                Start Streaming Now
              </Button>
               </Link>
               }
              <Button 
                variant="outline" 
                size="lg"
                icon={<Download className="w-5 h-5" />}
              >
                Download App
              </Button>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2`}
                    alt={`User ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                  />
                ))}
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                <span className="font-bold text-purple-600 dark:text-purple-400">1M+</span> creators already using StreamWave
              </div>
            </div>
          </div>

          {/* Hero image/video */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform rotate-1 transition-transform duration-500 hover:rotate-0" style={{ 
              animation: 'float 6s ease-in-out infinite'
            }}>
              <img 
                src="https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Live Streaming Demo"
                className="w-full h-auto rounded-lg"
              />
              
              {/* Overlay and effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 mix-blend-overlay"></div>
              
              {/* Live indicator */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                LIVE
              </div>
              
              {/* Viewer count */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                1.2k viewers
              </div>
            </div>
            
            {/* Background decoration elements */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-purple-400/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-pink-400/30 dark:bg-pink-900/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;