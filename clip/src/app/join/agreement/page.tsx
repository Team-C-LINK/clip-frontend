'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as C from './component/C.style';
import checkedBox from '../asset/checkedBox.svg';
import unCheckedBox from '../asset/uncheckedBox.svg';
import ProgressBar from '../component/ProgressBar/ProgressBar';
import Layout from '@/app/SharedComponent/Background';

const Agreement = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const checkState = (e: any) => {
    const targetInputName = e.target.name;
    const curAgreementState = agreementState[targetInputName];
    if (curAgreementState)
      setAgreementState((prevState: any) => {
        return { ...prevState, [targetInputName]: false };
      });
    else
      setAgreementState((prevState) => {
        return { ...prevState, [targetInputName]: true };
      });
  };

  const [agreementState, setAgreementState] = useState<{
    [key: string]: boolean;
  }>({
    age: false,
    privacyInfo: false,
    receiveInfo: false,
    allAgree: false,
  });

  return (
    <>
      <Layout>
        <C.Wrapper>
          <ProgressBar page={1}></ProgressBar>
          <C.Test>
            <C.HiddenCheckbox
              {...register('age')}
              onClick={checkState}
            ></C.HiddenCheckbox>
            <img
              src={agreementState.age ? checkedBox.src : unCheckedBox.src}
            ></img>
            <label htmlFor="age"> (필수) 만 14세 이상입니다</label>
          </C.Test>
        </C.Wrapper>
      </Layout>
    </>
  );
};

export default Agreement;
