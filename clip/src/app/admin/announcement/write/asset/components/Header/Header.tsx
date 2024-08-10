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
} from '../../Atoms/announcementInfoState';
import { imageFileState } from '../../Atoms/imageFileState';
import { useSearchParams } from 'next/navigation';
import { selectedResearcherState } from '../../Atoms/jwtAtom';
import postAnnouncement from '@/app/api/admin/post-announcement';

const HeaderWrite = () => {
  const queryParam = useSearchParams();
  const [announceInfo, setAnnouncementInfo] = useRecoilState(announceInfoState);
  const [imageFiles, setImageFiles] = useRecoilState(imageFileState);
  const [selectedResearcher, setSelectedResearcher] = useRecoilState(
    selectedResearcherState
  );
  const handleSubmit = async () => {
    const imageFileUrl = await uploadS3Multiple(imageFiles);

    const info: AnnouncementInfoType = JSON.parse(JSON.stringify(announceInfo));

    info.image = imageFileUrl[0] as string;

    info.type = queryParam.get('type') as string;

    info.researcherId = selectedResearcher.id;

    const res = await postAnnouncement(info);

    if (res?.status === 200) {
      alert('공고가 등록되었습니다.');
      window.location.href = '/admin/announcement/all';
    }
  };

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
          <S.detail_category>
            {queryParam.get('type') as string} 등록
          </S.detail_category>
        </S.category_wrap>
        <S.button_wrap>
          <S.cancel
            onClick={() => (window.location.href = '/admin/announcement/all')}
          >
            취소하기
          </S.cancel>
          <S.sumbit onClick={handleSubmit}>완료하기</S.sumbit>
        </S.button_wrap>
      </S.wrap_inner>
    </S.wrap>
  );
};

export default HeaderWrite;
