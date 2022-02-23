import { Request, ResultResponse } from '@api/types';
import httpClient from '../../httpClient';
import { Notification } from './types';
import { notificationsMock } from './mocks';

const baseUrl = '/notifications';

export const getNotifications = async (params: Request) => {
  return Promise.resolve({ response: notificationsMock });
  // return httpClient.get<Request, ResultResponse<Notification[]>>(baseUrl, { params });
};
