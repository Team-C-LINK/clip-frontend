import api from './api';
import checkAuthType from '../join/auth/type/checkAuthType';

type modifyCheckAuthEmail = {
  receiverEmail: string;
  verificationNumber: string;
};

const patchModifyCheckAuthEmail = async (json: modifyCheckAuthEmail) => {
  try {
    const res = await api.patch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/members/email`,
      json
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default patchModifyCheckAuthEmail;
