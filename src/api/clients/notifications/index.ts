import { ListRequest } from '@api/types';
import httpClient from '../../httpClient';
import { Notification } from './types';

const baseUrl = '/notifications';

export const getNotifications = async (params: ListRequest) => {
  return httpClient.get<ListRequest, Notification[]>(baseUrl, { params });
};
