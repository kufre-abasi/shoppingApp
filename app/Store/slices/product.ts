// userStore.ts
import create from 'zustand';
import {  getProducts } from '~/service/Product';

// Define types
export type UserState = {
  products: any | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

export type UserActions = {
  fetchProducts: () => Promise<void>;
};

export type ProdcutsStore = UserState & UserActions;

export const useProductsStore = create<ProdcutsStore>((set) => ({
  products: null,
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
  }
}));
