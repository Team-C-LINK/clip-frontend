import { ChangeEvent, useEffect, useState } from 'react';
import * as C from './RegisterModal.style';
import Image from 'next/image';
import plus from '../../image/plus.svg';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import cancel from '../../image/cancel.svg';
import { useForm } from 'react-hook-form';
import { uploadS3 } from '@/app/utils/hook/uploadS3';
import postRegisterResearcher from '@/app/api/admin/post-registerResearcher';
import RegisterResearcherType from '@/app/type/RegisterResearcherType';
import previewImage from '../../image/preview.svg';

type RegisterModalProps = {
  setIsModalOpen: React.Dispatch<boolean>;
};

const RegisterModal: React.FC<RegisterModalProps> = ({ setIsModalOpen }) => {
  const [preview, setPreview] = useState<string>('');
  const { register, watch } = useForm<RegisterResearcherType>({
    mode: 'onChange',
    defaultValues: {
      profile: undefined,
    },
  });

  const handleModalState = () => {
    setIsModalOpen(false);
  };

  const submit = async () => {
    const data = watch();
    const profileUrl = await uploadS3(data?.profile[0] as File);
    data.profile = profileUrl as string;
    const res = await postRegisterResearcher(data);
    if (res?.status === 200) {
      alert('연구자를 등록했습니다.');
      window.location.reload();
    }
  };

  useEffect(() => {
    if (watch('profile')) {
      const file = (watch('profile') as File[])[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result?.toString() as string);
        };
        reader.readAsDataURL(file);
      }
    }
  }, [watch('profile')]);

  return (
    <>
      <C.black_background>
        <Image src={plus.src} alt="plus" width={10} height={10}></Image>
      </C.black_background>
      <C.wrap>
        <C.title>
          새 연구자 등록
          <C.cancel_button onClick={handleModalState}>
            <Image src={cancel.src} alt="plus" width={12} height={12}></Image>
          </C.cancel_button>
        </C.title>
        <C.left_wrap>
          <Spacer height="8rem"></Spacer>
          <C.preview $previewSrc={preview ? preview : ''}>
            {preview ? null : (
              <>
                <Image
                  src={previewImage.src}
                  alt="preview"
                  width={24}
                  height={24}
                ></Image>
                미리보기 없음
              </>
            )}
          </C.preview>
          <C.upload_wrap>
            <input
              {...register('profile')}
              id="profile"
              type="file"
              accept="image/*"
              hidden={true}
            ></input>
            <C.upload htmlFor="profile">
              <Image src={plus.src} alt="plus" width={10} height={10}></Image>
              사진 업로드
            </C.upload>
            <C.selected_file $isExistFile={watch('profile') !== undefined}>
              {watch('profile')
                ? `${(watch('profile')[0] as File)?.name}`
                : `선택된 파일 없음`}
            </C.selected_file>
          </C.upload_wrap>

          <Spacer height="3rem"></Spacer>
        </C.left_wrap>
        <C.left_wrap>
          <Spacer height="8rem"></Spacer>
          <C.input_wrap>
            <C.index>연구자 명</C.index>
            <C.input
              {...(register('name'),
              {
                placeholder: '연구자 이름을 입력해주세요',
              })}
            ></C.input>
          </C.input_wrap>
          <C.input_wrap>
            <C.index>연구자 소속</C.index>
            <C.input
              {...(register('affiliation'),
              {
                placeholder: '연구자 소속을 입력해주세요',
              })}
            ></C.input>
          </C.input_wrap>
          <C.input_wrap>
            <C.index>이메일</C.index>{' '}
            <C.input
              {...(register('email'),
              {
                placeholder: '이메일을 입력해주세요',
              })}
            ></C.input>
          </C.input_wrap>
          <C.input_wrap>
            <C.index>연구 분야</C.index>
            <C.input
              {...(register('researchField'),
              {
                placeholder: '연구 분야를 입력해주세요',
              })}
            ></C.input>
          </C.input_wrap>
          <C.input_wrap>
            <C.index>대표 주소</C.index>
            <C.input
              {...(register('detailAddress'),
              {
                placeholder: '주소를 입력해주세요',
              })}
            ></C.input>
          </C.input_wrap>
          <C.button_wrap>
            <C.cancel_gray onClick={handleModalState}>취소하기</C.cancel_gray>
            <C.sumbit onClick={submit}>완료하기</C.sumbit>
          </C.button_wrap>
        </C.left_wrap>
      </C.wrap>
    </>
  );
};

export default RegisterModal;
