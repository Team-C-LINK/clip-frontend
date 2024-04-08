'use client';

import { useEffect, useState } from 'react';
import Layout from '@/app/SharedComponent/Background';
import Header from '@/app/SharedComponent/Header/Header';
import * as C from './component/C.style';
import checkedbox from './asset/checkedBox.svg';
import uncheckedbox from './asset/uncheckedBox.svg';
import interested from './asset/interested.svg';
import uninterested from './asset/uninterested.svg';
import Image from 'next/image';

const Applications = () => {
  const [filterState, setFilterState] = useState<string>('신청 완료');
  const [isRecruiting, setIsRecruiting] = useState<boolean>(false);

  const handleFilterState = (e: any) => {
    const target = e.target.innerHTML;
    setFilterState(target);
  };

  const handleIsRecruiting = () => {
    if (isRecruiting) setIsRecruiting(false);
    else setIsRecruiting(true);
  };

  useEffect(() => {
    // 필터 상태가 바뀌었을 떄 리스트 갱신 로직 들어가야함
  }, [filterState]);

  useEffect(() => {
    // 모집 중 상태가 변경 되었을 때 리스트 갱신 로직
  }, [isRecruiting]);

  return (
    <>
      <Layout>
        <C.wrap>
          <Header text={'내 지원목록'}></Header>
          <C.filter_wrap>
            <C.filter_inner>
              <C.filter_status_wrap>
                {filterState === '신청 완료' ? (
                  <C.filter_text_selected>신청 완료</C.filter_text_selected>
                ) : (
                  <C.filter_text_unselected onClick={handleFilterState}>
                    신청 완료
                  </C.filter_text_unselected>
                )}
                {filterState === '신청 취소' ? (
                  <C.filter_text_selected>신청 취소</C.filter_text_selected>
                ) : (
                  <C.filter_text_unselected onClick={handleFilterState}>
                    신청 취소
                  </C.filter_text_unselected>
                )}
                {filterState === '매칭 완료' ? (
                  <C.filter_text_selected>매칭 완료</C.filter_text_selected>
                ) : (
                  <C.filter_text_unselected onClick={handleFilterState}>
                    매칭 완료
                  </C.filter_text_unselected>
                )}
              </C.filter_status_wrap>
              <C.filter_recruiting_wrap>
                {isRecruiting ? (
                  <Image
                    src={checkedbox.src}
                    alt="checkedbox"
                    width={24}
                    height={24}
                    onClick={handleIsRecruiting}
                  ></Image>
                ) : (
                  <Image
                    src={uncheckedbox.src}
                    alt="uncheckedbox"
                    width={24}
                    height={24}
                    onClick={handleIsRecruiting}
                  ></Image>
                )}
                <C.filter_recruiting_text>모집중</C.filter_recruiting_text>
              </C.filter_recruiting_wrap>
            </C.filter_inner>
          </C.filter_wrap>
          <C.list_wrap>
            <C.list_content_wrap>
              <C.list_content_wrap_inner>
                <C.list_content_recruit_wrap>
                  <C.list_content_recruit_state>
                    모집중
                  </C.list_content_recruit_state>
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
          </C.list_wrap>
        </C.wrap>
      </Layout>
    </>
  );
};

export default Applications;
