'use client';

import styled from 'styled-components';
import { useVh } from '../utils/useVh';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const vh = useVh();

  return (
    <>
      <Background>{children}</Background>
    </>
  );
};

const Background = styled.body`
  position: relative;
  width: 100dvw;
  height: 100dvh;
  font-size: 62.5%;
  line-height: 1.285;
`;

export default Layout;
