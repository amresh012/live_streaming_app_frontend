import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, Users, Gift, CreditCard, Clock, ArrowUpRight, Filter } from 'lucide-react';
import Button from '../components/Button';

const revenueData = [
  { date: 'Mar 1', subscriptions: 1200, donations: 300, bits: 150 },
  { date: 'Mar 2', subscriptions: 1800, donations: 400, bits: 200 },
  { date: 'Mar 3', subscriptions: 1600, donations: 350, bits: 180 },
  { date: 'Mar 4', subscriptions: 2200, donations: 500, bits: 250 },
  { date: 'Mar 5', subscriptions: 2400, donations: 600, bits: 300 },
  { date: 'Mar 6', subscriptions: 1900, donations: 450, bits: 220 },
  { date: 'Mar 7', subscriptions: 2800, donations: 700, bits: 350 }
];

const topDonators = [
  { name: 'Sarah Wilson', amount: '$150.00', message: 'Keep up the great content!' },
  { name: 'Michael Chen', amount: '$100.00', message: 'Amazing stream today!' },
  { name: 'Emma Thompson', amount: '$75.00', message: 'Love your work!' },
  { name: 'David Lee', amount: '$50.00', message: 'Thanks for the entertainment!' },
];

const MonetizationPage: React.FC = () => {
  const width = window.innerWidth
  return (
    <div className="space-y-8 p-4"  >
      {/* Header */}
      <div className="lg:flex md:grid grid-cols-2  items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Monetization</h1>
          <p className="text-gray-600 dark:text-gray-400">Track your earnings and manage payouts</p>
        </div>
       {width >500 ? <Button variant="outline" icon={<Filter className="w-4 h-4" />}>
          Filter by Date
        </Button>: <Button size='sm' variant="outline" icon={<Filter className="w-4 h-4" />}>
          Filter
        </Button>}
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { 
            title: 'Total Earnings', 
            value: '$3,847.50', 
            change: '+12.5%',
            icon: <DollarSign className="w-5 h-5" />,
            color: 'purple'
          },
          { 
            title: 'Active Subscribers', 
            value: '1,234', 
            change: '+3.2%',
            icon: <Users className="w-5 h-5" />,
            color: 'blue'
          },
          { 
            title: 'Total Donations', 
            value: '$1,256.00', 
            change: '+8.4%',
            icon: <Gift className="w-5 h-5" />,
            color: 'pink'
          },
          { 
            title: 'Next Payout', 
            value: '$2,500.00', 
            date: 'Apr 1, 2024',
            icon: <CreditCard className="w-5 h-5" />,
            color: 'green'
          }
        ].map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/30 flex items-center justify-center`}>
                <div className={`text-${stat.color}-600 dark:text-${stat.color}-400`}>
                  {stat.icon}
                </div>
              </div>
              {stat.change && (
                <div className="flex items-center text-green-600">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  <span className="text-sm">{stat.change}</span>
                </div>
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {stat.title}
            </p>
            {stat.date && (
              <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                <span>{stat.date}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="lg:flex md:grid md:grid-cols-2 sm:grid-cols-1  items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Breakdown</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Last 7 days of earnings</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Subscriptions</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Donations</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Bits</span>
            </div>
          </div>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorSubscriptions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorDonations" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EC4899" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#EC4899" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorBits" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
              <XAxis dataKey="date" tick={{ fill: '#6B7280' }} />
              <YAxis tick={{ fill: '#6B7280' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: '#F3F4F6'
                }}
                itemStyle={{ color: '#F3F4F6' }}
              />
              <Area
                type="monotone"
                dataKey="subscriptions"
                stroke="#8B5CF6"
                fill="url(#colorSubscriptions)"
                stackId="1"
              />
              <Area
                type="monotone"
                dataKey="donations"
                stroke="#EC4899"
                fill="url(#colorDonations)"
                stackId="1"
              />
              <Area
                type="monotone"
                dataKey="bits"
                stroke="#3B82F6"
                fill="url(#colorBits)"
                stackId="1"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity and Top Supporters */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {[
              { type: 'subscription', user: 'John Doe', amount: '$4.99', time: '2 min ago' },
              { type: 'donation', user: 'Emma Smith', amount: '$10.00', time: '15 min ago' },
              { type: 'bits', user: 'Alex Johnson', amount: '1,000', time: '1 hour ago' },
              { type: 'subscription', user: 'Sarah Wilson', amount: '$9.99', time: '2 hours ago' },
            ].map((activity, index) => (
              <div key={index} className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === 'subscription' 
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                      : activity.type === 'donation'
                      ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  }`}>
                    {activity.type === 'subscription' ? <Users className="w-5 h-5" /> 
                      : activity.type === 'donation' ? <Gift className="w-5 h-5" />
                      : <TrendingUp className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{activity.user}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {activity.type === 'bits' ? `Cheered ${activity.amount} bits` : `Sent ${activity.amount}`}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Supporters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Top Supporters</h2>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {topDonators.map((donator, index) => (
              <div key={index} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                      {donator.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{donator.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Total: {donator.amount}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Thank
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "{donator.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payout Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="lg:flex md:grid grid-cols-2 items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Payout Settings</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Manage your payment methods and schedule</p>
          </div>
         {width > 500 ? <Button variant="outline" icon={<CreditCard className="w-4 h-4" />}>
            Update Payment Info
          </Button>:<Button size='sm' variant="outline" icon={<CreditCard className="w-4 h-4" />}>
            Update Info
          </Button>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Current Payment Method</h3>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-8 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center">
                <img 
                  src="https://www.svgrepo.com/show/328132/paypal.svg"
                  alt="PayPal"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">PayPal</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">account@example.com</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Payout Schedule</h3>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Monthly</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Paid out on the 1st of each month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonetizationPage;