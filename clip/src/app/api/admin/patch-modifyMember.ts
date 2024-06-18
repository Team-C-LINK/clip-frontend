import api from '../api';

type ModifyMemberType = {
  birthYear: 'string';
  city: 'string';
  district: 'string';
  educationName: 'string';
  educationStatus: 'string';
  job: 'string';
};

const patchModifyMember = async (id: number, data: ModifyMemberType) => {
  try {
    const res = await api.patch(`/admin/member/${id}`, data);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default patchModifyMember;
