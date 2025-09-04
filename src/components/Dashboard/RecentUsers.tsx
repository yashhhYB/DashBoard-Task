import React from 'react';
import { User } from '../../types/user';
import { formatDate } from '../../utils/dateUtils';
import { parseISO } from 'date-fns';

interface RecentUsersProps {
  users: User[];
}

export const RecentUsers: React.FC<RecentUsersProps> = ({ users }) => {
  const recentUsers = [...users]
    .sort((a, b) => {
      try {
        return parseISO(b.createdAt).getTime() - parseISO(a.createdAt).getTime();
      } catch {
        return 0;
      }
    })
    .slice(0, 5);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Recently Joined Users</h3>
      
      <div className="space-y-4">
        {recentUsers.map((user) => (
          <div
            key={user.id}
            className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex-shrink-0">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-12 w-12 rounded-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=3B82F6&color=fff`;
                  }}
                />
              ) : (
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
              <p className="text-sm text-gray-500 truncate">{user.email}</p>
            </div>
            
            <div className="flex-shrink-0">
              <p className="text-sm text-gray-500">{formatDate(user.createdAt)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};