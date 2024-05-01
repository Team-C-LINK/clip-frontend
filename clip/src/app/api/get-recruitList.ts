import api from '@/app/api/api';
import axios from 'axios';

const getRecruitList = async () => {
  try {
    const res = await api.get(`/announcements?&size=10`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getRecruitList;
