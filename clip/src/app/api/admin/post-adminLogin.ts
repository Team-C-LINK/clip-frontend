import api from '../api';

type FormValues = {
  id: string;
  password: string;
};

const postAdminLogin = async (data: FormValues) => {
  try {
    const res = await api.post('/admin/login', data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default postAdminLogin;
