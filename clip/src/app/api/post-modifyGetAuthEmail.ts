import api from './api';
import checkAuthType from '../join/auth/type/checkAuthType';

type modifyGetAuthEmailType = {
  receiverEmail: string;
};

const postModifyGetAuthEmail = async (json: modifyGetAuthEmailType) => {
  try {
    const res = await api.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/members/email`,
      json
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default postModifyGetAuthEmail;
