import { Request, ResultResponse } from '@api/types';
import { Place } from './types';
import httpClient from '../../httpClient';

const baseUrl = '/places';

export const getPlaces = async (params: Request) => {
  return httpClient.get<Request, ResultResponse<Place[]>>(baseUrl, { params });
};
