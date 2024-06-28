import api from '../api';
import { QueryFunctionContext } from '@tanstack/react-query';

interface MemberKeywordType {
  [key: string]: string;
  number: string;
  name: string;
  educationName: string;
  educationStatus: string;
  city: string;
  district: string;
  job: string;
  gender: string;
}

const getMemberList = async (queryContext: QueryFunctionContext) => {
  try {
    const params = queryContext.queryKey[0] as MemberKeywordType;
    let query = `?`;

    for (const key in params) {
      if (params[key]) query += `${key}=${params[key]}&`;
    }

    query = query.substring(0, query.length - 1);

    const res = await api.get(`/admin/members${query}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getMemberList;
