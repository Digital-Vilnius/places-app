import { Request, ResultResponse } from '@api/types';
import httpClient from '../../httpClient';
import { Notification } from './types';

const baseUrl = '/notifications';

export const getNotifications = async (params: Request) => {
  return httpClient.get<Request, ResultResponse<Notification[]>>(baseUrl, { params });
};
