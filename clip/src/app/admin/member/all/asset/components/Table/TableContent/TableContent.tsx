import * as S from './TableContent.style';
import MemberType from '@/app/type/Member';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import patchModifyMember from '@/app/api/admin/patch-modifyMember';
import Image from 'next/image';
import modifyIcon from '@/app/admin/member/all/asset/image/modifyIcon.svg';
import cancel from '@/app/admin/member/all/asset/image/cancel.svg';

const TableContent = ({ info }: { info: MemberType }) => {
  const [isModifyMode, setIsModifyMode] = useState<boolean>(false);
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const handleModfiyInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.id, e.target.value);
  };

  const handleMode = () => {
    setIsModifyMode(!isModifyMode);
  };

  const submit = async () => {
    const requestData = {
      birthYear: watch('birthYear'),
      city: watch('city'),
      district: watch('district'),
      educationName: watch('educationName'),
      educationStatus: watch('educationStatus'),
      job: watch('job'),
    };

    const res = await patchModifyMember(info?.id, requestData);

    if (res?.status === 200) {
      alert('수정 되었습니다.');
      window.location.reload();
    }
  };

  useEffect(() => {
    for (const key in info) setValue(key, info[key]);
  }, [info]);

  if (isModifyMode)
    return (
      <tr key={info.id}>
        <S.td>{info.id}</S.td>
        <S.td>{info.name}</S.td>
        <S.td>{info.number}</S.td>
        <S.td>
          <S.tableItem_input
            id="birthYear"
            {...register('birthYear')}
            onChange={handleModfiyInfo}
            value={watch('birthYear')}
          />
        </S.td>
        <S.td>{info.gender}</S.td>
        <S.td>
          <S.tableItem_input
            id="city"
            {...register('city')}
            onChange={handleModfiyInfo}
            value={watch('city')}
          />
          &nbsp;
          <S.tableItem_input
            id="district"
            {...register('district')}
            onChange={handleModfiyInfo}
            value={watch('district')}
          />
        </S.td>
        <S.td>
          <S.tableItem_input
            id="job"
            {...register('job')}
            onChange={handleModfiyInfo}
            value={watch('job')}
          />
        </S.td>
        <S.td>
          <S.tableItem_input
            id="educationName"
            {...register('educationName')}
            onChange={handleModfiyInfo}
            value={watch('educationName')}
          />
          &nbsp;
          <S.tableItem_input
            id="educationStatus"
            {...register('educationStatus')}
            onChange={handleModfiyInfo}
            value={watch('educationStatus')}
          />
        </S.td>
        <S.td>
          <S.modify_mode_wrap>
            <S.save_button onClick={submit}>저장</S.save_button>
            <S.cancel_button onClick={handleMode}>
              <Image
                src={cancel.src}
                alt="cancel"
                width={17}
                height={17}
              ></Image>
            </S.cancel_button>
          </S.modify_mode_wrap>
        </S.td>
      </tr>
    );
  else {
    return (
      <tr key={info.id}>
        <S.td>{info.id}</S.td>
        <S.td>{info.name}</S.td>
        <S.td>{info.number}</S.td>
        <S.td>{info.birthYear}</S.td>
        <S.td>{info.gender}</S.td>
        <S.td>
          {info.city}&nbsp; {info.district}
        </S.td>
        <S.td>{info.job}</S.td>
        <S.td>
          {info.educationName}&nbsp; {info.educationStatus}
        </S.td>
        <S.td>
          <S.modify_button onClick={handleMode}>
            <Image
              src={modifyIcon.src}
              alt="modifyIcon"
              width={17}
              height={17}
            ></Image>
          </S.modify_button>
        </S.td>
      </tr>
    );
  }
};

export default TableContent;
