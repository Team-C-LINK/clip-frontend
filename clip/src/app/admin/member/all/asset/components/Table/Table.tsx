import MemberType from '@/app/type/Member';
import TableContent from './TableContent/TableContent';
import * as S from './Table.style';

interface TableProps {
  info?: MemberType[];
}

const Table: React.FC<TableProps> = ({ info }) => {
  return (
    <S.table>
      <thead>
        <tr>
          <S.th>번호</S.th>
          <S.th>이름</S.th>
          <S.th>전화번호</S.th>
          <S.th>출생년도</S.th>
          <S.th>성별</S.th>
          <S.th>주소</S.th>
          <S.th>직업</S.th>
          <S.th>학력</S.th>
          <S.th>수정</S.th>
        </tr>
      </thead>
      <tbody>
        {info?.map((item) => {
          return <TableContent key={item.id} info={item}></TableContent>;
        })}
      </tbody>
    </S.table>
  );
};

export default Table;
