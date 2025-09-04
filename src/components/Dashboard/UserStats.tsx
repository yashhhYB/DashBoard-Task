import React from 'react';
import { Users, UserCheck, Clock, TrendingUp } from 'lucide-react';
import { User } from '../../types/user';
import { subDays, parseISO, isAfter } from 'date-fns';

interface UserStatsProps {
  users: User[];
}

export const UserStats: React.FC<UserStatsProps> = ({ users }) => {
  const totalUsers = users.length;
  const usersWithAvatar = users.filter(user => user.avatar && user.avatar.trim() !== '').length;
  
  // Users joined in last 7 days
  const sevenDaysAgo = subDays(new Date(), 7);
  const recentUsers = users.filter(user => {
    try {
      return isAfter(parseISO(user.createdAt), sevenDaysAgo);
    } catch {
      return false;
    }
  }).length;

  // Users joined in last 30 days
  const thirtyDaysAgo = subDays(new Date(), 30);
  const monthlyUsers = users.filter(user => {
    try {
      return isAfter(parseISO(user.createdAt), thirtyDaysAgo);
    } catch {
      return false;
    }
  }).length;

  const stats = [
    {
      title: 'Total Users',
      value: totalUsers,
      icon: Users,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      title: 'Users with Avatars',
      value: usersWithAvatar,
      icon: UserCheck,
      color: 'bg-emerald-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700'
    },
    {
      title: 'New This Week',
      value: recentUsers,
      icon: TrendingUp,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    },
    {
      title: 'New This Month',
      value: monthlyUsers,
      icon: Clock,
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
              <p className={`text-3xl font-bold ${stat.textColor}`}>{stat.value.toLocaleString()}</p>
            </div>
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};