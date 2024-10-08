import styled from 'styled-components';
import copy from '@/app/SharedComponent/asset/image/copy.svg';
import cancel from '@/app/SharedComponent/asset/image/cancel.svg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import api from '@/app/api/api';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

const ModalShared = ({
  setModalState,
}: {
  setModalState: React.MouseEventHandler;
}) => {
  const linkRef = useRef<HTMLElement>(null);
  const param = useParams();
  const [link, setLink] = useState<string>('');

  // const getLink = async () => {
  //   const res = await api.post(`/announcements/${param.POST_ID}/share-link`);
  //   const link = await res.data;
  //   return link;
  // };

  // const { data } = useQuery({ queryKey: ['test'], queryFn: getLink });

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
        <Link_wrap>
          {/* <Link_text ref={linkRef}>http://localhost:3000/{data}</Link_text> */}
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
  position: fixed;
  width: 100%;
  height: 100dvh;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 3;
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
  height: 13.6rem;
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
