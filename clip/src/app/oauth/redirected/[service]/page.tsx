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
        window.location.href = `http://localhost:3000/join/agreement`;
        const { isMember, ...other } = res.data;
        const gen = res.data.oauthMemberInformation['gender'];
        res.data.oauthMemberInformation['gender'] = GENDER[gen];
        localStorage.setItem(
          'signInfo',
          JSON.stringify(res.data.oauthMemberInformation)
        );
      } else {
        const oauthId = res.data.oauthMemberInformation.oauthId;
        const accesstoken = await api(
          `/oauth/${params.service}/login?oauthId=${oauthId}`
        ).then((res) => res.data.accessToken);
        setJwtState(accesstoken);
        router.push('/mypage');
      }

      return res.data;
    },
  });

  return (
    <>
      <div>ㅎㅇ요 토큰임</div>
      {jwt}
    </>
  );
};

export default Oauth;
