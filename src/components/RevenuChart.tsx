import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface RevenueData {
  date: string;
  revenue: number;
  subscribers: number;
}

const data: RevenueData[] = [
  { date: 'Mar 1', revenue: 1200, subscribers: 150 },
  { date: 'Mar 2', revenue: 1800, subscribers: 165 },
  { date: 'Mar 3', revenue: 1600, subscribers: 180 },
  { date: 'Mar 4', revenue: 2200, subscribers: 190 },
  { date: 'Mar 5', revenue: 2400, subscribers: 205 },
  { date: 'Mar 6', revenue: 1900, subscribers: 220 },
  { date: 'Mar 7', revenue: 2800, subscribers: 235 },
  { date: 'Mar 8', revenue: 3200, subscribers: 250 },
  { date: 'Mar 9', revenue: 3600, subscribers: 265 },
  { date: 'Mar 10', revenue: 3100, subscribers: 280 }
];

const RevenueChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Overview</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Last 10 days of earnings</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Revenue</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Subscribers</span>
          </div>
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorSubscribers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EC4899" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#EC4899" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
            <XAxis 
              dataKey="date" 
              tick={{ fill: '#6B7280' }}
              axisLine={{ stroke: '#E5E7EB' }}
            />
            <YAxis 
              tick={{ fill: '#6B7280' }}
              axisLine={{ stroke: '#E5E7EB' }}
              tickFormatter={(value) => `$${value}`}
            />
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
              dataKey="revenue"
              stroke="#8B5CF6"
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="subscribers"
              stroke="#EC4899"
              fillOpacity={1}
              fill="url(#colorSubscribers)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
          <p className="text-sm text-purple-600 dark:text-purple-400 mb-1">Total Revenue</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">$23,800</p>
          <p className="text-sm text-green-600 flex items-center mt-1">
            <span className="text-xl mr-1">↑</span> 12.5% from last month
          </p>
        </div>
        <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4">
          <p className="text-sm text-pink-600 dark:text-pink-400 mb-1">Total Subscribers</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">280</p>
          <p className="text-sm text-green-600 flex items-center mt-1">
            <span className="text-xl mr-1">↑</span> 8.3% from last month
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;