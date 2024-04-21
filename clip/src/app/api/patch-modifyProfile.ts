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
  console.log(json);
  const res = await api.patch(`/members/${memberId}`, json);

  console.log(res);
};

export default patchModifyProfile;
