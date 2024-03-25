import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <div>footer 입니다.</div>
      <Test>테스트</Test>
    </>
  );
};

const Test = styled.div`
  height: 2rem;
  width: 10rem;
  background-color: blue;
`;

export default Footer;
