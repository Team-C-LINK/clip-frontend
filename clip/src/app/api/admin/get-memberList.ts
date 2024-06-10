import api from '../api';

const getMemberList = async () => {
  try {
    const res = await api.get('/admin/members');
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default getMemberList;
