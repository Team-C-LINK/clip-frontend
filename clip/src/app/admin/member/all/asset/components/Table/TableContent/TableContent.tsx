import styled from 'styled-components';
import TableItem from '../TableItem/TableIndexItem';
import { useEffect, useState } from 'react';
import * as C from './TableContent.style';
import { useForm } from 'react-hook-form';
import MemberType from '@/app/type/Member';
import patchModifyMember from '@/app/api/admin/patch-modifyMember';

const test = [
  { name: 'id', size: '4.3rem' },
  { name: 'name', size: '10rem' },
  { name: 'number', size: '14.2rem' },
  { name: 'birthYear', size: '10rem' },
  { name: 'gender', size: '5rem' },
  { name: 'address', size: '21rem' },
  { name: 'job', size: '10rem' },
  { name: 'education', size: '21rem' },
];

type TableContentProps = {
  info: MemberType;
};

const TableContent: React.FC<TableContentProps> = ({ info }) => {
  const [isModifyMode, setIsModifyMode] = useState<boolean>(false);
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const handleMode = () => {
    setIsModifyMode(!isModifyMode);
  };

  const handleModfiyInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.id, e.target.value);
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

  return (
    <C.wrap>
      {!isModifyMode && (
        <>
          {test.map((val, idx) => {
            if (val.name === 'address')
              return (
                <TableItem
                  key={idx}
                  size={val.size}
                >{`${info.city} ${info.district}`}</TableItem>
              );
            if (val.name === 'education')
              return (
                <TableItem
                  key={idx}
                  size={val.size}
                >{`${info.educationName} ${info.educationStatus}`}</TableItem>
              );
            return (
              <TableItem key={idx} size={val.size}>
                {info[val.name]}
              </TableItem>
            );
          })}
          <C.modify_button onClick={handleMode}>수정</C.modify_button>
        </>
      )}
      {isModifyMode && (
        <>
          <TableItem size={'4.3rem'}>{info.id}</TableItem>
          <TableItem size={'10rem'}>{info.name}</TableItem>
          <TableItem size={'14.2rem'}>{info.number}</TableItem>
          <C.tableItem_input
            id="birthYear"
            {...register('birthYear')}
            onChange={handleModfiyInfo}
            value={watch('birthYear')}
          />
          <TableItem size={'5rem'}>{info.gender}</TableItem>
          <C.address_wrap>
            <C.tableItem_input
              id="city"
              {...register('city')}
              onChange={handleModfiyInfo}
              value={watch('city')}
            />
            <C.tableItem_input
              id="district"
              {...register('district')}
              onChange={handleModfiyInfo}
              value={watch('district')}
            />
          </C.address_wrap>
          <C.tableItem_input
            id="job"
            {...register('job')}
            onChange={handleModfiyInfo}
            value={watch('job')}
          />
          <C.address_wrap>
            <C.tableItem_input
              id="educationName"
              {...register('educationName')}
              onChange={handleModfiyInfo}
              value={watch('educationName')}
            />
            <C.tableItem_input
              id="educationStatus"
              {...register('educationStatus')}
              onChange={handleModfiyInfo}
              value={watch('educationStatus')}
            />
          </C.address_wrap>
          <C.confirm_cancel_wrap>
            <C.confirm onClick={submit}>확인</C.confirm>
            <C.cancel onClick={handleMode}>취소</C.cancel>
          </C.confirm_cancel_wrap>
        </>
      )}
    </C.wrap>
  );
};

export default TableContent;
