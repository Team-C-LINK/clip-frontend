'use client';

import styled from 'styled-components';

const _TEST = styled.div`
  position: fixed;
  top: 0rem;
  display: flex;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 2;
  background-color: #ffffff;
`;

const Header = ({ children }: { children: React.ReactNode }) => {
  return <_TEST>{children}</_TEST>;
};

export default Header;
