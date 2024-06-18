import api from '../api';

const getResearcherList = async () => {
  try {
    const res = await api.get('/admin/researchers');
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getResearcherList;
