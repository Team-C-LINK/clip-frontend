import styled from 'styled-components';
import ConditionInner from './ConditionInner/ConditionInner';

type ConditionType = {
  index: string;
  content: string | undefined;
};

const Condition_wrap = ({ list }: { list: ConditionType[] | undefined }) => {
  return (
    <>
      <Wrapper>
        {list?.map((val, idx) => {
          return (
            <ConditionInner
              index={val.index}
              content={val.content}
              key={idx}
            ></ConditionInner>
          );
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
`;

export default Condition_wrap;
