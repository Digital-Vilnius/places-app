import { SendMessageRequest } from './types';
import httpClient from '../../httpClient';

export const sendMessage = (request: SendMessageRequest) => {
  const formData = new FormData();
  formData.append('name', request.name);
  formData.append('subject', request.subject);
  formData.append('message', request.message);
  formData.append('email', request.email);

  return httpClient.post<SendMessageRequest, void>('/submit-form', request, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
