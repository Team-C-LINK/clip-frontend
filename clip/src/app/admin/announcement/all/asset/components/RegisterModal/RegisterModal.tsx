import Divider from '@/app/SharedComponent/Divider/Divider';
import * as C from './RegisterModal.style';
import Image from 'next/image';
import plus from '../../image/plus.svg';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import cancel from '../../image/cancel.svg';
import { useForm } from 'react-hook-form';
import { uploadS3 } from '@/app/utils/hook/uploadS3';
import postRegisterResearcher from '@/app/api/admin/post-registerResearcher';
import RegisterResearcherType from '@/app/type/RegisterResearcherType';

type RegisterModalProps = {
  setIsModalOpen: React.Dispatch<boolean>;
};

const RegisterModal: React.FC<RegisterModalProps> = ({ setIsModalOpen }) => {
  const { register, watch } = useForm<RegisterResearcherType>({
    mode: 'onChange',
  });

  const handleModalState = () => {
    setIsModalOpen(false);
  };

  const submit = async () => {
    const data = watch();
    const profileUrl = await uploadS3(data.profile[0] as File);
    data.profile = profileUrl as string;
    const res = await postRegisterResearcher(data);
    if (res?.status === 200) {
      alert('연구자를 등록했습니다.');
      window.location.reload();
    }
  };

  return (
    <>
      <C.black_background>
        <Image src={plus.src} alt="plus" width={10} height={10}></Image>
      </C.black_background>
      <C.wrap>
        <C.title>새 연구자 등록</C.title>
        <C.cancel_button onClick={handleModalState}>
          <Image src={cancel.src} alt="plus" width={12} height={12}></Image>
        </C.cancel_button>
        <Divider $size="100%"></Divider>
        <Spacer height="3rem"></Spacer>
        <C.input_wrap>
          <C.index>연구자 명</C.index> <C.input {...register('name')}></C.input>
        </C.input_wrap>
        <C.input_wrap>
          <C.index>연구자 소속</C.index>
          <C.input {...register('affiliation')}></C.input>
        </C.input_wrap>
        <C.input_wrap>
          <C.index>이메일</C.index> <C.input {...register('email')}></C.input>
        </C.input_wrap>
        <C.input_wrap>
          <C.index>연구 분야</C.index>
          <C.input {...register('researchField')}></C.input>
        </C.input_wrap>
        <C.input_wrap>
          <C.index>대표 주소</C.index>
          <C.input {...register('detailAddress')}></C.input>
        </C.input_wrap>
        <Spacer height="3rem"></Spacer>
        <C.input_wrap>
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
              ? `${(watch('profile')[0] as File).name}`
              : `선택된 파일 없음`}
          </C.selected_file>
        </C.input_wrap>
        <Spacer height="3rem"></Spacer>
        <C.sumbit onClick={submit}>완료하기</C.sumbit>
      </C.wrap>
    </>
  );
};

export default RegisterModal;
