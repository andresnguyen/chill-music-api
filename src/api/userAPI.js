import axiosClient from './axiosClient';

const userAPI = {
  getAll(params) {
    const url = '/users';
    return axiosClient.get(url, { params });
  },
  getById(id) {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
  count() {
    const url = '/users/count';
    return axiosClient.get(url);
  },
};

export default userAPI;
