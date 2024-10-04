'use client';

import styled from 'styled-components';
import Title from '../Title/Title';
import Image from 'next/image';
import PostType from '@/app/type/PostType';

interface ResearcherInfoProps {
  info?: PostType;
}

const ResearchInfo: React.FC<ResearcherInfoProps> = ({ info }) => {
  return (
    <>
      <Wrap>
        <Title>연구 상세 정보</Title>
        <Content>{info?.content}</Content>
        {info?.image && (
          <Image
            src={info?.image}
            alt="announcementImage"
            width={500}
            height={500}
            style={{
              height: '100%',
              width: '100%',
            }}
            priority
          ></Image>
        )}
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  height: fit-content;
`;

const Image_Container = styled.div`
  position: relative;
  height: 400px;
  width: 350;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  white-space: pre-wrap;
  height: fit-content;
  font-family: 'Pretendard';

  ${(props) => props.theme.FONT.Regular.B3};
  color: ${(props) => props.theme.TEXT._01};
`;

const test = styled.img``;

export default ResearchInfo;
