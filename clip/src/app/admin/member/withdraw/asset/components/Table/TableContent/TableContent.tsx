import styled from 'styled-components';
import TableItem from '../TableItem/TableIndexItem';
import { useEffect, useState } from 'react';
import * as C from './TableContent.style';
import { useForm } from 'react-hook-form';
import patchModifyMember from '@/app/api/admin/patch-modifyMember';
import WithDrawMemberType from '@/app/type/WithdrawMemberType';

const TABLE_ITEM_OPTION_WITHDRAW = [
  { name: 'id', size: '4.3rem' },
  { name: 'name', size: '10rem' },
  { name: 'number', size: '14.2rem' },
  { name: 'birthYear', size: '10rem' },
  { name: 'gender', size: '5rem' },
  { name: 'reason', size: '20rem' },
  { name: 'withdrawDay', size: '20rem' },
];

type TableContentProps = {
  info: WithDrawMemberType;
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
      {TABLE_ITEM_OPTION_WITHDRAW.map((option, idx) => {
        return (
          <TableItem key={idx} size={option.size}>
            {info[option.name]}
          </TableItem>
        );
      })}
      <C.modify_button onClick={handleMode}>복구</C.modify_button>
    </C.wrap>
  );
};

export default TableContent;
