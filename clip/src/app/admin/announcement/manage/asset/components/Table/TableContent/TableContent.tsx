import { useEffect, useState } from 'react';
import * as S from './TableContent.style';
import { useRecoilState } from 'recoil';

interface ParticipantInfo {
  gender: string;
  age: string;
  total: number;
  recruited: number;
}

interface TableContentProps {
  info: ParticipantInfo;
}

const TableContent: React.FC<TableContentProps> = ({ info }) => {
  return (
    <S.tr>
      <S.td>{info?.gender}</S.td>
      <S.td>{info?.age}</S.td>
      <S.td>
        {info?.recruited} / {info?.total}
      </S.td>
      <S.td>보기</S.td>
    </S.tr>
  );
};

export default TableContent;
