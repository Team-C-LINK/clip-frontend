import api from '../api';
import RegisterResearcherType from '@/app/type/RegisterResearcherType';

const postAnnouncement = async (data: any) => {
  try {
    const res = await api.post('/admin/announcements', data);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default postAnnouncement;
