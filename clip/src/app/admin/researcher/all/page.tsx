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
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TABLEINDEX_OPTION_WITHDRAW } from '@/app/SharedComponent/DropdownOption/TableOption';
import WithDrawMemberType from '@/app/type/WithdrawMemberType';
import plus from './asset/image/plus.svg';
import RegisterModal from './asset/components/RegisterModal/RegisterModal';

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
];

const ResearcherAll = () => {
  const [text, setText] = useRecoilState(dropdownOpenState);
  const [list, setList] = useState<WithDrawMemberType[]>(dummy);

  const hhh = (e: React.MouseEvent<HTMLDivElement>) => {
    for (const key in text) {
      setText((prev) => ({ ...prev, [key]: false }));
    }
  };

  return (
    <>
      <HeaderAdmin></HeaderAdmin>
      <Spacer height="9rem"></Spacer>
      <RegisterModal></RegisterModal>
      <Wrap onClick={hhh}>
        <DetailCategory
          category="연구자 관리"
          detailCategory="전체 연구자 리스트"
        ></DetailCategory>
        <Register_new_researcher>
          <Image src={plus.src} alt="plus" width={10} height={10}></Image>새
          연구자 등록
        </Register_new_researcher>
        <SearchBar></SearchBar>
        <List_wrap>
          <TableIndex>
            {TABLEINDEX_OPTION_WITHDRAW.map((val) => {
              return <TableItem size={val.size}>{val.name}</TableItem>;
            })}
          </TableIndex>
          {list?.map((val: any, idx: number) => {
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

const Register_new_researcher = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B3};
  right: 0rem;
  width: 14.2rem;
  height: 4.2rem;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10rem;
  cursor: pointer;
`;

export default ResearcherAll;
