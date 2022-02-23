import { Request, ResultResponse } from '@api/types';
import httpClient from '../../httpClient';
import { Place } from './types';

const baseUrl = '/places';

export const getPlaces = async (params: Request) => {
  return httpClient.get<Request, ResultResponse<Place[]>>(baseUrl, { params });
};
