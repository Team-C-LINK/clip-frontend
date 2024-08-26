import MemberType from '@/app/type/Member';
import TableContent from './TableContent/TableContent';
import * as S from './Table.style';

import { useEffect, useState } from 'react';

interface ParticipantInfo {
  gender: string;
  age: string;
  total: number;
  recruited: number;
}
interface TableProps {
  info?: ParticipantInfo[];
}

const Table: React.FC<TableProps> = ({ info }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  return (
    <S.wrap>
      <S.title>총 : 53명 (여성 : 22명 남성 11명 무관 20명)</S.title>
      <S.table
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
      >
        <thead>
          <tr>
            <S.th>성별</S.th>
            <S.th>연령층</S.th>
            <S.th>모집인원</S.th>
            <S.th>보기</S.th>
          </tr>
        </thead>
        <tbody>
          {info?.map((item, index) => {
            return <TableContent key={index} info={item}></TableContent>;
          })}
        </tbody>
      </S.table>
    </S.wrap>
  );
};

export default Table;
