import { getCookie } from '@/app/actions';
import api from './api';

const baseUrl = '/hotel';

const hotelService = {
  getAll: async (): Promise<any> => {
    const response = await api.get(`${baseUrl}`);

    return response.data;
  },

  async getHotelDetail(hotelId: number): Promise<any> {
    const cook = await getCookie('token');

    console.log(cook);

    const response = await api.get(`${baseUrl}/${hotelId}`, {
      headers: { Authorization: `Bearer ${cook}` },
    });

    return response.data;
  },
};

export default hotelService;
