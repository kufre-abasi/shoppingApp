// userStore.ts
import create from 'zustand';
import { getProducts, getSingleProduct } from '~/service/Product';

// Define types
export type UserState = {
  products: any | null;
  singleProductData: any | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

export type UserActions = {
  fetchProducts: () => Promise<void>;
  fetchSingleProducts: (productId: any) => Promise<void>; 
};

export type ProdcutsStore = UserState & UserActions;

export const useProductsStore = create<ProdcutsStore>((set) => ({
  products: null,
  singleProductData: null,
  status: 'idle',
  error: null,
  fetchProducts: async () => {
    set({ status: 'loading', error: null });
    try {
      const response = await getProducts();
      set({ products: response.data, status: 'succeeded' });
    } catch (error: any) {
      set({ status: 'failed', error: error.message });
    }
  },
  fetchSingleProducts: async (productId) => {
    set({ status: 'loading', error: null });
    try {
      const response = await getSingleProduct(productId); // Pass the required argument to the function
      set({ singleProductData: response.data, status: 'succeeded' });
    } catch (error: any) {
      set({ status: 'failed', error: error.message });
    }
  }
}));
