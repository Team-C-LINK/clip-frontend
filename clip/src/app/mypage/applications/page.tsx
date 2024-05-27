'use client';

import { useEffect, useState } from 'react';
import Header from '@/app/SharedComponent/Header/Header';
import HeaderBack from '@/app/SharedComponent/Header/HeaderBack/HeaderBack';
import * as C from './asset/component/C.style';
import Image from 'next/image';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import ApplyCard from './asset/component/ApplyCard/ApplyCard';
import RecruitListType from '@/app/type/RecruitList';

const test: RecruitListType = {
  totalCount: 22,
  announcements: [
    {
      id: 22,
      isRecruiting: true,
      remainingDay: 3,
      title: '진행중인 테스트용 공고22입니다.',
      category: '연구/인터뷰',
      researcherAffiliation: '고려대학교 심리학과',
      researcherName: '전민혁',
      address: '서울특별시 성북구 고려대 연구소',
      fee: 60000,
      isScraped: false,
    },
    {
      id: 21,
      isRecruiting: true,
      remainingDay: 3,
      title: '진행중인 테스트용 공고21입니다.',
      category: '연구/인터뷰',
      researcherAffiliation: '고려대학교 심리학과',
      researcherName: '전민혁',
      address: '서울특별시 성북구 고려대 연구소',
      fee: 60000,
      isScraped: false,
    },
    {
      id: 20,
      isRecruiting: true,
      remainingDay: 3,
      title: '진행중인 테스트용 공고20입니다.',
      category: '연구/인터뷰',
      researcherAffiliation: '고려대학교 심리학과',
      researcherName: '전민혁',
      address: '서울특별시 성북구 고려대 연구소',
      fee: 60000,
      isScraped: false,
    },
    {
      id: 19,
      isRecruiting: true,
      remainingDay: 3,
      title: '진행중인 테스트용 공고19입니다.',
      category: '연구/인터뷰',
      researcherAffiliation: '고려대학교 심리학과',
      researcherName: '전민혁',
      address: '서울특별시 성북구 고려대 연구소',
      fee: 60000,
      isScraped: false,
    },
    {
      id: 18,
      isRecruiting: true,
      remainingDay: 3,
      title: '진행중인 테스트용 공고18입니다.',
      category: '연구/인터뷰',
      researcherAffiliation: '고려대학교 심리학과',
      researcherName: '전민혁',
      address: '서울특별시 성북구 고려대 연구소',
      fee: 60000,
      isScraped: false,
    },
    {
      id: 17,
      isRecruiting: true,
      remainingDay: 3,
      title: '진행중인 테스트용 공고17입니다.',
      category: '설문조사',
      researcherAffiliation: '고려대학교 심리학과',
      researcherName: '전민혁',
      address: '서울특별시 성북구 고려대 연구소',
      fee: 60000,
      isScraped: false,
    },
    {
      id: 16,
      isRecruiting: true,
      remainingDay: 3,
      title: '진행중인 테스트용 공고16입니다.',
      category: '설문조사',
      researcherAffiliation: '고려대학교 심리학과',
      researcherName: '전민혁',
      address: '서울특별시 성북구 고려대 연구소',
      fee: 60000,
      isScraped: false,
    },
    {
      id: 15,
      isRecruiting: true,
      remainingDay: 3,
      title: '진행중인 테스트용 공고15입니다.',
      category: '설문조사',
      researcherAffiliation: '고려대학교 심리학과',
      researcherName: '전민혁',
      address: '서울특별시 성북구 고려대 연구소',
      fee: 60000,
      isScraped: false,
    },
    {
      id: 14,
      isRecruiting: true,
      remainingDay: 3,
      title: '진행중인 테스트용 공고14입니다.',
      category: '설문조사',
      researcherAffiliation: '고려대학교 심리학과',
      researcherName: '전민혁',
      address: '서울특별시 성북구 고려대 연구소',
      fee: 60000,
      isScraped: false,
    },
    {
      id: 13,
      isRecruiting: true,
      remainingDay: 3,
      title: '진행중인 테스트용 공고13입니다.',
      category: '설문조사',
      researcherAffiliation: '고려대학교 심리학과',
      researcherName: '전민혁',
      address: '서울특별시 성북구 고려대 연구소',
      fee: 60000,
      isScraped: false,
    },
  ],
};

const Applications = () => {
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
      <Spacer height="8.16rem" />
      <Header>
        <HeaderBack text={'내 지원 목록'} route={'/mypage'}></HeaderBack>
      </Header>
      <C.list_wrap>
        {test.announcements?.map((item) => {
          return <ApplyCard info={item} key={item?.id}></ApplyCard>;
        })}
      </C.list_wrap>
      <Spacer height="3.6rem" />
    </>
  );
};

export default Applications;
