import axios, { AxiosInstance } from 'axios';


const api = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.API_URL,
    timeout: 10000,
  });

  return instance
}

export default api()
