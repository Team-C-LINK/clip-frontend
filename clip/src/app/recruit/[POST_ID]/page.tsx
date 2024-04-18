'use client';

import * as C from './asset/components/C.style';
import Header from '@/app/SharedComponent/Header/Header';
import HeaderBack from '@/app/SharedComponent/Header/HeaderBack/HeaderBack';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { Bar } from 'react-chartjs-2';
import { Chart, Tooltip, scales } from 'chart.js/auto';
import { CategoryScale } from 'chart.js/auto';
import { optionLeft, optionRight } from './asset/chart/options';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
const leftData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Left', // 왼쪽에서 시작하는 차트
      data: [1, 2, 3, 4, 5, 6],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

const rightData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Right', // 오른쪽에서 시작하는 차트
      data: [12, 12, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

Chart.register(CategoryScale);

const RecruitDetail = () => {
  const params = useParams();

  return (
    <>
      <Spacer height="5.8rem"></Spacer>
      <Header>
        <HeaderBack route={'/mypage'} text={'공고 상세'}></HeaderBack>
      </Header>
      <C.chart_wrap>
        <div style={{ width: '150px', height: '150px' }}>
          <Bar
            options={optionLeft}
            data={rightData}
            width={100}
            height={100}
          ></Bar>
        </div>
        <div style={{ width: '150px', height: '150px' }}>
          <Bar
            options={optionRight}
            data={leftData}
            width={100}
            height={100}
          ></Bar>
        </div>
      </C.chart_wrap>

      <div>안녕 난 공고 상세 페이지라고 해</div>
    </>
  );
};

export default RecruitDetail;
