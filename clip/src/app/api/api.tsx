import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_HOST}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${
      typeof window == 'undefined'
        ? null
        : localStorage.getItem('accessToken')
        ? localStorage.getItem('accessToken')
        : null
    }`,
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    window.location.href = '/recruit';
  }
);

export default api;
