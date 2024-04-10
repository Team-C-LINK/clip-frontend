'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/SharedComponent/Background';
import * as C from './component/C.style';
import checkedbox from './asset/checkedBox.svg';
import uncheckedbox from './asset/uncheckedBox.svg';
import interested from './asset/interested.svg';
import uninterested from './asset/uninterested.svg';
import Image from 'next/image';
import check from './asset/check.svg';
import NavigationBar from '../SharedComponent/NavigationBar/NaivgationBar';

const Recruit = () => {
  const [isRecruiting, setIsRecruiting] = useState<boolean>(false);
  const [filterState, setFilterState] = useState<string>('전체 공고');

  const handleIsRecruiting = () => {
    if (isRecruiting) setIsRecruiting(false);
    else setIsRecruiting(true);
  };

  const handleFilter = (e: any) => {
    setFilterState(e.currentTarget.id);
  };

  useEffect(() => {
    // 모집 중 상태가 변경 되었을 때 리스트 갱신 로직
  }, [isRecruiting]);

  const filterList = ['전체 공고', '📝연구/인터뷰', '📊설문조사', '💬기타'];

  return (
    <>
      <Layout>
        <C.wrap>
          <C.header>
            <C.header_inner_wrap>
              {filterList.map((val, idx) => {
                return (
                  <React.Fragment key={idx}>
                    {filterState === val ? (
                      <C.header_content_selected key={idx}>
                        <Image
                          src={check.src}
                          alt="check"
                          width={16}
                          height={16}
                        ></Image>
                        <C.header_content_text>
                          <C.test>{val}</C.test>
                        </C.header_content_text>
                      </C.header_content_selected>
                    ) : (
                      <C.header_content_unselected
                        id={val}
                        onClick={handleFilter}
                      >
                        <C.header_content_text>
                          <C.test2>{val}</C.test2>
                        </C.header_content_text>
                      </C.header_content_unselected>
                    )}
                  </React.Fragment>
                );
              })}
            </C.header_inner_wrap>
          </C.header>
          <C.filter_wrap>
            <C.filter_inner>
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
          </C.list_wrap>
          <NavigationBar state={'recruit'}></NavigationBar>
        </C.wrap>
      </Layout>
    </>
  );
};

export default Recruit;
