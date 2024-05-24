import styled from 'styled-components';

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Title_wrap>{children}</Title_wrap>
    </>
  );
};

const Title_wrap = styled.div`
  position: relative;
  width: 91.1%;
  height: fit-content;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B3};
`;

export default Title;
