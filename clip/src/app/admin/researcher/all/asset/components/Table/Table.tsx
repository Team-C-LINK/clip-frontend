import MemberType from '@/app/type/Member';
import TableContent from './TableContent/TableContent';
import * as S from './Table.style';
import ResearcherInfoType from '@/app/type/ResearcherInfoType';

interface TableProps {
  info?: ResearcherInfoType[];
}

const Table: React.FC<TableProps> = ({ info }) => {
  return (
    <S.table>
      <thead>
        <tr>
          <S.th>번호</S.th>
          <S.th>이름</S.th>
          <S.th>소속</S.th>
          <S.th>이메일</S.th>
          <S.th>연구분야</S.th>
          <S.th>대표주소</S.th>
          <S.th>사진</S.th>
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
