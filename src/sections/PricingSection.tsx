import React from 'react';
import PricingCard from '../components/PricingCard';

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Basic',
      price: 'Free',
      description: 'Perfect for getting started with streaming',
      features: [
        { text: 'HD 720p streaming', included: true },
        { text: '2 hour stream duration', included: true },
        { text: 'Basic chat support', included: true },
        { text: 'StreamWave branding', included: true },
        { text: 'Basic analytics', included: true },
        { text: 'Custom overlays', included: false },
        { text: 'Multi-platform streaming', included: false },
        { text: 'Monetization tools', included: false },
      ],
      buttonText: 'Get Started Free',
      popular: false
    },
    {
      title: 'Pro',
      price: '$19.99',
      description: 'For creators who want to grow their audience',
      features: [
        { text: 'HD 1080p streaming', included: true },
        { text: 'Unlimited stream duration', included: true },
        { text: 'Interactive chat tools', included: true },
        { text: 'No StreamWave branding', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Custom overlays', included: true },
        { text: 'Multi-platform streaming', included: true },
        { text: 'Monetization tools', included: false },
      ],
      buttonText: 'Subscribe Now',
      popular: true
    },
    {
      title: 'Creator',
      price: '$39.99',
      description: 'The ultimate solution for professional streamers',
      features: [
        { text: '4K streaming', included: true },
        { text: 'Unlimited stream duration', included: true },
        { text: 'Advanced chat and moderation', included: true },
        { text: 'No StreamWave branding', included: true },
        { text: 'Comprehensive analytics', included: true },
        { text: 'Custom overlays and animations', included: true },
        { text: 'Multi-platform streaming', included: true },
        { text: 'Monetization tools', included: true },
      ],
      buttonText: 'Go Creator',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Choose the Right <span className="text-purple-600 dark:text-purple-400">Plan for You</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Flexible options for creators at every stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              buttonText={plan.buttonText}
              popular={plan.popular}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Pricing FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-6">
            {[
              {
                question: 'Can I upgrade or downgrade my plan?',
                answer: 'Yes, you can change your plan at any time. When you upgrade, you\'ll be charged the prorated amount for the remainder of the billing cycle. When you downgrade, the new pricing takes effect at the start of the next billing cycle.'
              },
              {
                question: 'Is there a free trial for paid plans?',
                answer: 'Yes, we offer a 14-day free trial for all paid plans. No credit card required to start your trial.'
              },
              {
                question: 'How does billing work?',
                answer: 'We offer both monthly and annual billing options. Annual plans come with a 20% discount compared to monthly billing.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;