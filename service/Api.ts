import axiosInstance from "./AxiosInstance";

export const interest = () => {
    return axiosInstance.get('interest');
};
