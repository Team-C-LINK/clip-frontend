import getRecruitList from '@/app/api/get-recruitList';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import RecruitListType from '@/app/type/RecruitList';

const useGetRecruitList = (recruitingStatus: boolean, size: number) => {
  const [recruitList, setRecruitList] = useState<RecruitListType>();

  const queryFunction = async (param1: boolean, param2: number) => {
    await getRecruitList(param1, param2).then((res) => {
      setRecruitList(res);
    });
  };

  useEffect(() => {
    queryFunction(recruitingStatus, size);
  }, [recruitingStatus, size]);

  return { recruitList, setRecruitList };
};

export default useGetRecruitList;
