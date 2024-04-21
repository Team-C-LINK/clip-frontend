'use client';

import React, { useEffect, useState } from 'react';
import NavigationBar from '../SharedComponent/NavigationBar/NaivgationBar';
import RecruitCard from '../SharedComponent/RecruitCard/RecruitCard';
import * as C from './asset/components/C.style';
import checkedbox from './asset/image/checkedBox.svg';
import uncheckedbox from './asset/image/uncheckedBox.svg';
import check from './asset/image/check.svg';
import Image from 'next/image';
import Spacer from '../SharedComponent/Spacer/Spacer';
import Header from '../SharedComponent/Header/Header';
import HeaderBack from '../SharedComponent/Header/HeaderBack/HeaderBack';

const Recruit = () => {
  const [isRecruiting, setIsRecruiting] = useState<boolean>(false);
  const [filterState, setFilterState] = useState<string>('전체 공고');

  const handleIsRecruiting = () => {
    if (isRecruiting) setIsRecruiting(false);
    else setIsRecruiting(true);
  };

  const handleFilter = (e: any) => {
    setFilterState(e.currentTarget.id);
  };

  useEffect(() => {
    // 모집 중 상태가 변경 되었을 때 리스트 갱신 로직
  }, [isRecruiting]);

  const filterList = ['전체 공고', '📝연구/인터뷰', '📊설문조사', '💬기타'];

  return (
    <>
      <Spacer height="16rem"></Spacer>
      <Header>
        <HeaderBack route={'/login'} text={'실시간 모집공고'}></HeaderBack>
        <C.header>
          <C.header_inner_wrap>
            {filterList.map((val, idx) => {
              return (
                <React.Fragment key={idx}>
                  {filterState === val ? (
                    <C.header_content_selected key={idx}>
                      <Image
                        src={check.src}
                        alt="check"
                        width={16}
                        height={16}
                      ></Image>
                      <C.header_content_text>
                        <C.test>{val}</C.test>
                      </C.header_content_text>
                    </C.header_content_selected>
                  ) : (
                    <C.header_content_unselected
                      id={val}
                      onClick={handleFilter}
                    >
                      <C.header_content_text>
                        <C.test2>{val}</C.test2>
                      </C.header_content_text>
                    </C.header_content_unselected>
                  )}
                </React.Fragment>
              );
            })}
          </C.header_inner_wrap>
        </C.header>
        <C.filter_wrap>
          <C.filter_inner>
            <C.filter_recruiting_wrap>
              {isRecruiting ? (
                <Image
                  src={checkedbox.src}
                  alt="checkedbox"
                  width={24}
                  height={24}
                  onClick={handleIsRecruiting}
                ></Image>
              ) : (
                <Image
                  src={uncheckedbox.src}
                  alt="uncheckedbox"
                  width={24}
                  height={24}
                  onClick={handleIsRecruiting}
                ></Image>
              )}
              <C.filter_recruiting_text>모집중</C.filter_recruiting_text>
            </C.filter_recruiting_wrap>
          </C.filter_inner>
        </C.filter_wrap>
      </Header>
      <RecruitCard></RecruitCard>
      <RecruitCard></RecruitCard>
      <RecruitCard></RecruitCard>
      <RecruitCard></RecruitCard>
      <RecruitCard></RecruitCard>
      <RecruitCard></RecruitCard>
      <Spacer height="8rem"></Spacer>
      <NavigationBar state={'recruit'}></NavigationBar>
    </>
  );
};

export default Recruit;
