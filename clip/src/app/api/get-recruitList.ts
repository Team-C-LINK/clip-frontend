import api from '@/app/api/api';
import axios from 'axios';

const getRecruitList = async (recruitingStatus: boolean, size: number) => {
  try {
    const res = await api.get(
      `/announcements?isRecruiting=${recruitingStatus}&size=${size}`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getRecruitList;
