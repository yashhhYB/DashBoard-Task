import { User } from '../types/user';
import { format, parseISO, isSameDay } from 'date-fns';
import { getLast30Days } from './dateUtils';

export const getUsersPerDay = (users: User[]) => {
  const last30Days = getLast30Days();
  
  return last30Days.map(day => {
    const count = users.filter(user => {
      try {
        return isSameDay(parseISO(user.createdAt), day);
      } catch {
        return false;
      }
    }).length;
    
    return {
      date: format(day, 'MMM dd'),
      users: count
    };
  });
};

export const getAvatarDistribution = (users: User[]) => {
  const withAvatar = users.filter(user => user.avatar && user.avatar.trim() !== '').length;
  const withoutAvatar = users.length - withAvatar;
  
  return [
    { name: 'With Avatar', value: withAvatar, color: '#3B82F6' },
    { name: 'Without Avatar', value: withoutAvatar, color: '#E5E7EB' }
  ];
};

export const getSignupHourDistribution = (users: User[]) => {
  const hourCounts = Array(24).fill(0);
  
  users.forEach(user => {
    try {
      const hour = parseISO(user.createdAt).getHours();
      hourCounts[hour]++;
    } catch {
      // Skip invalid dates
    }
  });
  
  return hourCounts.map((count, hour) => ({
    hour: `${hour}:00`,
    users: count
  }));
};