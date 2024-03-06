import axios, { AxiosInstance } from 'axios';

const api = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
  });

  return instance
}

export default api()
