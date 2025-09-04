import { format, parseISO, subDays, startOfDay } from 'date-fns';

export const formatDate = (dateString: string) => {
  try {
    return format(parseISO(dateString), 'MMM dd, yyyy');
  } catch {
    return 'Invalid date';
  }
};

export const formatDateTime = (dateString: string) => {
  try {
    return format(parseISO(dateString), 'MMM dd, yyyy HH:mm');
  } catch {
    return 'Invalid date';
  }
};

export const getHour = (dateString: string) => {
  try {
    return parseISO(dateString).getHours();
  } catch {
    return 0;
  }
};

export const getLast30Days = () => {
  const days = [];
  for (let i = 29; i >= 0; i--) {
    days.push(startOfDay(subDays(new Date(), i)));
  }
  return days;
};