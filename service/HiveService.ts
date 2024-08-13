import axiosInstance from "./AxiosInstance";

export const createHive = (body: any) => {
    return axiosInstance.post('hives', body);
};
export const hives = (type:string) => {
    return axiosInstance.get(`hives?filter=${type}`);
};
export const singleHive = (id:string) => {
    return axiosInstance.get(`hives/${id}`);
};
export const createPost = (id:string , body:any) => {
    return axiosInstance.post(`hives/${id}/posts`,body);
};
export const getSinglePost = (id:string) => {
    return axiosInstance.get(`hives/${id}/posts`);
};

export const hivesUserPost = (id:string) => {
    return axiosInstance.get(`hives/${id}/posts?filter=user`);
};

export const hivesSingleMember = (id:string) => {
    return axiosInstance.get(`hives/${id}/members`);
};
export const deleteSingleMember = (id:string) => {
    return axiosInstance.delete(`hives/remove-member/${id}`);
};
export const getSavedPost = () => {
    return axiosInstance.get(`saved`);
};
export const toggleSavedPost = (id:string) => {
    return axiosInstance.post(`saved/${id}`);
};

export const createComment = (body: any ,id:string) => {
    return axiosInstance.post(`hives/${id}/posts`, body);
};
