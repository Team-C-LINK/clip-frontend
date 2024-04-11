'use client';

import { useEffect, useState } from 'react';
import Header from '@/app/SharedComponent/Header/Header';
import RecruitCard from '@/app/SharedComponent/RecruitCard/RecruitCard';
import * as C from './component/C.style';
import checkedbox from './asset/checkedBox.svg';
import uncheckedbox from './asset/uncheckedBox.svg';
import Image from 'next/image';

const Interest = () => {
  const [filterState, setFilterState] = useState<string>('신청 완료');
  const [isRecruiting, setIsRecruiting] = useState<boolean>(false);

  const handleFilterState = (e: any) => {
    const target = e.target.innerHTML;
    setFilterState(target);
  };

  const handleIsRecruiting = () => {
    if (isRecruiting) setIsRecruiting(false);
    else setIsRecruiting(true);
  };

  useEffect(() => {
    // 필터 상태가 바뀌었을 떄 리스트 갱신 로직 들어가야함
  }, [filterState]);

  useEffect(() => {
    // 모집 중 상태가 변경 되었을 때 리스트 갱신 로직
  }, [isRecruiting]);

  return (
    <>
      <Header text={'내 관심 목록'} route={'/mypage'}></Header>
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
      <C.view_wrap>
        <RecruitCard></RecruitCard>
      </C.view_wrap>
    </>
  );
};

export default Interest;
