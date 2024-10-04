'use client';

import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import Footer from '@/app/SharedComponent/Footer/Footer';
import PrevNext from '@/app/join/component/PrevNext/PrevNext';
import NextButtonGray from '@/app/SharedComponent/NextButton/NextButtonGray';

const Tes = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Spacer height="7rem"></Spacer>
      <Spacer height="8rem" />
      <Footer>
        <PrevNext>
          <NextButtonGray $size={'90dvw'}>마감된 공고입니다.</NextButtonGray>
        </PrevNext>
      </Footer>
      {children}
    </>
  );
};

export default Tes;
