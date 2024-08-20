import * as S from '@/app/admin/announcement/write/asset/components/Header/Header.style';
import clip from '../../image/clip.svg';
import calendarImage from '@/app/admin/announcement/write/asset/image/calendar_check_gray.svg';
import arrow_right from '@/app/admin/announcement/write/asset/image/arrow_right.svg';
import Image from 'next/image';
import { uploadS3Multiple } from '@/app/utils/uploadS3Multiple';
import { useRecoilState } from 'recoil';
import {
  announceInfoState,
  AnnouncementInfoType,
} from '@/app/Atoms/announcementInfoState';
import { imageFileState } from '@/app/Atoms/imageFileState';
import { useSearchParams } from 'next/navigation';
import { selectedResearcherState } from '@/app/Atoms/selectedResearcherState';
import postAnnouncement from '@/app/api/admin/post-announcement';

const HeaderManage = () => {
  const queryParam = useSearchParams();

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
          <S.detail_category>공고 상세</S.detail_category>
        </S.category_wrap>
      </S.wrap_inner>
    </S.wrap>
  );
};

export default HeaderManage;
