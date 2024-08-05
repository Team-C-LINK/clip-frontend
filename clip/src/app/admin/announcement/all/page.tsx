'use client';

import * as S from './asset/components/page/page.style';
import * as Manage from '@/app/admin/asset/components/Manage/Manage.style';
import DetailCategory from '@/app/SharedComponent/Admin/DetailCategory/DetailCategory';
import SearchBar from './asset/components/SearchBar/SearchBar';
import HeaderAdmin from '@/app/SharedComponent/Header/HeaderAdmin/HeaderAdmin';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import { useRecoilState } from 'recoil';
import { dropdownOpenState } from '@/app/admin/member/Atoms/dropdownOpenStateAtom';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import plus from './asset/image/plus.svg';
import getAnnouncementList from '@/app/api/admin/get-announcementList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import RecruitListType from '@/app/type/RecruitList';
import AnnouncementType from '@/app/type/Announcment';
import SideBar from '@/app/SharedComponent/Admin/SideBar/SideBar';
import Table from './asset/components/Table/Table';

const AnnouncementAll = () => {
  const params = useSearchParams();
  const category = !params.get('announcementType')
    ? ''
    : params.get('announcementType');
  const name = params.get('name');
  const [text, setText] = useRecoilState(dropdownOpenState);
  const [list, setList] = useState<AnnouncementType[]>();

  const { data: announcementInfo } = useQuery<RecruitListType>({
    queryKey: [
      {
        lastAnnouncementId: params.get('lastId'),
        announcementType: params.get('announcementType'),
        isRecruiting: params.get('isRecruiting'),
      },
    ],
    queryFn: getAnnouncementList,
  });

  const handleCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget.id;
    if (!target) window.location.href = `/admin/announcement/all`;
    else
      window.location.href = `/admin/announcement/all?announcementType=${target}`;
  };

  const hhh = (e: React.MouseEvent<HTMLDivElement>) => {
    for (const key in text) {
      setText((prev) => ({ ...prev, [key]: false }));
    }
  };

  useEffect(() => {
    if (announcementInfo) setList(announcementInfo?.announcements);
  }, [announcementInfo, category]);

  return (
    <>
      <HeaderAdmin state={'공고 관리'}></HeaderAdmin>
      <Manage.wrap>
        <SideBar curCategory={'announcement'}></SideBar>
        <Manage.manage_wrap>
          <Manage.manage_wrap_inner onClick={hhh}>
            <Spacer height="9rem"></Spacer>
            <DetailCategory category="전체 공고 관리"></DetailCategory>
            <S.total>Total : {announcementInfo?.totalCount}</S.total>
            <S.register_new_researcher
              onClick={() =>
                (window.location.href =
                  '/admin/announcement/write?type=연구/인터뷰')
              }
            >
              <Image src={plus.src} alt="plus" width={10} height={10}></Image>새
              공고 등록
            </S.register_new_researcher>
            <SearchBar setList={setList}></SearchBar>
            <S.list_wrap>
              <Table info={announcementInfo?.announcements}></Table>
            </S.list_wrap>
          </Manage.manage_wrap_inner>
        </Manage.manage_wrap>
      </Manage.wrap>
    </>
  );
};

export default AnnouncementAll;
