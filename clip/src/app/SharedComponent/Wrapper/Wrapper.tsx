'use client';

import { Wrap } from './Wrapper.style';
import { useEffect, useState } from 'react';
import GlobalStyle from '@/app/globalstyle';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
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
        <Wrap>
          <GlobalStyle $isMobile={isMobile} />
          {children}
        </Wrap>
      )}
    </>
  );
};

export default Wrapper;
