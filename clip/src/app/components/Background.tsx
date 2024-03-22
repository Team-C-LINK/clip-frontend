'use client';

import styled from 'styled-components';
import { useVh } from '../utils/useVh';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const vh = useVh();

  return (
    <>
      <Background value={vh}>{children}</Background>
    </>
  );
};

const Background = styled.body`
  position: relative;
  width: 100dvw;
  height: ${(props) => 100 * props.value}px;
  font-size: 62.5%;
  line-height: 1.285;
`;

export default Layout;
