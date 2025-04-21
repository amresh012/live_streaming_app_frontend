import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  buttonText: string;
  popular?: boolean;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  popular = false,
  delay = 0
}) => {
  return (
    <div 
      className={`relative rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
        popular 
          ? 'border-2 border-purple-500 dark:border-purple-400 transform hover:-translate-y-2' 
          : 'border border-gray-200 dark:border-gray-700 transform hover:-translate-y-1'
      } bg-white dark:bg-gray-800 overflow-hidden`}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold uppercase py-1 px-4 rounded-bl-lg">
          Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
          {price !== 'Free' && <span className="text-gray-500 dark:text-gray-400">/month</span>}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={`mr-2 mt-0.5 ${feature.included ? 'text-green-500' : 'text-gray-400'}`}>
                <Check className="h-5 w-5" />
              </span>
              <span className={`${
                feature.included 
                  ? 'text-gray-700 dark:text-gray-300' 
                  : 'text-gray-400 dark:text-gray-500 line-through'
              }`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant={popular ? 'primary' : 'outline'} 
          fullWidth={true}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;