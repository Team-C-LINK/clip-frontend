import styled from 'styled-components';
import { useRouter } from 'next/navigation';

type button = {
  $size: string;
};

const PrevBtn = styled.div<button>`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.$size};
  height: 4.4rem;
  border-radius: 0.4rem;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  justify-content: center;
  align-items: center;
  /* Background/02 */
  background: #ffffff;
  /* Line/01 */
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

export default PrevBtn;
