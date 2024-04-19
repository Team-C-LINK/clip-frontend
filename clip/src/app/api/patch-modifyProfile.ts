import api from './api';

type modifyProfileType = {
  auth: authType;
  request: requestType;
};

type authType = {
  id: number;
};

type requestType = {
  profileUrl: string;
  address: string;
  education: string;
  job: string;
};

const patchModifyProfile = async (
  json: modifyProfileType,
  memberId: number
) => {
  console.log(json);
  const res = await api.patch(`/members/${memberId}`, json);

  console.log(res);
};

export default patchModifyProfile;
