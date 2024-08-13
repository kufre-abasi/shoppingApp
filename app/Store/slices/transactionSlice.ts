// userStore.ts
import {create} from 'zustand';
import {
  getUserTransactions,
} from '../../../service/WalletService';
// Define types
export type TransactionsState = {
  transaction: any | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

export type TransactionsActions = {
  fetchTransaction: () => Promise<void>;
};

export type TransactionsStore = TransactionsState & TransactionsActions;

export const useTransactionStore = create<TransactionsStore>((set) => ({
  transaction: null,
  status: 'idle',
  error: null,
  fetchTransaction: async () => {
    set({ status: 'loading', error: null });
    try {
      const response = await getUserTransactions();
      set({ transaction: response.data, status: 'succeeded' });
    } catch (error: any) {
      set({ status: 'failed', error: error.message });
    }
  },
}));
