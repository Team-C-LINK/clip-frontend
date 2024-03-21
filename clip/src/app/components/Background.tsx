import styled from 'styled-components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Background>{children}</Background>
    </>
  );
};

const Background = styled.div`
  position: absolute;
  width: 36rem;
  height: fit-content;
  left: 50%;
  transform: translateX(-50%);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Layout;
