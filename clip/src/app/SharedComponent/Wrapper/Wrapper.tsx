'use client';

import { Wrap } from './Wrapper.style';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import GlobalStyle from '@/app/globalstyle';
import { ModalState } from '@/app/admin/announcement/write/asset/Atoms/ModalState';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [announcementWriteModalState, setAnnouncementWriteModalState] =
    useRecoilState(ModalState);

  const handleModalState = (e: React.MouseEvent<HTMLDivElement>) => {
    for (const key in announcementWriteModalState) {
      setAnnouncementWriteModalState((prev) => ({ ...prev, [key]: false }));
    }
  };

  useEffect(() => {
    const _isMobile = /Mobi/i.test(window.navigator.userAgent);
    setIsMobile(true);
  }, []);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Wrap onClick={handleModalState}>
          <GlobalStyle $isMobile={isMobile} />
          {children}
        </Wrap>
      )}
    </>
  );
};

export default Wrapper;
