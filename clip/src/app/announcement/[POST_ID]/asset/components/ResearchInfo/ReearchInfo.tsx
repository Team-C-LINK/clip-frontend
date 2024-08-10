import styled from 'styled-components';
import Title from '../Title/Title';

interface ResearcherInfoProps {
  content?: string;
  imageUrl?: string;
}

const ResearchInfo: React.FC<ResearcherInfoProps> = ({ content, imageUrl }) => {
  return (
    <>
      <Wrap>
        <Title>연구 상세 정보</Title>
        <img src={imageUrl}></img>
        <Content>{content}</Content>
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

const test = styled.img``;

export default ResearchInfo;
