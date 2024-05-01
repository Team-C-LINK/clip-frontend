import api from './api';

type modifyProfileType = {
  profileUrl: string;
  address: string;
  education: string;
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
