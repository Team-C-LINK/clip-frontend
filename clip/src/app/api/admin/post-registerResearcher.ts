import api from '../api';
import RegisterResearcherType from '@/app/type/RegisterResearcherType';

const postRegisterResearcher = async (data: RegisterResearcherType) => {
  try {
    const res = await api.post('/admin/researchers', data);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default postRegisterResearcher;
