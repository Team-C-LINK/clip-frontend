import api from '../api';
import { QueryFunctionContext } from '@tanstack/react-query';

const getResearcherList = async (queryContext: QueryFunctionContext) => {
  try {
    const lastId = queryContext.queryKey[0];
    const query = lastId ? `?size=10&lastResearcherId=${lastId}` : `?size=10`;

    const res = await api.get(`/admin/researchers${query}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getResearcherList;
