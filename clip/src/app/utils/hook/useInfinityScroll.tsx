import api from '@/app/api/api';
import getRecruitList from '@/app/api/get-recruitList';
import AnnouncementType from '@/app/type/Announcment';
import { useEffect, useRef, useState } from 'react';

const DEFAULT_PAGE_SIZE = 10;

const useInfinityScroll = (getList: any) => {
  const observerTarget = useRef<any>(null);
  const [recruitList, setRecruitList] = useState<AnnouncementType[]>([]);
  const [listPointer, setListPointer] = useState<number>(0);
  const [firstCheck, setFirstCheck] = useState<boolean>(true);

  const init = async () => {
    const res = await getList();
    setRecruitList(res?.announcements);
    setListPointer(res?.totalCount - DEFAULT_PAGE_SIZE);
    setFirstCheck(false);
  };

  const updateList = async () => {
    const res = await getList(listPointer);
    setRecruitList((prev) => [...prev, ...res?.announcements]);
    const nextListPointer = listPointer - DEFAULT_PAGE_SIZE;
    nextListPointer <= 0 ? setListPointer(0) : setListPointer(nextListPointer);
  };

  const handleObserver = async (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      if (firstCheck) init();
      else {
        if (!listPointer) return;
        else updateList();
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0,
    });

    observer.observe(observerTarget.current);

    return () => observer.disconnect();
  }, [firstCheck, listPointer]);

  return { observerTarget, recruitList };
};

export default useInfinityScroll;
