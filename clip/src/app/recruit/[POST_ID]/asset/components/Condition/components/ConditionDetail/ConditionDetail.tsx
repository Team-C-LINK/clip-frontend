import styled from 'styled-components';

const ConditionDetail = ({ list }: { list: string[] | undefined }) => {
  return (
    <>
      <Wrap>
        <Inner>
          {list?.map((val, idx) => {
            return <StyledListItem key={idx}>{val}</StyledListItem>;
          })}
        </Inner>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  width: 100%;
  flex-direction: row;
  height: fit-content;
  background: ${(props) => props.theme.BACKGROUND._01};
  border-radius: 0.2rem;
  justify-content: start;
`;

const Inner = styled.ul`
  position: relative;
  left: 2rem;
  display: flex;
  flex-direction: column;
  padding: 0rem 0.8rem;
  gap: 1rem;
  width: fit-content;
  height: fit-content;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B4};
  letter-spacing: 0.03em;
  color: ${(props) => props.theme.TEXT._02};
`;

const StyledListItem = styled.li`
  list-style-position: outside;
`;

export default ConditionDetail;
