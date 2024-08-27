import api from '../api';

const putModifyAnnouncement = async (data: any, announcementId: string) => {
  try {
    console.log(announcementId);
    const res = await api.put(`/admin/announcements/${announcementId}`, data);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default putModifyAnnouncement;
