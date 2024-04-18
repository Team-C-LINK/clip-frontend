import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_HOST}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
  },
  withCredentials: true,
});

export default api;
