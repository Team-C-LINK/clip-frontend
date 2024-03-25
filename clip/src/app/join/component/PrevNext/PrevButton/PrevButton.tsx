import styled from 'styled-components';

const PrevBtn = styled.div`
  display: flex;
  flex-direction: row;
  width: 43dvw;
  height: 4.4rem;
  border-radius: 0.4rem;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.4rem;
  justify-content: center;
  align-items: center;
  /* Background/02 */
  background: #ffffff;
  /* Line/01 */
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

const PrevButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PrevBtn>{children}</PrevBtn>
    </>
  );
};

export default PrevButton;
