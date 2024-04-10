import * as C from './RecruitCard.style';
import interested from '../asset/image/interested.svg';

const RecruitCard = () => {
  return (
    <C.list_content_wrap>
      <C.list_content_wrap_inner>
        <C.list_content_recruit_wrap>
          <C.list_content_recruit_state_done>
            마감
          </C.list_content_recruit_state_done>
          <C.list_content_recruit_deadline>
            2024.04.31 까지
          </C.list_content_recruit_deadline>
        </C.list_content_recruit_wrap>
        <C.list_content_middle_wrap>
          <C.list_content_title>
            배고픔을 느끼는지 알아보는 실험 참여자를 모집합니다.
          </C.list_content_title>
          <C.list_content_condition_wrap>
            <C.list_content_condition>
              대상 : 20~30대 남녀
            </C.list_content_condition>
            <C.list_content_condition>
              장소 : 서울시 강남구 강남대로
            </C.list_content_condition>
          </C.list_content_condition_wrap>
        </C.list_content_middle_wrap>
        <C.list_content_reward_wrap>
          <C.list_content_condition>사례비</C.list_content_condition>
          <C.list_content_reward>60,000원</C.list_content_reward>
          <C.list_content_interested
            src={interested.src}
          ></C.list_content_interested>
        </C.list_content_reward_wrap>
      </C.list_content_wrap_inner>
    </C.list_content_wrap>
  );
};

export default RecruitCard;
