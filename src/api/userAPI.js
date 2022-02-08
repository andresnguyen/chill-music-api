import axiosClient from './axiosClient';

const userAPI = {
  getAll(params) {
    const url = '/users';
    return axiosClient.get(url, { params });
  },
  count() {
    const url = '/users/count';
    return axiosClient.get(url);
  },
};

export default userAPI;
