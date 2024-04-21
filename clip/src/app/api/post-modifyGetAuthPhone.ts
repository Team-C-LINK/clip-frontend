import api from './api';
import checkAuthType from '../join/auth/type/checkAuthType';

type modifyGetAuthType = {
  phoneNumber: string;
};

const postModifyGetAuthPhone = async (json: modifyGetAuthType) => {
  try {
    const res = await api.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/members/sms`,
      json
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default postModifyGetAuthPhone;
