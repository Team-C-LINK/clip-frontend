import api from '@/app/api/api';

const deleteEraseScrap = async (postId: number | undefined) => {
  const res = await api.delete(`/announcements/${postId}/scrap`);
  return res;
};

export default deleteEraseScrap;
