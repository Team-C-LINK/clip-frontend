import api from '../api';
import RegisterResearcherType from '@/app/type/RegisterResearcherType';

const putModifyResearcher = async (
  id: number,
  data: RegisterResearcherType
) => {
  try {
    const res = await api.put(`/admin/researchers/${id}`, data);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default putModifyResearcher;
