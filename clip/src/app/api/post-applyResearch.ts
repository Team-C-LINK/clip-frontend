import api from './api';
import RequestApplyType from '../type/RequestApplyType';

const postApplyResearch = async (request: RequestApplyType) => {
  try {
    const res = api.post(
      `/announcements/${request.postId}/schedules/${request.scheduleId}`,
      {
        date: request.date.date,
        announcementReservationImages: request.announcementReservationImages,
      }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default postApplyResearch;
