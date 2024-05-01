import styled from 'styled-components';
import copy from '@/app/SharedComponent/asset/image/copy.svg';
import cancel from '@/app/SharedComponent/asset/image/cancel.svg';
import Image from 'next/image';
import { useRef } from 'react';

const ModalShared = ({
  setModalState,
}: {
  setModalState: React.MouseEventHandler;
}) => {
  const linkRef = useRef<HTMLElement>(null);

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(linkRef.current?.innerHTML as string);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Wrap onClick={setModalState}></Wrap>
      <Modal_Wrap>
        <Title>
          공유하기
          <Cancel src={cancel.src} onClick={setModalState}></Cancel>
        </Title>
        <Content>
          연구와 어울리는 사람에게 공유해보세요, 지원자 선발 시 포인트를
          지급해드립니다!
        </Content>
        <Link_wrap>
          <Link_text ref={linkRef}>
            http://clink.kr/share_page/linkresearcher/zzzzzzzzzzzzzzz
          </Link_text>
          <Image
            src={copy.src}
            alt="copy"
            width={24}
            height={24}
            onClick={handleCopyClipBoard}
          />
        </Link_wrap>
      </Modal_Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const Modal_Wrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1.6rem;
  justify-content: center;
  gap: 2.4rem;
  width: 29.2rem;
  height: 20.8rem;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  background: ${(props) => props.theme.BACKGROUND._01};
  border-radius: 0.8rem;
  z-index: 3;
`;

const Title = styled.span`
  position: relative;
  width: 91.1%;
  height: fit-content;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B1};
  /* identical to box height, or 156% */
  text-align: center;

  color: ${(props) => props.theme.TEXT._01};
`;

const Content = styled.span`
  width: 25.6rem;
  height: 4.8rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B2};
  display: flex;
  align-items: center;
  text-align: center;

  color: ${(props) => props.theme.TEXT._01};
`;

const Link_wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1.6rem;
  gap: 1.2rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B2};

  width: 26rem;
  height: 4.4rem;

  background: ${(props) => props.theme.BACKGROUND._DISABLE};
  border-radius: 0.4rem;
`;

const Link_text = styled.span`
  position: relative;
  width: 17.4rem;
  display: block;
  height: fit-content;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Cancel = styled.img`
  position: absolute;
  right: 0rem;
  width: fit-content;
  height: fit-content;
  background: url(${(props) => props.src});
`;

export default ModalShared;
