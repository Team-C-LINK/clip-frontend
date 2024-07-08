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
import { useEffect, useState } from 'react';
import plus from './asset/image/plus.svg';
import RegisterModal from './asset/components/RegisterModal/RegisterModal';
import GetResearcherType from '@/app/type/GetResearcherType';
import getResearcherList from '@/app/api/admin/get-researcherList';
import { useSearchParams } from 'next/navigation';
import SideBar from '@/app/SharedComponent/Admin/SideBar/SideBar';
import Table from './asset/components/Table/Table';

const ResearcherAll = () => {
  const [text, setText] = useRecoilState(dropdownOpenState);
  const params = useSearchParams();
  const { data: list } = useQuery<GetResearcherType>({
    queryKey: [params.get('lastId'), params.get('name')],
    queryFn: getResearcherList,
  });

  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState<boolean>(false);

  const hhh = (e: React.MouseEvent<HTMLDivElement>) => {
    for (const key in text) {
      setText((prev) => ({ ...prev, [key]: false }));
    }
  };

  const handleRegisterNewResearcher = () => {
    setIsRegisterModalOpen(true);
  };

  return (
    <>
      <HeaderAdmin state={'연구자 관리'}></HeaderAdmin>
      {isRegisterModalOpen && (
        <RegisterModal setIsModalOpen={setIsRegisterModalOpen}></RegisterModal>
      )}
      <Manage.wrap>
        <SideBar curCategory={'researcher'}></SideBar>
        <Manage.manage_wrap onClick={hhh}>
          <Manage.manage_wrap_inner>
            <Spacer height="9rem"></Spacer>
            <DetailCategory category="연구자 관리"></DetailCategory>
            <S.register_new_researcher onClick={handleRegisterNewResearcher}>
              <Image src={plus.src} alt="plus" width={10} height={10}></Image>새
              연구자 등록
            </S.register_new_researcher>
            <S.total>Total : {list?.totalCount}</S.total>
            <SearchBar></SearchBar>
            <S.list_wrap>
              <Table info={list?.researchers}></Table>
              <div>
                {list &&
                  new Array(Math.ceil(list?.totalCount / 10))
                    .fill(0)
                    .map((val, idx) => (
                      <span
                        key={idx}
                        onClick={() =>
                          (window.location.href = idx
                            ? `${window.location.href}?lastId=${
                                list?.totalCount - idx * 10
                              }`
                            : `${window.location.href}`)
                        }
                      >
                        {idx + 1}
                      </span>
                    ))}
              </div>
            </S.list_wrap>
          </Manage.manage_wrap_inner>
        </Manage.manage_wrap>
      </Manage.wrap>
    </>
  );
};

export default ResearcherAll;
