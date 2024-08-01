import MemberType from '@/app/type/Member';
import TableContent from './TableContent/TableContent';
import * as S from './Table.style';

import { useEffect, useState } from 'react';

interface ResearcherModalInfoType {
  name: string;
  affiliation: string;
  email: string;
}

interface TableProps {
  info?: ResearcherModalInfoType[];
}

const Table: React.FC<TableProps> = ({ info }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  return (
    <S.table>
      <thead>
        <tr>
          <S.th>선택</S.th>
          <S.th>연구자명</S.th>
          <S.th>소속</S.th>
          <S.th>이메일</S.th>
        </tr>
      </thead>
      <tbody>
        {info?.map((item, index) => {
          return (
            <TableContent
              key={item.name}
              info={item}
              setSelectedIndex={setSelectedIndex}
              selectedIndex={selectedIndex}
              index={index}
            ></TableContent>
          );
        })}
      </tbody>
    </S.table>
  );
};

export default Table;
