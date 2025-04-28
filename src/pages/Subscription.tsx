import React from 'react';
import { Check, AlertCircle, CreditCard } from 'lucide-react';
import Button from '../components/Button';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  current?: boolean;
}

const SubscriptionPage: React.FC = () => {
  const plans: Plan[] = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'For hobbyist streamers getting started',
      features: [
        { text: 'HD 720p Streaming', included: true },
        { text: '2 hour stream duration', included: true },
        { text: 'Basic chat features', included: true },
        { text: 'Standard support', included: true },
        { text: 'Stream analytics', included: false },
        { text: 'Custom overlays', included: false },
        { text: 'Multi-platform streaming', included: false },
        { text: 'Ad-free experience', included: false },
      ]
    },
    {
      name: 'Pro',
      price: '$19.99',
      description: 'Perfect for growing creators',
      features: [
        { text: 'HD 1080p Streaming', included: true },
        { text: 'Unlimited stream duration', included: true },
        { text: 'Advanced chat features', included: true },
        { text: 'Priority support', included: true },
        { text: 'Stream analytics', included: true },
        { text: 'Custom overlays', included: true },
        { text: 'Multi-platform streaming', included: false },
        { text: 'Ad-free experience', included: false },
      ],
      current: true
    },
    {
      name: 'Creator',
      price: '$39.99',
      description: 'For professional content creators',
      features: [
        { text: '4K Streaming', included: true },
        { text: 'Unlimited stream duration', included: true },
        { text: 'Advanced chat & moderation', included: true },
        { text: '24/7 Priority support', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Custom overlays & themes', included: true },
        { text: 'Multi-platform streaming', included: true },
        { text: 'Ad-free experience', included: true },
      ]
    }
  ];

  return (
    <div className="space-y-8 p-4">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Subscription</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your subscription and billing</p>
      </div>

      {/* Current Plan Info */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Current Plan: Pro</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                Active
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Your next billing date is April 1, 2024</p>
          </div>
          <Button variant="outline" size="sm" icon={<CreditCard className="w-4 h-4" />}>
            Update Billing
          </Button>
        </div>

        <div className="mt-4 flex items-center space-x-2 text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
          <AlertCircle className="w-4 h-4" />
          <p>Your subscription will automatically renew. Cancel anytime before the next billing date.</p>
        </div>
      </div>

      {/* Plans Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`relative bg-white dark:bg-gray-800 rounded-xl p-6 border ${
              plan.current 
                ? 'border-purple-500 dark:border-purple-400 shadow-lg' 
                : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            {plan.current && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">
                  Current Plan
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.price}
                {plan.price !== 'Free' && (
                  <span className="text-base font-normal text-gray-500 dark:text-gray-400">/month</span>
                )}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className={`w-5 h-5 mr-2 ${
                    feature.included 
                      ? 'text-green-500' 
                      : 'text-gray-400 dark:text-gray-600'
                  }`} />
                  <span className={`text-sm ${
                    feature.included
                      ? 'text-gray-700 dark:text-gray-300'
                      : 'text-gray-400 dark:text-gray-600 line-through'
                  }`}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan.current ? 'outline' : 'primary'}
              fullWidth
            >
              {plan.current ? 'Current Plan' : 'Upgrade Plan'}
            </Button>
          </div>
        ))}
      </div>

      {/* Billing History */}
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Billing History</h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {[
            { date: 'Mar 1, 2024', amount: '$19.99', status: 'Paid', invoice: '#INV-2024-003' },
            { date: 'Feb 1, 2024', amount: '$19.99', status: 'Paid', invoice: '#INV-2024-002' },
            { date: 'Jan 1, 2024', amount: '$19.99', status: 'Paid', invoice: '#INV-2024-001' },
          ].map((bill) => (
            <div key={bill.invoice} className="flex items-center justify-between p-6">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{bill.date}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{bill.invoice}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-900 dark:text-white">{bill.amount}</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  {bill.status}
                </span>
                <Button variant="ghost" size="sm">
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;