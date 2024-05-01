import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_HOST}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const errorStatus = error.response.status;
    if (errorStatus === 400) {
      console.log(error);
      alert('요청 인자 에러');
      // window.location.href = '/login';
    } else if (errorStatus === 401) {
      alert('토큰 에러');
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export default api;
