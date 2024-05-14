'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

const Recommend_Redirect = () => {
  const params = useParams();

  useEffect(() => {
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_HOST}/${params.RECOMMEND_CODE}`;
  }, []);

  return <></>;
};

export default Recommend_Redirect;
