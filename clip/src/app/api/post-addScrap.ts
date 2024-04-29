import api from '@/app/api/api';

const postAddScrap = async (postId: number | undefined) => {
  const res = await api.post(`/announcements/${postId}/scrap`);
  return res;
};

export default postAddScrap;
