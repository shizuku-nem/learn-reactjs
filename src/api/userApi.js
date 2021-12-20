import axiosClient from "./axiosClient";

const userApi = {
  add(data) {
    const url = `/auth/local/register`;
    return axiosClient.post(url, data);
  },
};

export default userApi;
