'use client';

import styled from 'styled-components';
import DetailCategory from '@/app/SharedComponent/Admin/DetailCategory/DetailCategory';
import SearchBar from './asset/components/SearchBar/SearchBar';
import HeaderAdmin from '@/app/SharedComponent/Header/HeaderAdmin/HeaderAdmin';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import TableContent from './asset/components/Table/TableContent/TableContent';
import TableIndex from '@/app/SharedComponent/Table/TableIndex/TableIndex';
import TableItem from './asset/components/Table/TableItem/TableIndexItem';
import { useRecoilState } from 'recoil';
import { dropdownOpenState } from '@/app/admin/member/Atoms/dropdownOpenStateAtom';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { TABLEINDEX_OPTION_WITHDRAW } from '@/app/SharedComponent/DropdownOption/TableOption';
import WithDrawMemberType from '@/app/type/WithdrawMemberType';

const dummy = [
  {
    birthYear: `1998`,
    reason: `탈퇴 이유입니다.`,
    withdrawDay: `2024.06.17`,
    gender: `남성`,
    id: 1,
    name: `이진선`,
    number: '010-0000-0000',
  },
  {
    birthYear: `1998`,
    reason: `탈퇴 이유입니다.`,
    withdrawDay: `2024.06.17`,
    gender: `남성`,
    id: 2,
    name: `이진선`,
    number: '010-0000-0000',
  },
  {
    birthYear: `1998`,
    reason: `탈퇴 이유입니다.`,
    withdrawDay: `2024.06.17`,
    gender: `남성`,
    id: 3,
    name: `이진선`,
    number: '010-0000-0000',
  },
  {
    birthYear: `1998`,
    reason: `탈퇴 이유입니다.`,
    withdrawDay: `2024.06.17`,
    gender: `남성`,
    id: 4,
    name: `이진선`,
    number: '010-0000-0000',
  },
  {
    birthYear: `1998`,
    reason: `탈퇴 이유입니다.`,
    withdrawDay: `2024.06.17`,
    gender: `남성`,
    id: 5,
    name: `이진선`,
    number: '010-0000-0000',
  },
  {
    birthYear: `1998`,
    reason: `탈퇴 이유입니다.`,
    withdrawDay: `2024.06.17`,
    gender: `남성`,
    id: 6,
    name: `이진선`,
    number: '010-0000-0000',
  },
  {
    birthYear: `1998`,
    reason: `탈퇴 이유입니다.`,
    withdrawDay: `2024.06.17`,
    gender: `남성`,
    id: 7,
    name: `이진선`,
    number: '010-0000-0000',
  },
  {
    birthYear: `1998`,
    reason: `탈퇴 이유입니다.`,
    withdrawDay: `2024.06.17`,
    gender: `남성`,
    id: 8,
    name: `이진선`,
    number: '010-0000-0000',
  },
  {
    birthYear: `1998`,
    reason: `탈퇴 이유입니다.`,
    withdrawDay: `2024.06.17`,
    gender: `남성`,
    id: 9,
    name: `이진선`,
    number: '010-0000-0000',
  },
  {
    birthYear: `1998`,
    reason: `탈퇴 이유입니다.`,
    withdrawDay: `2024.06.17`,
    gender: `남성`,
    id: 10,
    name: `이진선`,
    number: '010-0000-0000',
  },
];

const Withdraw = () => {
  const [text, setText] = useRecoilState(dropdownOpenState);
  const [list, setList] = useState<WithDrawMemberType[]>(dummy);

  const hhh = (e: React.MouseEvent<HTMLDivElement>) => {
    for (const key in text) {
      setText((prev) => ({ ...prev, [key]: false }));
    }
  };

  return (
    <>
      <HeaderAdmin state={'회원 관리'}></HeaderAdmin>
      <Spacer height="9rem"></Spacer>
      <Wrap onClick={hhh}>
        <DetailCategory
          category="회원탈퇴"
          detailCategory="탈퇴 회원 관리"
        ></DetailCategory>
        <SearchBar></SearchBar>
        <List_wrap>
          <TableIndex>
            {TABLEINDEX_OPTION_WITHDRAW.map((val, idx) => {
              return (
                <TableItem key={idx} size={val.size}>
                  {val.name}
                </TableItem>
              );
            })}
          </TableIndex>
          {list?.map((val: any, idx: number) => {
            return <TableContent key={idx} info={val}></TableContent>;
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
  height: fit-content;
`;

const List_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default Withdraw;
