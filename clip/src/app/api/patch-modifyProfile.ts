import api from './api';

type modifyProfileType = {
  profileUrl: string;
  city: string;
  district: string;
  educationName: string;
  educationStatus: string;
  job: string;
};

const patchModifyProfile = async (
  json: modifyProfileType,
  memberId: number
) => {
  const res = await api.patch(`/members/${memberId}`, json);
  return res.status;
};

export default patchModifyProfile;
