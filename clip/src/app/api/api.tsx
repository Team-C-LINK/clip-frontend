import axios, { AxiosError } from 'axios';

type CustomErrorType = {
  status: number;
  message: string;
};

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_HOST}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// api.interceptors.request.use((config: any) => {
//   const token = localStorage?.getItem('accessToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error: AxiosError) => {
    const errorStatus = error?.response?.status;
    if (errorStatus === 400) {
      alert('요청 인자 에러');
      // window.location.href = '/login';
    } else if (errorStatus === 401) {
      const data: CustomErrorType = error?.response?.data as CustomErrorType;
      if (data?.message === '토큰이 누락되었습니다.') {
        alert('로그인이 필요합니다.');
        window.location.href = '/admin';
      }

      if (
        data?.message ===
        '관리자 로그인 정보가 일치하지 않습니다. 다시 시도해주세요.'
      ) {
        alert('로그인 정보를 확인해주세요');
      }

      if (
        data?.message ===
        '만료된 토큰입니다. 올바른 토큰으로 다시 시도해주세요.'
      ) {
        localStorage.removeItem('accessToken');
        window.location.reload();
      }
    }

    return Promise.reject(error);
  }
);

export default api;
