'use client';

import styled from 'styled-components';
import DetailCategory from '@/app/SharedComponent/Admin/DetailCategory/DetailCategory';
import SearchBar from '@/app/SharedComponent/Admin/SearchBar/SearchBar';
import HeaderAdmin from '@/app/SharedComponent/Header/HeaderAdmin/HeaderAdmin';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import TableContent from '@/app/admin/member/asset/components/Table/TableContent/TableContent';
import TableIndex from '@/app/SharedComponent/Table/TableIndex/TableIndex';
import TableItem from '@/app/admin/member/asset/components/Table/TableItem/TableIndexItem';
import { useRecoilState } from 'recoil';
import { dropdownOpenState } from '@/app/admin/member/Atoms/dropdownOpenStateAtom';
import { useQuery } from '@tanstack/react-query';
import getMemberList from '@/app/api/admin/get-memberList';
import { useEffect } from 'react';
import GetMemberType from '@/app/type/GetMemberType';

const test = [
  { name: '번호', size: '4.3rem' },
  { name: '이름', size: '10rem' },
  { name: '전화번호', size: '14.2rem' },
  { name: '출생년도', size: '10rem' },
  { name: '성별', size: '5rem' },
  { name: '주소', size: '21rem' },
  { name: '직업', size: '10rem' },
  { name: '학력', size: '21rem' },
  { name: '관리', size: '15rem' },
];

const Member = () => {
  const [text, setText] = useRecoilState(dropdownOpenState);
  const { data: list } = useQuery<GetMemberType>({
    queryKey: ['key'],
    queryFn: getMemberList,
  });

  const hhh = (e: React.MouseEvent<HTMLDivElement>) => {
    for (const key in text) {
      setText((prev) => ({ ...prev, [key]: false }));
    }
  };

  return (
    <>
      <HeaderAdmin></HeaderAdmin>
      <Spacer height="9rem"></Spacer>
      <Wrap onClick={hhh}>
        <DetailCategory
          category="회원관리"
          detailCategory="전체 회원 관리"
        ></DetailCategory>
        <SearchBar></SearchBar>
        <List_wrap>
          <TableIndex>
            {test.map((val) => {
              return <TableItem size={val.size}>{val.name}</TableItem>;
            })}
          </TableIndex>
          {list?.members?.map((val: any, idx: number) => {
            return <TableContent info={val}></TableContent>;
          })}
        </List_wrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 78.3%;
  height: 100%;
`;

const List_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default Member;
