'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as C from './component/C.style';
import checkedBox from '../asset/checkedBox.svg';
import unCheckedBox from '../asset/uncheckedBox.svg';
import ProgressBar from '../component/ProgressBar/ProgressBar';
import { useRouter } from 'next/navigation';
import stringToJson from '../utils/stringToJson';
import jsonToString from '../utils/jsonToString';
import HeaderCancel from '@/app/SharedComponent/Header/HeaderCancel/HeaderCancel';
import Footer from '@/app/SharedComponent/Footer/Footer';
import TopText from '../component/TopText/TopText';

const Agreement = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [agreementState, setAgreementState] = useState<{
    [key: string]: boolean;
  }>({
    age: false,
    privateInfo: false,
    receiveInfo: false,
    allAgree: false,
  });

  const router = useRouter();

  const [nextState, setNextState] = useState<boolean>(false);

  const checkState = (e: any) => {
    const targetInputName = e.target.id;
    const curAgreementState = watch(targetInputName);
    if (curAgreementState) setValue(targetInputName, false);
    else setValue(targetInputName, true);
  };
  const selectAll = (state: boolean) => {
    const target = JSON.parse(JSON.stringify(agreementState));
    if (state) {
      for (const key in target) setValue(key, true);
    } else {
      for (const key in target) setValue(key, false);
    }
  };

  const next = () => {
    const signInfo = stringToJson(localStorage.getItem('signInfo')!);
    signInfo['receptionAgreement'] = watch('receiveInfo') ? true : false;
    localStorage.setItem('signInfo', jsonToString(signInfo));
    router.push('/join/auth');
  };

  const checkAgreement = () => {
    if (watch('age') && watch('privateInfo')) setNextState(true);
    else setNextState(false);
  };

  useEffect(() => {
    checkAgreement();
  }, [watch('age'), watch('privateInfo')]);

  useEffect(() => {
    selectAll(watch('allAgree'));
  }, [watch('allAgree')]);

  return (
    <>
      <HeaderCancel route={'/login'} text=""></HeaderCancel>
      <ProgressBar page={1}></ProgressBar>
      <C.view_wrap>
        <TopText
          top={'회원가입'}
          bottom={'서비스 시작을 위해 정보 제공에 동의해 주세요'}
        ></TopText>
        <C.AgreementFrame>
          <C.HiddenCheckbox {...register('age')} id="age"></C.HiddenCheckbox>
          <C.CheckBoxFrame color={watch('age') ? '#F7F2FF' : '#F9FAFB'}>
            <C.CheckBoxLabel
              htmlFor="age"
              src={watch('age') ? checkedBox.src : unCheckedBox.src}
              onClick={checkState}
            >
              <C.Text>(필수) 만 14세 이상입니다</C.Text>
            </C.CheckBoxLabel>
          </C.CheckBoxFrame>
          <C.CheckBoxFrame color={watch('privateInfo') ? '#F7F2FF' : '#F9FAFB'}>
            <C.HiddenCheckbox
              {...register('privateInfo')}
              id="privateInfo"
            ></C.HiddenCheckbox>
            <C.CheckBoxLabelTwoLine
              htmlFor="privateInfo"
              onClick={checkState}
              src={watch('privateInfo') ? checkedBox.src : unCheckedBox.src}
            >
              <C.More_info>더보기</C.More_info>
              <C.Text_wrap>
                <C.Text>
                  (필수) 개인정보 수집 및 <br></br> 이용에 대한 안내
                </C.Text>
              </C.Text_wrap>
            </C.CheckBoxLabelTwoLine>
          </C.CheckBoxFrame>
          <C.CheckBoxFrame color={watch('receiveInfo') ? '#F7F2FF' : '#F9FAFB'}>
            <C.HiddenCheckbox
              {...register('receiveInfo')}
              id="receiveInfo"
            ></C.HiddenCheckbox>
            <C.CheckBoxLabel
              htmlFor="receiveInfo"
              onClick={checkState}
              src={watch('receiveInfo') ? checkedBox.src : unCheckedBox.src}
            >
              <C.More_info>더보기</C.More_info>
              <C.Text_wrap>
                <C.Text>(선택) 클립 맞춤 정보수신 동의</C.Text>
              </C.Text_wrap>
            </C.CheckBoxLabel>
          </C.CheckBoxFrame>
          <C.CheckBoxFrame color={watch('allAgree') ? '#F7F2FF' : '#F9FAFB'}>
            <C.HiddenCheckbox
              {...register('allAgree')}
              id="allAgree"
            ></C.HiddenCheckbox>
            <C.CheckBoxLabel
              htmlFor="allAgree"
              onClick={checkState}
              src={watch('allAgree') ? checkedBox.src : unCheckedBox.src}
            >
              <C.Text>모두 동의 합니다</C.Text>
            </C.CheckBoxLabel>
          </C.CheckBoxFrame>
        </C.AgreementFrame>
      </C.view_wrap>
      <Footer>
        {nextState ? (
          <C.EnabledNextButton onClick={next}>다음으로</C.EnabledNextButton>
        ) : (
          <C.DisabledNextButton>다음으로</C.DisabledNextButton>
        )}
      </Footer>
    </>
  );
};

export default Agreement;
