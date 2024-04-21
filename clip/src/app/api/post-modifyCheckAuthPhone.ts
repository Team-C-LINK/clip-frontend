import api from './api';
import checkAuthType from '../join/auth/type/checkAuthType';

type modifyCheckAuthPhone = {
  phoneNumber: string;
  verificationNumber: string;
};

const postModifyCheckAuthPhone = async (json: modifyCheckAuthPhone) => {
  try {
    const res = await api.patch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/members/number`,
      json
    );

    return res;
  } catch (e) {
    console.log(e);
  }
};

export default postModifyCheckAuthPhone;
