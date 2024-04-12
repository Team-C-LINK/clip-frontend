import api from '@/app/api/api';

/**
 *
 * @param phoneNumber string
 * @returns boolean
 * 요청이 정상적으로 가면 true를 리턴
 */
const postRequestAuth = async (phoneNumber: string) => {
  try {
    const res = await api.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/sign-up/sms`,
      {
        phoneNumber: phoneNumber,
      }
    );
  } catch (e) {
    console.log(e);
  }

  return true;
};

export default postRequestAuth;
