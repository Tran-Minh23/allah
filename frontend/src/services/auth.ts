import { RegisterUser } from "@/entities/RegisterUser";
import api from "./api"

const baseUrl = '/auth';

const authService = {
    // async initUser(accessToken: string): Promise<any> {
    //   const response = await api.post(
    //     `${baseUrl}/init`,
    //     {},
    //     { headers: { Authorization: `Bearer ${accessToken}` } }
    //   )
  
    //   return response
    // },
    // async getUserList(): Promise<DataResponse<User>> {
    //   const response = await api.get(baseUrl)
  
    //   return response.data
    // },
    // async getUserById(userId: string): Promise<User> {
    //   const response = await api.get(`${baseUrl}/${userId}`)
  
    //   return response.data
    // },
    // async getUserProfile(): Promise<User> {
    //   const response = await api.get(`${baseUrl}/profile`)
  
    //   return response.data
    // },
    // async updateUserProfile(profileData: Partial<User>): Promise<User> {
    //   const response = await api.patch(`${baseUrl}/profile`, profileData)
  
    //   return response.data
    // },

    register: async (data: RegisterUser): Promise<any> => {
        const response = await api.post(`${baseUrl}/register`, data)

        return response.data;
    }
}
  
  export default authService;