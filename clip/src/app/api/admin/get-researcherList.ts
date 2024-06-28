import api from '../api';
import { QueryFunctionContext } from '@tanstack/react-query';

const getResearcherList = async (queryContext: QueryFunctionContext) => {
  try {
    const lastId = queryContext.queryKey[0];
    const name = queryContext.queryKey[1];
    const query1 = lastId ? `?size=10&lastResearcherId=${lastId}` : `?size=10`;
    const query2 = name ? `&name=${name}` : ``;
    const res = await api.get(`/admin/researchers${query1}${query2}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getResearcherList;
