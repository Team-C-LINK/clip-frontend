import api from './api';
import RequestApplyType from '../type/requestApplyType';

const postApplyResearch = async (request: RequestApplyType) => {
  try {
    const res = api.post(
      `/announcements/${request.postId}/schedules/${request.scheduleId}`,
      request.date
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default postApplyResearch;
