import create from 'zustand';
import { 
  getUserWallet, 
  getUserTransactions, 
  fundWallet 
} from '../../../service/WalletService';

// Define types
export type WalletData = {
  balance: number;
  // Add other relevant wallet fields
};

export type TransactionData = {
  id: string;
  amount: number;
  date: string;
  // Add other relevant transaction fields
};

export type UserState = {
  wallet: WalletData | any;
  transaction: any | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

export type TransactionState = {
  transaction: TransactionData[] | null;
  status?: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export type TransactionAction = {
  fetchTransaction: () => Promise<void>;

}
export type UserActions = {
  fetchWallet: () => Promise<void>;
  topUpWallet: (payload: { amount: number }) => Promise<void>;
  fetchTransaction: () => Promise<void>;
};

export type UserStore = UserState & UserActions;
export type  TransactionStore = TransactionState & TransactionAction

export const useWalletStore = create<UserStore>((set) => ({
  wallet: null,
  status: 'idle',
  error: null,
  transaction: null,
  fetchWallet: async () => {
    set({ status: 'loading', error: null });
    try {
      const response = await getUserWallet();
      set({ wallet: response.data, status: 'succeeded' });
    } catch (error: any) {
      set({ status: 'failed', error: error.message });
    }
  },
  topUpWallet: async (payload: { amount: number }) => {
    set({ status: 'loading', error: null });
    try {
      const response = await fundWallet(payload);
      set({ status: 'succeeded' });
      return response.data;
    } catch (error: any) {
      set({ status: 'failed', error: error.message });
    }
  },
    fetchTransaction: async () => {
    set({ status: 'loading', error: null });
    try {
      const response = await getUserTransactions();
      set({ transaction: response.data.data, status: 'succeeded' });
      console.log('Transaction Response:', response); //
      console.log('Transaction Response2:', response.data.data); //
      return response.data.data;
    } catch (error: any) {
      set({ status: 'failed', error: error.message });
    }
  },

  
}));


export const FetchTransactioneStore = create<TransactionStore>((set) => ({
  error: null,
  transaction: null,
  fetchTransaction: async () => {
    
    set({ status: 'loading', error: null });
    try {
      const response = await getUserTransactions();
      set({ transaction: response.data.data, status: 'succeeded' });
      console.log('Transaction Response:', response); //
    } catch (error: any) {
      set({ status: 'failed', error: error.message });
    }
  },
}));