'use client';

import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import api from '@/app/api/api';
import { jwtState } from '@/app/Atoms/jwtAtom';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

type gender = {
  [key: string]: string;
  male: string;
  female: string;
};

const GENDER: gender = {
  male: '남성',
  female: '여성',
};

const Oauth = () => {
  const params = useParams();
  const pathname = useSearchParams();
  const [jwt, setJwtState] = useRecoilState(jwtState);
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ['use'],
    queryFn: async () => {
      const res = await api(
        `/oauth/${params.service}/member?code=${pathname.get('code')}`
      );

      if (!res.data.isMember) {
        window.location.href = `/join/agreement`;
        const { isMember, ...other } = res.data;
        const gen = res.data.oauthMemberInformation['gender'];
        res.data.oauthMemberInformation['gender'] = GENDER[gen];
        localStorage.setItem(
          'signInfo',
          JSON.stringify(res.data.oauthMemberInformation)
        );
      } else {
        const oauthId = res.data.oauthMemberInformation.oauthId;
        const loginData = await api(
          `/oauth/${params.service}/login?oauthId=${oauthId}`
        ).then((res) => res.data);
        setJwtState(loginData.accessToken);
        localStorage.setItem('id', loginData.id);
        localStorage.setItem('accessToken', loginData.accessToken);
        router.push('/mypage');
      }

      return res.data;
    },
  });

  return <></>;
};

export default Oauth;
