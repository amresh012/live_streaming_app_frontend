import React from 'react';
import Button from '../components/Button';
import { ArrowRight, Download, Apple, Smartphone } from 'lucide-react';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stream Anywhere with Our Mobile Apps
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-lg">
              Take your streaming studio on the go with our powerful mobile apps. Create content from anywhere and stay connected with your audience.
            </p>
            
            <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
              <Button 
                variant="ghost"
                size="lg"
                className="bg-white hover:bg-white/90 text-purple-600 shadow-lg border-0"
                icon={<Apple className="w-5 h-5" />}
              >
                Download for iOS
              </Button>
              <Button 
                variant="ghost"
                size="lg"
                className="bg-white hover:bg-white/90 text-purple-600 shadow-lg border-0"
                icon={<Smartphone className="w-5 h-5" />}
              >
                Download for Android
              </Button>
            </div>
            
            <div className="mt-10">
              <p className="text-white/80 mb-4 font-medium">
                Also available on desktop
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
                  className="text-white flex items-center hover:text-white/90 transition"
                >
                  <span>Windows</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <a 
                  href="#" 
                  className="text-white flex items-center hover:text-white/90 transition"
                >
                  <span>macOS</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <a 
                  href="#" 
                  className="text-white flex items-center hover:text-white/90 transition"
                >
                  <span>Linux</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Phones mockup */}
            <div className="relative">
              {/* First phone */}
              <div className="rounded-[40px] bg-gray-800 border-4 border-gray-800 p-2 shadow-xl transform rotate-6 transition-transform duration-500 hover:rotate-0" style={{ 
                animation: 'float 6s ease-in-out infinite'
              }}>
                <img 
                  src="https://images.pexels.com/photos/7117838/pexels-photo-7117838.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="StreamWave mobile app"
                  className="rounded-[32px] w-full h-auto"
                />
                {/* Phone elements */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-2xl"></div>
              </div>
              
              {/* Second phone (in background) */}
              <div className="absolute -bottom-10 -left-12 rounded-[40px] bg-gray-800 border-4 border-gray-800 p-2 shadow-xl transform -rotate-6 z-[-1] scale-90 transition-transform duration-500 hover:rotate-0">
                <img 
                  src="https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="StreamWave mobile app"
                  className="rounded-[32px] w-full h-auto"
                />
                {/* Phone elements */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-2xl"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-400/50 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-400/50 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;