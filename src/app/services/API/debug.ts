import { axiosInstance } from './client';

export const getDebug = async () => axiosInstance.get('/debug');
export const debugResponseTransformer = (response: string) => {
  const messages: any = [];
  const parts = response.split('\n');
  parts.forEach(part => {
    console.log(part);
    if (part !== '') {
      messages.push(JSON.parse(part));
    }
  });
  return messages;
};
