import React from 'react';
import { User } from '../../types/user';
import { UserStats } from './UserStats';
import { UserCharts } from './UserCharts';
import { RecentUsers } from './RecentUsers';

interface DashboardViewProps {
  users: User[];
  loading: boolean;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ users, loading }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
      
      <UserStats users={users} />
      <UserCharts users={users} />
      <RecentUsers users={users} />
    </div>
  );
};