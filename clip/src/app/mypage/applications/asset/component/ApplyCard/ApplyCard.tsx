import * as C from './ApplyCard.style';
import AnnouncementType from '@/app/type/Announcment';
import BlueButton from '@/app/SharedComponent/Category/BlueButton';
import kebabMenu from '../../image/kebabMenu.svg';
import { useState } from 'react';
import NoticeModal from '../NoticeModal/NoticeModal';

const ApplyCard = ({ info }: { info: AnnouncementType | undefined }) => {
  const [isNoticeModalOn, setIsNoticeModalOn] = useState<boolean>(false);

  const handleCard = () => {
    setIsNoticeModalOn(true);
  };

  return (
    <>
      <C.card_wrap onClick={handleCard}>
        <C.apply_date>2024년 4월 7일 일요일 지원 완료</C.apply_date>
        <C.list_content_wrap>
          <C.list_content_wrap_inner>
            <C.list_content_recruit_wrap>
              <BlueButton>지원완료</BlueButton>
              {info?.isRecruiting ? (
                <C.list_content_recruit_deadline>
                  D-{info?.remainingDay}
                </C.list_content_recruit_deadline>
              ) : null}
              <C.kebab_menu src={kebabMenu.src}></C.kebab_menu>
            </C.list_content_recruit_wrap>
            <C.list_content_middle_wrap>
              <C.list_content_title>{info?.title}</C.list_content_title>
              <C.list_content_condition_wrap>
                <C.list_content_condition>
                  <C.list_content_category>
                    {info?.category}&nbsp;
                  </C.list_content_category>
                  {`| ${info?.researcherAffiliation} | ${info?.researcherName} 교수`}
                </C.list_content_condition>
                <C.list_content_condition>
                  {`장소 | ${info?.address}`}
                </C.list_content_condition>
              </C.list_content_condition_wrap>
            </C.list_content_middle_wrap>
            <C.list_content_reward_wrap>
              <C.list_content_condition>사례비</C.list_content_condition>
              <C.list_content_reward>{`${info?.fee?.toLocaleString(
                'ko-KR'
              )}원`}</C.list_content_reward>
            </C.list_content_reward_wrap>
          </C.list_content_wrap_inner>
        </C.list_content_wrap>
      </C.card_wrap>
      {isNoticeModalOn && (
        <NoticeModal setModalState={setIsNoticeModalOn}></NoticeModal>
      )}
    </>
  );
};

export default ApplyCard;
