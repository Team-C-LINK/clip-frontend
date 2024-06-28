import api from '../api';
import { QueryFunctionContext } from '@tanstack/react-query';

const getAnnouncementList = async (queryContext: QueryFunctionContext) => {
  try {
    const lastId = queryContext.queryKey[0];
    const type = queryContext.queryKey[1];
    const name = queryContext.queryKey[2];
    const query1 = lastId
      ? `?size=10&lastAnnouncementId=${lastId}`
      : `?size=10`;
    const query2 = type ? `&announcementType=${type}` : '';
    const query3 = name ? `&name=${name}` : '';
    const res = await api.get(
      `/admin/announcements${query1}${query2}${query3}`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getAnnouncementList;
