'use client';

import * as S from './asset/components/page/page.style';
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
import { TABLEINDEX_OPTION_ANNOUNCEMENT } from '@/app/SharedComponent/DropdownOption/TableOption';
import plus from './asset/image/plus.svg';
import getAnnouncementList from '@/app/api/admin/get-announcementList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import RecruitListType from '@/app/type/RecruitList';
import AnnouncementType from '@/app/type/Announcment';
import SideBar from '@/app/SharedComponent/Admin/SideBar/SideBar';

const CATEGORY = ['', 'INTERVIEW', 'SURVEY', 'ETC'];

const CATEGORY_TO_VALUE: { [key: string]: string } = {
  '': '전체 공고',
  INTERVIEW: '연구/인터뷰',
  SURVEY: '설문조사',
  ETC: '기타',
};

const AnnouncementAll = () => {
  const params = useSearchParams();
  const category = !params.get('announcementType')
    ? ''
    : params.get('announcementType');
  const name = params.get('name');
  const [text, setText] = useRecoilState(dropdownOpenState);
  const [list, setList] = useState<AnnouncementType[]>();

  const { data: announcementInfo } = useQuery<RecruitListType>({
    queryKey: [params.get('lastId'), params.get('announcementType')],
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
      <S.wrap>
        <SideBar curCategory={'announcement'}></SideBar>
        <S.manage_wrap onClick={hhh}>
          <Spacer height="9rem"></Spacer>
          <DetailCategory
            category="공고 관리"
            detailCategory="전체 공고 관리"
          ></DetailCategory>
          <S.register_new_researcher>
            <Image src={plus.src} alt="plus" width={10} height={10}></Image>새
            공고 등록
          </S.register_new_researcher>
          <S.filter>
            {CATEGORY.map((categoryName, idx) => {
              if (category === categoryName)
                return (
                  <S.filter_item_selected key={idx}>
                    {CATEGORY_TO_VALUE[categoryName]}
                  </S.filter_item_selected>
                );
              return (
                <S.filter_item_unselected
                  key={idx}
                  id={categoryName}
                  onClick={handleCategory}
                >
                  {CATEGORY_TO_VALUE[categoryName]}
                </S.filter_item_unselected>
              );
            })}
          </S.filter>
          <SearchBar setList={setList}></SearchBar>
          <S.list_wrap>
            <TableIndex>
              {TABLEINDEX_OPTION_ANNOUNCEMENT.map((val, idx) => {
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
          </S.list_wrap>
          <S.page_index_wrap>
            {list &&
              new Array(Math.ceil(announcementInfo?.totalCount! / 10))
                .fill(0)
                .map((val, idx) => (
                  <S.page_index
                    key={idx}
                    onClick={() =>
                      (window.location.href = idx
                        ? `?lastId=${announcementInfo?.totalCount! - idx * 10}${
                            category ? `&announcementType=${category}` : ''
                          }`
                        : `${category ? `?announcementType=${category}` : ``}`)
                    }
                  >
                    {idx + 1}
                  </S.page_index>
                ))}
          </S.page_index_wrap>
        </S.manage_wrap>
      </S.wrap>
    </>
  );
};

export default AnnouncementAll;
