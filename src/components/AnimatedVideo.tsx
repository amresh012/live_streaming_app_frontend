import React, { useEffect, useRef } from 'react';

interface AnimatedVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

const AnimatedVideo: React.FC<AnimatedVideoProps> = ({ src, poster, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    // Create intersection observer to play video when in viewport
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {
            // Autoplay may be prevented by browser, handle gracefully
            console.log('Video autoplay was prevented by the browser');
          });
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    observerRef.current.observe(videoRef.current);

    // Cleanup function
    return () => {
      if (observerRef.current && videoRef.current) {
        observerRef.current.unobserve(videoRef.current);
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className={`relative rounded-lg overflow-hidden shadow-xl ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        loop
        muted
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay with reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      
      {/* Reflection effect */}
      <div className="absolute -bottom-1/2 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent transform scale-y-[0.35] blur-sm opacity-50 dark:from-gray-700/20"></div>
    </div>
  );
};

export default AnimatedVideo;