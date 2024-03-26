'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

type sido = {
  code: string;
  name: string;
};

const useGetSidoAddress = () => {
  const [sidoList, setSidoList] = useState<sido[]>([]);

  const query = useQuery<sido[]>({
    queryKey: ['getSido'],
    queryFn: async () => {
      const res = await axios
        .get(
          'https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000'
        )
        .then((response) => {
          return response.data;
        })
        .catch((e) => alert('에러'));
      setSidoList([...res.regcodes]);
      return res;
    },
  });

  return { ...query, sidoList, setSidoList };
};

export default useGetSidoAddress;
