import { Request, ResultResponse } from '@api/types';
import { AboutContent } from './types';
import httpClient from '../../httpClient';

export const getAboutContent = (params: Request) => {
  return httpClient.get<Request, ResultResponse<AboutContent>>('/about', { params });
};
