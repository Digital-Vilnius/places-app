import { Notification as ApiNotification } from '@api/clients/notifications/types';
import { Notification } from './types';

export const mapNotification = (notification: ApiNotification): Notification => ({
  id: notification.id,
  date: notification.date,
  content: notification.notification,
  title: notification.title,
});
