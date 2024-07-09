import * as S from '@/app/admin/announcement/write/asset/components/Header/Header.style';
import clip from '../../image/clip.svg';
import Image from 'next/image';

const HeaderWrite = () => {
  return (
    <S.wrap>
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
    </S.wrap>
  );
};

export default HeaderWrite;
