'use client';

import styled from 'styled-components';
import * as Manage from '@/app/admin/asset/components/Manage/Manage.style';
import DetailCategory from '@/app/SharedComponent/Admin/DetailCategory/DetailCategory';
import SearchBar from './asset/components/SearchBar/SearchBar';
import HeaderAdmin from '@/app/SharedComponent/Header/HeaderAdmin/HeaderAdmin';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import { useRecoilState } from 'recoil';
import { dropdownOpenState } from '@/app/admin/member/Atoms/dropdownOpenStateAtom';
import { useQuery } from '@tanstack/react-query';
import getMemberList from '@/app/api/admin/get-memberList';
import { useEffect, useState } from 'react';
import GetMemberType from '@/app/type/GetMemberType';
import MemberType from '@/app/type/Member';
import { useSearchParams } from 'next/navigation';
import SideBar from '@/app/SharedComponent/Admin/SideBar/SideBar';
import Table from './asset/components/Table/Table';

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
      <Manage.wrap>
        <SideBar curCategory={'allMember'}></SideBar>
        <Manage.manage_wrap onClick={hhh}>
          <Manage.manage_wrap_inner>
            <Spacer height="9rem"></Spacer>
            <DetailCategory category="전체 회원 관리"></DetailCategory>
            <SearchBar></SearchBar>
            <Total>Total : {list?.length}</Total>
            <List_wrap>
              <Table info={list} />
            </List_wrap>
          </Manage.manage_wrap_inner>
        </Manage.manage_wrap>
      </Manage.wrap>
    </>
  );
};

const List_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Total = styled.span`
  position: absolute;
  top: 20rem;
  ${(props) => props.theme.FONT.Regular.B3};
`;

export default Member;
