import axiosInstance from './AxiosInstance';

export const getUser = async () => {
  try {
    const response = await axiosInstance.get('user');
    return response; // Assuming you want to return the user data directly
  } catch (error) {
    throw error;
  }
};
export const updateUser = async (payload: any) => {
  try {
    const response = await axiosInstance.put('user', payload);
    return response; // Assuming you want to return the updated user data
  } catch (error) {
    throw error;
  }
};





