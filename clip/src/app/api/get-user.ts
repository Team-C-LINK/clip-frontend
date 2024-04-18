import api from '@/app/api/api';

const getUser = async () => {
  const res = await api.get(`/members/${localStorage.getItem('id')}`);
  return res.data;
};

export default getUser;
