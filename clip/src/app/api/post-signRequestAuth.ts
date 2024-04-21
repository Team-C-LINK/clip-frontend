import api from './api';

const postSignRequestAuth = async (phoneNumber: string) => {
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

export default postSignRequestAuth;
