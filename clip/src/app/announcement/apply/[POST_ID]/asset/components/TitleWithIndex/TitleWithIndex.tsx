import styled from 'styled-components';

const TilteWithIndex = ({ index, text }: { index: string; text: string }) => {
  return (
    <>
      <Wrap>
        <Index>{index}</Index>
        <Text>{text}</Text>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: fit-content;
  height: fit-content;
  align-items: center;
`;

const Index = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 1.6rem;
  height: 1.6rem;

  background: ${(props) => props.theme.TEXT._05};

  border-radius: 10rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B4};
  color: #ffffff;
`;

const Text = styled.span`
  width: fit-content;
  height: fit-content;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B2};
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.TEXT._01};
`;

export default TilteWithIndex;
