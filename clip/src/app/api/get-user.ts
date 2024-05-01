import api from '@/app/api/api';

const getUser = async () => {
  if (!localStorage.getItem('id')) {
    alert('로그인이 필요한 서비스 입니다.');
    window.location.href = '/login';
  } else {
    const res = await api.get(`/members/${localStorage.getItem('id')}`);
    return res.data;
  }
};

export default getUser;
