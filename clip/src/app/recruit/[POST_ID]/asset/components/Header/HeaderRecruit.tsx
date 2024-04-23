import styled from 'styled-components';
import arrow from '@/app/SharedComponent/asset/image/arrow.svg';
import uninterested_black from '@/app/SharedComponent/asset/image/uninterested_black.svg';
import share from '@/app/SharedComponent/asset/image/share.svg';
import Image from 'next/image';

const HeaderRecruit = ({
  setModalState,
}: {
  setModalState: React.MouseEventHandler;
}) => {
  return (
    <>
      <Wrap>
        <Header_Inner>
          <Image src={arrow.src} alt="back" width={15} height={15} />
          <Header_title></Header_title>
          <Right_wrap>
            <Image
              src={uninterested_black.src}
              alt="uninterested"
              width={24}
              height={24}
            />
            <Image
              src={share.src}
              alt="share"
              width={24}
              height={24}
              onClick={setModalState}
            />
          </Right_wrap>
        </Header_Inner>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 0.1rem solid #d9d9d9;
`;

const Header_Inner = styled.div`
  position: relative;
  width: 91.1dvw;
  height: 5.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
