import api from '@/app/api/api';
const DEFAULT_PAGE_SIZE = 10;

const getRecruitList = async (listPointer = false) => {
  try {
    const path = !listPointer
      ? `/announcements?size=10`
      : `/announcements?lastAnnouncementId=${listPointer}&size=${DEFAULT_PAGE_SIZE}`;
    const res = await api.get(path);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getRecruitList;
