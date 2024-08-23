'use client';

import RecruitDetail from '@/app/announcement/[POST_ID]/page';
import HeaderManage from './asset/components/Header/Header';
import * as S from './page.style';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import Calendar from './asset/components/Calendar/Calendar';
import Table from './asset/components/Table/Table';

const Dummy1 = [
  { gender: '남성', age: '20대', total: 5, recruited: 3 },
  { gender: '남성', age: '20대', total: 5, recruited: 3 },
  { gender: '남성', age: '20대', total: 5, recruited: 3 },
  { gender: '남성', age: '20대', total: 5, recruited: 3 },
  { gender: '남성', age: '20대', total: 5, recruited: 3 },
];

const Page = () => {
  return (
    <>
      <HeaderManage></HeaderManage>
      <Spacer height="10rem"></Spacer>
      <S.wrap>
        <S.category_selected>지원자 목록</S.category_selected>
        <S.middle_wrap>
          <Calendar startDate={20240822} endDate={20240830}></Calendar>
          <Table info={Dummy1}></Table>
        </S.middle_wrap>
      </S.wrap>
    </>
  );
};

export default Page;
