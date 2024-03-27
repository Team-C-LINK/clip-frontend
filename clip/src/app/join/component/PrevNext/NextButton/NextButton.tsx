import styled from 'styled-components';

type button = {
  $size: string;
};

const NextButton = styled.div<button>`
  width: ${(props) => props.$size};
  height: 4.4rem;
  display: flex;
  flex-direction: row;
  border-radius: 0.4rem;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.4rem;
  justify-content: center;
  align-items: center;
  background: #1d2939;
  color: white;
`;

export default NextButton;
