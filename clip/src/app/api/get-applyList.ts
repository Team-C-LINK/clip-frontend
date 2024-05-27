import api from '@/app/api/api';

const DEFAULT_PAGE_SIZE = 10;

const getAppliedList = async (listPointer = false) => {
  try {
    const path = !listPointer
      ? `/members/applied-announcements?size=10`
      : `/members/applied-announcements?lastAnnouncementId=${listPointer}&size=${DEFAULT_PAGE_SIZE}`;
    const res = await api.get(path);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getAppliedList;
