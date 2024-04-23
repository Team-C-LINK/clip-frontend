import styled from 'styled-components';

const ConditionInner = ({
  index,
  content,
}: {
  index: string;
  content: string;
}) => {
  return (
    <>
      <Condition_wrap>
        <Index>{index}</Index>
        <Content>{content}</Content>
      </Condition_wrap>
    </>
  );
};

const Condition_wrap = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 2.9rem;
`;

const Index = styled.span`
  position: relative;
  width: 5.7rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B4};
  color: ${(props) => props.theme.TEXT._02};
`;

const Content = styled.span`
  position: relative;
  width: fit-content;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B4};
  color: ${(props) => props.theme.TEXT._01};
`;

export default ConditionInner;
