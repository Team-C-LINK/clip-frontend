import * as S from '@/app/admin/announcement/write/asset/components/Header/Header.style';
import clip from '../../image/clip.svg';
import calendarImage from '@/app/admin/announcement/write/asset/image/calendar_check_gray.svg';
import arrow_right from '@/app/admin/announcement/write/asset/image/arrow_right.svg';
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
          position: 'absolute',
          left: '3.5rem',
        }}
      ></Image>
      <S.wrap_inner>
        <S.category_wrap>
          <S.category>
            <Image
              src={calendarImage.src}
              alt="calendar"
              width={18}
              height={18}
            ></Image>
            <span>전체 공고 관리</span>
          </S.category>
          <Image
            src={arrow_right.src}
            alt="arrow_right"
            width={15}
            height={15}
          ></Image>
          <S.detail_category>연구/인터뷰 등록</S.detail_category>
        </S.category_wrap>
        <S.button_wrap>
          <S.cancel>취소하기</S.cancel>
          <S.sumbit>완료하기</S.sumbit>
        </S.button_wrap>
      </S.wrap_inner>
    </S.wrap>
  );
};

export default HeaderWrite;
