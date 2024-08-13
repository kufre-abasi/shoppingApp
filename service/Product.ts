// products
import axiosInstance from './AxiosInstance';

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get('products');
    return response; // Assuming you want to return the user data directly
  } catch (error) {
    throw error;
  }
};

export const getSingleProduct = async (productId: any) => {
  try {
    const response = await axiosInstance.get(`products/${productId}`);
    return response; // Assuming you want to return the user data directly
  } catch (error) {
    throw error;
  }
};


