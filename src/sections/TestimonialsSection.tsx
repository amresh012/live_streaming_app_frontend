import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      content: "StreamWave has completely transformed my streaming experience. The quality is incredible, and my viewers love the interactive features.",
      author: "Alex Johnson",
      role: "Gaming Streamer",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      content: "I switched from another platform, and my viewership increased by 40% in just two months. The analytics tools help me understand what content works best.",
      author: "Samantha Williams",
      role: "Fitness Instructor",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      content: "The multi-platform streaming feature saves me so much time. Now I can reach my audience wherever they are without extra work.",
      author: "Michael Chen",
      role: "Tech Reviewer",
      avatar: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Loved by <span className="text-purple-600 dark:text-purple-400">Content Creators</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join thousands of satisfied streamers who have grown their audience with StreamWave
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              avatar={testimonial.avatar}
              delay={index * 150}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center">
              <span className="text-4xl font-bold text-purple-600 dark:text-purple-400 mr-3">4.9</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-2">from over 10,000 reviews</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {['Trustpilot', 'App Store', 'Google Play', 'ProductHunt'].map((platform, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 font-medium text-sm"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;