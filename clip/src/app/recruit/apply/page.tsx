'use client';

import Header from '@/app/SharedComponent/Header/Header';
import HeaderCancel from '@/app/SharedComponent/Header/HeaderCancel/HeaderCancel';

const Apply = () => {
  return (
    <>
      <Header>
        <HeaderCancel route={'/recruit'} text=""></HeaderCancel>
      </Header>
    </>
  );
};

export default Apply;
