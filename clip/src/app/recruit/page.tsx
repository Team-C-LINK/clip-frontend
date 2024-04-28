'use client';

import React, { useEffect, useState } from 'react';
import NavigationBar from '../SharedComponent/NavigationBar/NaivgationBar';
import RecruitCard from '../SharedComponent/RecruitCard/RecruitCard';
import Spacer from '../SharedComponent/Spacer/Spacer';
import Header from '../SharedComponent/Header/Header';
import HeaderBack from '../SharedComponent/Header/HeaderBack/HeaderBack';
import useGetRecruitList from './asset/hook/useGetRecruitList';
import createFilteredList from '../utils/createFilteredList';

import Filter from './asset/components/Filter/Filter';

const Recruit = () => {
  const { recruitList } = useGetRecruitList(false, 10);

  const [filterState, setFilterState] = useState<string>('전체 공고');
  const [isRecruiting, setIsRecruiting] = useState<boolean>(false);

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
      {createFilteredList(
        recruitList?.announcements!,
        isRecruiting,
        filterState
      )?.map((item) => {
        return <RecruitCard info={item} key={item?.id}></RecruitCard>;
      })}

      <Spacer height="8rem"></Spacer>
      <NavigationBar state={'recruit'}></NavigationBar>
    </>
  );
};

export default Recruit;
