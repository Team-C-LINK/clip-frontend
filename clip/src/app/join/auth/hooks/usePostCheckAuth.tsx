import api from '@/app/api/api';
import checkAuthType from '../type/checkAuthType';

/**
 *
 * @param phoneNumber string
 * @returns boolean
 * 요청이 정상적으로 가면 true를 리턴
 */
const usePostCheckAuth = async (json: checkAuthType) => {
  try {
    const res = await api
      .post(`${process.env.NEXT_PUBLIC_SERVER_HOST}/sign-up/check-sms`, json)
      .then((res) => res.data);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default usePostCheckAuth;
