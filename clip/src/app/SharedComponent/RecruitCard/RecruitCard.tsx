import * as C from './RecruitCard.style';
import interested from '../asset/image/interested.svg';
import uninterested from '../asset/image/uninterested.svg';
import AnnouncementType from '@/app/type/Announcment';
import GreenButton from '../Category/GreenButton';
import GrayButton from '../Category/GrayButton';
import { useEffect, useState } from 'react';
import postAddScrap from '@/app/api/post-addScrap';
import deleteEraseScrap from '@/app/api/delete-eraseScrap';

const RecruitCard = ({ info }: { info: AnnouncementType | undefined }) => {
  const [isScraped, setIsScraped] = useState<boolean>();

  const handleIsScraped = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isScraped) {
      const res = await deleteEraseScrap(info?.id);
      if (res.status === 204) setIsScraped(!isScraped);
    } else {
      const res = await postAddScrap(info?.id);
      if (res.status === 204) setIsScraped(!isScraped);
    }
  };

  useEffect(() => {
    setIsScraped(info?.isScraped);
  }, [info]);

  return (
    <C.list_content_wrap
      onClick={() => (window.location.href = `/announcement/${info?.id}`)}
    >
      <C.list_content_wrap_inner>
        <C.list_content_recruit_wrap>
          {info?.isRecruiting ? (
            <GreenButton>모집중</GreenButton>
          ) : (
            <GrayButton>마감</GrayButton>
          )}
          {info?.isRecruiting ? (
            <C.list_content_recruit_deadline>
              D-{info?.remainingDay}
            </C.list_content_recruit_deadline>
          ) : null}
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
          <C.list_content_interested
            onClick={handleIsScraped}
            src={isScraped ? interested.src : uninterested.src}
          ></C.list_content_interested>
        </C.list_content_reward_wrap>
      </C.list_content_wrap_inner>
    </C.list_content_wrap>
  );
};

export default RecruitCard;
