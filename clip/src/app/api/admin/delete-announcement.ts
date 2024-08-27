import api from '../api';

const deleteAnnouncement = async (id: string) => {
  try {
    const res = await api.delete(`/admin/announcements/${id}`);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default deleteAnnouncement;
