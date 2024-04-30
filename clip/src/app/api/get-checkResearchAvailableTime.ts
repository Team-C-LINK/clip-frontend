import api from './api';
import { QueryFunctionContext } from '@tanstack/react-query';

const getCheckResearchAvailableTime = async (
  queryContext: QueryFunctionContext
) => {
  if (queryContext.queryKey[1])
    try {
      const res = await api.get(
        `/announcements/${queryContext.queryKey[1]}/research-available-time?year=${queryContext.queryKey[2]}&month=${queryContext.queryKey[3]}`
      );
      return res.data;
    } catch (e) {
      console.log(e);
    }

  return null;
};

export default getCheckResearchAvailableTime;
