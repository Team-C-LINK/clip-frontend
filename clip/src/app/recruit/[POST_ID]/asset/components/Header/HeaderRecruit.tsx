import styled from 'styled-components';
import arrow from '@/app/SharedComponent/asset/image/arrow.svg';
import uninterested_black from '@/app/SharedComponent/asset/image/uninterested_black.svg';
import share from '@/app/SharedComponent/asset/image/share.svg';

const HeaderRecruit = ({
  setModalState,
}: {
  setModalState: React.MouseEventHandler;
}) => {
  return (
    <>
      <Wrap>
        <img src={arrow.src}></img>
        <Header_title></Header_title>
        <Right_wrap>
          <img src={uninterested_black.src}></img>
          <img src={share.src} onClick={setModalState}></img>
        </Right_wrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 91.1dvw;
  height: 5.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  /* Line/01 */
  border-bottom: 0.1rem solid #d9d9d9;
  z-index: 1;
`;

const Header_title = styled.span`
  position: relative;
  width: fit-content;
  height: fit-content;

  /* Semi Bold/B1 */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.8rem;
  /* identical to box height, or 156% */

  /* Text/01 */
  color: #252525;
`;

const Right_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  widht: fit-content;
  height: fit-content;
  align-items: center;
  gap: 1.5rem;
`;

export default HeaderRecruit;
