import api from '../api';

const patchModifyMember = async (id: number, data: any) => {
  try {
    const res = await api.patch(`/admin/member/${id}`, {
      birthYear: '1992',
      city: '서울특별시',
      district: '강남구',
      educationName: '대학교(4년제)',
      educationStatus: '졸업',
      job: '무직',
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default patchModifyMember;
