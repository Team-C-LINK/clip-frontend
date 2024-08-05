'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import postAdminLogin from '../api/admin/post-adminLogin';
import * as C from './asset/components/C.style';
import clip from './asset/image/clip.svg';
import Image from 'next/image';
import NextButton from '../join/component/PrevNext/NextButton/NextButton';

type FormValues = {
  id: string;
  pwd: string;
};

const Admin = () => {
  const { register, watch, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data, e) => {
    const loginInfo = {
      id: data.id,
      password: data.pwd,
    };

    const res = await postAdminLogin(loginInfo);
    console.log(res);
    if (res) {
      localStorage.setItem('accessToken', res);
      window.location.href = '/admin/home';
    }
  };

  const onError = (e: any) => {
    console.log(e);
  };

  return (
    <C.wrap onSubmit={handleSubmit(onSubmit)}>
      <Image src={clip.src} alt="clip" width={122} height={50}></Image>
      <C.title>관리자 페이지 로그인</C.title>
      <C.id {...register('id')} placeholder="아이디 입력"></C.id>
      <C.pwd {...register('pwd')} placeholder="비밀번호 입력"></C.pwd>
      <input type="submit" id="login" hidden={true}></input>
      <NextButton $size="38.5rem">
        <label htmlFor="login">로그인</label>
      </NextButton>
    </C.wrap>
  );
};

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default Admin;
