import styled from 'styled-components';
import Title from '../Title/Title';

const ResearchInfo = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Wrap>
        <Title>연구 상세 정보</Title>
        <Content>{children}</Content>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  height: fit-content;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  white-space: pre-wrap;
  height: fit-content;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  color: ${(props) => props.theme.TEXT._01};
`;

export default ResearchInfo;
