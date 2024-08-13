// userStore.ts
import create from 'zustand';
import { getUser, updateUser } from '~/service/UserService';

// Define types
export type UserState = {
  user: any | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

export type UserActions = {
  fetchUser: () => Promise<void>;
  updateUser: (payload: any) => Promise<void>;
};

export type UserStore = UserState & UserActions;

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  status: 'idle',
  error: null,
  fetchUser: async () => {
    set({ status: 'loading', error: null });
    try {
      const response = await getUser();
      set({ user: response.data, status: 'succeeded' });
    } catch (error: any) {
      set({ status: 'failed', error: error.message });
    }
  },
  updateUser: async (payload: any) => {
    set({ status: 'loading', error: null });
    try {
      const response = await updateUser(payload);
      set({ user: response.data, status: 'succeeded' });
    } catch (error: any) {
      set({ status: 'failed', error: error.message });
    }
  },
}));
