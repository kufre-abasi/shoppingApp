import axiosInstance from "./AxiosInstance";

export const getUserWallet = async () => {
  try {
    const response = await axiosInstance.get(`user/wallet`);
    return response; // Assuming you want to return the updated user data
  } catch (error) {
    throw error;
  }
};
export const fundWallet = async (payload: any) => {
  try {
    const response = await axiosInstance.post(`wallet/fund`, payload);
    return response; // Assuming you want to return the updated user data
  } catch (error) {
    throw error;
  }
};
export const getUserTransactions = async () => {
  try {
    const response = await axiosInstance.get(`user/transactions`);
    return response; 
  } catch (error) {
    throw error
  }
};

// export const getUserTransactions = () => {
//   return axiosInstance.get(`user/transactions`);
  
// };

export const Withdraw = (payload: any) => {
  return axiosInstance.post(`wallet/withdraw`, payload);
};

// Withdrawal Account
export const getWithdrawalAccounts = () => {
  return axiosInstance.get(`withdrawal-accounts`);
};
export const createWithdrawalAccount = (payload: any) => {
  return axiosInstance.post(`wallet/withdraw`, payload);
};
