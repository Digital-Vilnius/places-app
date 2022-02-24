import { Request, ResultResponse } from '@api/types';
import { Notification } from './types';
import httpClient from '../../httpClient';

const baseUrl = '/notifications';

export const getNotifications = async (params: Request) => {
  return httpClient.get<Request, ResultResponse<Notification[]>>(baseUrl, { params });
};
