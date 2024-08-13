import axiosInstance from "./AxiosInstance";

export const login = (body: any) => {
    return axiosInstance.post('auth/login', body);
};

export const registerEmail = (body: any) => {
    return axiosInstance.post('auth/register', body);
};

export const verifyEmail = (body: any) => {
    return axiosInstance.post('auth/verify-email', body);
};

export const resendOtpCode = (body: any) => {
    return axiosInstance.post('auth/resend-email-verification', body);
};
export const usernameAvalabilty = (username: any) => {
    return axiosInstance.get(`auth/check-username-availability?username=${encodeURI(username)}`);
};
export const registerUsername = (body: any) => {
    return axiosInstance.put('user', body);
};
