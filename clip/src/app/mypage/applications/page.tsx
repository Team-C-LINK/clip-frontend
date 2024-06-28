'use client';

import { useEffect, useState } from 'react';
import Header from '@/app/SharedComponent/Header/Header';
import HeaderBack from '@/app/SharedComponent/Header/HeaderBack/HeaderBack';
import * as C from './asset/component/C.style';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import ApplyCard from './asset/component/ApplyCard/ApplyCard';
import useInfinityScroll from '@/app/utils/hook/useInfinityScroll';
import getAppliedList from '@/app/api/get-applyList';

const Applications = () => {
  const [filterState, setFilterState] = useState<string>('신청 완료');
  const [isRecruiting, setIsRecruiting] = useState<boolean>(false);
  const [isNoticeModalOn, setIsNoticeModalOn] = useState<boolean>(false);
  const { observerTarget, recruitList } = useInfinityScroll(getAppliedList);

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
      <Spacer height="8.16rem" />
      <Header>
        <HeaderBack text={'내 지원 목록'} route={'/mypage'}></HeaderBack>
      </Header>
      <C.list_wrap>
        {recruitList?.map((item) => {
          return <ApplyCard info={item} key={item?.id}></ApplyCard>;
        })}
      </C.list_wrap>
      <div ref={observerTarget}></div>
      <Spacer height="3.6rem" />
    </>
  );
};

export default Applications;
