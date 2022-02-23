import { ResultResponse, Request } from '@api/types';
import httpClient from '../../httpClient';
import { AboutContent } from './types';

export const getAboutContent = (params: Request) => {
  return httpClient.get<Request, ResultResponse<AboutContent>>('/about', { params });
};
