'use client';

import styled from 'styled-components';
import Image from 'next/image';
import exceptionClippy from '@/app/SharedComponent/asset/image/exceptionClippy.svg';

const NotFoundAll = () => {
  return (
    <Wrap>
      <Image
        src={exceptionClippy.src}
        alt="exception"
        width={300}
        height={300}
      ></Image>
      <Text>올바르지 않은 페이지입니다.</Text>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100dvh;
  justify-content: center;
`;

const Text = styled.span`
  width: fit-content;
  ${(props) => props.theme.FONT.Header.H4};
`;

export default NotFoundAll;
