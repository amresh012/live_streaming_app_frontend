import React from 'react';
import Button from '../components/Button';
import { ArrowRight, Download, Apple, Smartphone } from 'lucide-react';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-between">
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
              <div className=" transform rotate-6 transition-transform duration-500 hover:rotate-0" style={{ 
                animation: 'float 6s ease-in-out infinite'
              }}>
                <img 
                  src="/public/iPhone-13-PRO-localhost (1).png"
                  alt="StreamWave mobile app"
                  className="rounded-[32px] w-[30rm] h-[50rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;