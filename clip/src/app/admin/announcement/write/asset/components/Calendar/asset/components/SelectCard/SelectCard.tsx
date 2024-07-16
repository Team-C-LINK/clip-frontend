import * as S from './SelectCard.style';
import Image from 'next/image';
import plus_black from '@/app/admin/announcement/write/asset/components/Calendar/asset/image/plus_black.svg';
import minus_gray from '@/app/admin/announcement/write/asset/components/Calendar/asset/image/minus.gray.svg';
const SelectCard = () => {
  return (
    <S.wrap>
      <S.row>
        <strong>4월 8일</strong>&nbsp;(목요일 오전 10시)
      </S.row>
      <S.row>
        <S.counter>
          <Image
            src={minus_gray.src}
            alt="minus_gray"
            width={24}
            height={24}
          ></Image>
          1명
          <Image
            src={plus_black.src}
            alt="plus_black"
            width={24}
            height={24}
          ></Image>
        </S.counter>
      </S.row>
    </S.wrap>
  );
};

export default SelectCard;
