import { ListRequest, ResultResponse } from '@api/types';
import httpClient from '../../httpClient';
import { Place } from './types';

const baseUrl = '/places';

export const getPlaces = async (params: ListRequest) => {
  return httpClient.get<ListRequest, ResultResponse<Place[]>>(baseUrl, { params });
};
