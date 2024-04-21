import api from './api';
import checkAuthType from '../join/auth/type/checkAuthType';

const postSignCheckAuth = async (json: checkAuthType) => {
  try {
    const res = await api
      .post(`${process.env.NEXT_PUBLIC_SERVER_HOST}/sign-up/check-sms`, json)
      .then((res) => res.data);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default postSignCheckAuth;
