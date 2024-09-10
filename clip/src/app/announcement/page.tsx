'use client';

import React, { useEffect, useState, useRef, Suspense } from 'react';
import NavigationBar from '../SharedComponent/NavigationBar/NaivgationBar';
import Spacer from '../SharedComponent/Spacer/Spacer';
import Header from '../SharedComponent/Header/Header';
import HeaderBack from '../SharedComponent/Header/HeaderBack/HeaderBack';
import createFilteredList from '../utils/createFilteredList';
import Filter from './asset/components/Filter/Filter';
import RecruitCard from '../SharedComponent/RecruitCard/RecruitCard';
import useInfinityScroll from '../utils/hook/useInfinityScroll';
import getRecruitList from '../api/get-recruitList';
import * as C from './asset/components/C.style';
import Image from 'next/image';
import down_arrow from './asset/image/down_arrow.svg';
import AnnouncementType from '../type/Announcment';

const Recruit = () => {
  const [filterState, setFilterState] = useState<string>('전체 공고');
  const [isRecruiting, setIsRecruiting] = useState<boolean>(false);
  const [filteredList, setFilteredList] = useState<AnnouncementType[]>([]);
  const { observerTarget, recruitList } = useInfinityScroll(getRecruitList);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setFilteredList(
      createFilteredList(recruitList!, isRecruiting, filterState)
    );
  }, [recruitList, isRecruiting, filterState]);

  return (
    <>
      <Spacer height={'16rem'}></Spacer>
      <Header>
        <HeaderBack route={'/login'} text={'실시간 공고'}></HeaderBack>
      </Header>
      <Filter
        filterState={filterState}
        setFilterState={setFilterState}
        isRecruiting={isRecruiting}
        setIsRecruiting={setIsRecruiting}
      ></Filter>
      {filteredList.length ? (
        filteredList.map((item) => {
          return <RecruitCard info={item} key={item?.id}></RecruitCard>;
        })
      ) : (
        <C.no_content>아직 등록된 공고가 없어요</C.no_content>
      )}

      <div ref={observerTarget}></div>
      <C.scroll_top_button onClick={scrollToTop}>
        <Image src={down_arrow} alt="down_arrow" width={24} height={24}></Image>
      </C.scroll_top_button>
      <Spacer height="8rem"></Spacer>
      <NavigationBar state={'recruit'}></NavigationBar>
    </>
  );
};

export default Recruit;
