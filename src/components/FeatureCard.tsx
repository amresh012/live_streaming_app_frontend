import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description,
  delay = 0 
}) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700"
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <div className="rounded-full bg-purple-100 dark:bg-gray-700 p-3 w-12 h-12 flex items-center justify-center mb-4">
        <div className="text-purple-600 dark:text-purple-400">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;