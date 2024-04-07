'use client';

import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import api from '@/app/api/api';
import { useEffect } from 'react';

const Oauth = () => {
  const params = useParams();
  const pathname = useSearchParams();

  const { data } = useQuery({
    queryKey: ['use'],
    queryFn: async () => {
      const res = await api(
        `/oauth/${params.service}/member?code=${pathname.get('code')}`
      );

      if (!res.data.isMember) {
        window.location.href = `http://localhost:3000/join/agreement`;
        const { isMember, ...other } = res.data;
        localStorage.setItem(
          'signInfo',
          JSON.stringify(res.data.oauthMemberInformation)
        );
      } else {
        const oauthId = res.data.oauthMemberInformation.oauthId;
        const test = await api(
          `/oauth/${params.service}/login?oauthId=${oauthId}`
        );
        console.log(test.data);
      }

      return res.data;
    },
  });

  return (
    <>
      {params.service}
      {pathname.get('code')}
    </>
  );
};

export default Oauth;
