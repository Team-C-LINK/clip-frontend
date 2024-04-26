import api from '@/app/api/api';
import axios from 'axios';

const getRecruitList = async (recruitingStatus: boolean, size: number) => {
  try {
    const res = await api.get(`/announcements?size=2`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getRecruitList;
