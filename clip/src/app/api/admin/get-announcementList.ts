import api from '../api';
import { QueryFunctionContext } from '@tanstack/react-query';

interface AnnouncementKeywordType {
  [key: string]: string;
  announcementType: string;
  lastAnnouncementId: string;
}

const getAnnouncementList = async (queryContext: QueryFunctionContext) => {
  try {
    const params = queryContext.queryKey[0] as AnnouncementKeywordType;
    let query = ``;

    for (const key in params) {
      if (params[key]) query += `&${key}=${params[key]}`;
    }

    const res = await api.get(`/admin/announcements?size=100${query}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getAnnouncementList;
