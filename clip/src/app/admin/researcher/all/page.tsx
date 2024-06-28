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
import { TABLEINDEX_OPTION_RESEARCHER } from '@/app/SharedComponent/DropdownOption/TableOption';
import plus from './asset/image/plus.svg';
import RegisterModal from './asset/components/RegisterModal/RegisterModal';
import GetResearcherType from '@/app/type/GetResearcherType';
import getResearcherList from '@/app/api/admin/get-researcherList';
import { useSearchParams } from 'next/navigation';

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
      <Spacer height="9rem"></Spacer>
      {isRegisterModalOpen && (
        <RegisterModal setIsModalOpen={setIsRegisterModalOpen}></RegisterModal>
      )}
      <Wrap onClick={hhh}>
        <DetailCategory
          category="연구자 관리"
          detailCategory="전체 연구자 리스트"
        ></DetailCategory>
        <Register_new_researcher onClick={handleRegisterNewResearcher}>
          <Image src={plus.src} alt="plus" width={10} height={10}></Image>새
          연구자 등록
        </Register_new_researcher>
        <SearchBar></SearchBar>
        <List_wrap>
          <TableIndex>
            {TABLEINDEX_OPTION_RESEARCHER.map((val, idx) => {
              return (
                <TableItem key={idx} size={val.size}>
                  {val.name}
                </TableItem>
              );
            })}
          </TableIndex>
          {list?.researchers.map((val, idx: number) => {
            return <TableContent key={val.id} info={val}></TableContent>;
          })}
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
