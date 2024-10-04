'use client';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import arrow from '@/app/SharedComponent/asset/image/arrow.svg';
import uninterested_black from '@/app/SharedComponent/asset/image/uninterested_black.svg';
import interested from '@/app/SharedComponent/asset/image/interested.svg';
import share from '@/app/SharedComponent/asset/image/share.svg';
import Image from 'next/image';
import deleteEraseScrap from '@/app/api/delete-eraseScrap';
import postAddScrap from '@/app/api/post-addScrap';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import getTargetRecruitInfo from '@/app/api/get-targetRecruitInfo';
import PostType from '@/app/type/PostType';
import ModalShared from '../ModalShare/ModalShare';

interface HeaderRecruitProps {
  title?: string;
  setModalState?: React.MouseEventHandler;
  isScraped?: boolean;
}

const HeaderRecruit: React.FC<HeaderRecruitProps> = () => {
  const param = useParams();
  const { data: info, isLoading } = useQuery<PostType>({
    queryKey: ['post', param.POST_ID],
    queryFn: getTargetRecruitInfo,
  });

  const [modalState, setModalState] = useState(false);

  const setShareModalState = () => {
    setModalState(!modalState);
  };

  const [scraped, setIsScraped] = useState<boolean>();
  const handleIsScraped = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scraped) {
      const res = await deleteEraseScrap(parseInt(param.POST_ID as string));
      if (res.status === 204) setIsScraped(!scraped);
    } else {
      const res = await postAddScrap(parseInt(param.POST_ID as string));
      if (res.status === 204) setIsScraped(!scraped);
    }
  };

  useEffect(() => {
    setIsScraped(info?.isScraped);
  }, [info?.isScraped]);

  return (
    <>
      <Wrap>
        <Header_Inner>
          <Image
            src={arrow.src}
            alt="back"
            width={15}
            height={15}
            onClick={() => (window.location.href = '/announcement')}
          />
          {info?.title}
          <Right_wrap>
            {/* <Image
              src={scraped ? interested.src : uninterested_black.src}
              alt="uninterested"
              width={22}
              height={22}
              onClick={handleIsScraped}
            />
            <Image
              src={share.src}
              alt="share"
              width={24}
              height={24}
              onClick={setModalState}
            /> */}
          </Right_wrap>
        </Header_Inner>
        {modalState && (
          <ModalShared setModalState={setShareModalState}></ModalShared>
        )}
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
  width: 91.1%;
  height: 5.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Header.H4};
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
