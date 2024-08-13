import axiosInstance from "./AxiosInstance";

export const login = (body: any) => {
    return axiosInstance.post('auth/login', body);
};

