import * as C from '../HeaderAdmin/HeaderAdmin.style';
import clip from '../../asset/image/clip.svg';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import down_arrow from '../../asset/image/down_arrow.svg';

const HeaderAdmin = ({ state }: { state: string }) => {
  return (
    <C.wrap>
      <Image
        src={clip.src}
        alt="clip"
        width={71}
        height={29}
        style={{
          position: 'relative',
          left: '3.5rem',
        }}
      ></Image>
      <C.profile_wrap>
        <C.profile_name>
          <strong>관리자 001 </strong>님
        </C.profile_name>
        <Image src={down_arrow} alt="down_arrow" width={16} height={16}></Image>
      </C.profile_wrap>
    </C.wrap>
  );
};

export default HeaderAdmin;
