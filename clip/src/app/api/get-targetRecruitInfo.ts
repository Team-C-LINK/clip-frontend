import api from '@/app/api/api';
import axios from 'axios';
import { QueryFunctionContext } from '@tanstack/react-query';

const getTargetRecruitInfo = async (queryContext: QueryFunctionContext) => {
  try {
    const res = await api.get(`/announcements/${queryContext.queryKey[1]}`, {
      headers: {
        'Cache-Control': 'no-store',
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getTargetRecruitInfo;
