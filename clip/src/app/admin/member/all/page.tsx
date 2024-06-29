'use client';

import styled from 'styled-components';
import DetailCategory from '@/app/SharedComponent/Admin/DetailCategory/DetailCategory';
import SearchBar from './asset/components/SearchBar/SearchBar';
import HeaderAdmin from '@/app/SharedComponent/Header/HeaderAdmin/HeaderAdmin';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import TableContent from '@/app/admin/member/all/asset/components/Table/TableContent/TableContent';
import TableIndex from '@/app/SharedComponent/Table/TableIndex/TableIndex';
import TableItem from '@/app/admin/member/all/asset/components/Table/TableItem/TableIndexItem';
import { useRecoilState } from 'recoil';
import { dropdownOpenState } from '@/app/admin/member/Atoms/dropdownOpenStateAtom';
import { useQuery } from '@tanstack/react-query';
import getMemberList from '@/app/api/admin/get-memberList';
import { useEffect, useState } from 'react';
import GetMemberType from '@/app/type/GetMemberType';
import MemberType from '@/app/type/Member';
import { useSearchParams } from 'next/navigation';
import { TABLEINDEX_OPTION_MEMBER } from '@/app/SharedComponent/DropdownOption/TableOption';
import SideBar from '@/app/SharedComponent/Admin/SideBar/SideBar';

const Member = () => {
  const params = useSearchParams();
  const [text, setText] = useRecoilState(dropdownOpenState);
  const { data: memberData } = useQuery<GetMemberType>({
    queryKey: [
      {
        number: params.get('number'),
        name: params.get('name'),
        city: params.get('city'),
        district: params.get('district'),
        educationName: params.get('educationName'),
        educationStatus: params.get('educationStatus'),
        job: params.get('job'),
        gender: params.get('gender'),
      },
    ],
    queryFn: getMemberList,
  });
  const [list, setList] = useState<MemberType[]>();

  const hhh = (e: React.MouseEvent<HTMLDivElement>) => {
    for (const key in text) {
      setText((prev) => ({ ...prev, [key]: false }));
    }
  };

  useEffect(() => {
    setList(memberData?.members);
  }, [memberData]);

  return (
    <>
      <HeaderAdmin state={'회원 관리'}></HeaderAdmin>
      <Wrap>
        <SideBar curCategory={'allMember'}></SideBar>
        <Manage_wrap onClick={hhh}>
          <Spacer height="9rem"></Spacer>
          <DetailCategory
            category="회원관리"
            detailCategory="전체 회원 관리"
          ></DetailCategory>
          <SearchBar></SearchBar>
          <List_wrap>
            <TableIndex>
              {TABLEINDEX_OPTION_MEMBER.map((val, idx) => {
                return (
                  <TableItem key={idx} size={val.size}>
                    {val.name}
                  </TableItem>
                );
              })}
            </TableIndex>
            {list?.map((val, idx: number) => {
              return <TableContent key={val.id} info={val}></TableContent>;
            })}
          </List_wrap>
        </Manage_wrap>
      </Wrap>
    </>
  );
};

const Manage_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 84.2%;
  height: 100%;
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  height: 100dvh;
`;

const List_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default Member;
