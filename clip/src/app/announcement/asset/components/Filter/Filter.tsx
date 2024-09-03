import * as C from './Filter.style';
import React, { useState } from 'react';
import check from '../../../asset/image/check.svg';
import checkedbox from '../../../asset/image/checkedBox.svg';
import uncheckedbox from '../../../asset/image/uncheckedBox.svg';
import Image from 'next/image';
import Divider from '@/app/SharedComponent/Divider/Divider';
import useScroll from '@/app/utils/hook/useScroll';

const filterList = ['전체 공고', '연구/인터뷰', '설문조사'];
const Filter = ({
  filterState,
  setFilterState,
  isRecruiting,
  setIsRecruiting,
}: {
  filterState: string;
  setFilterState: Function;
  isRecruiting: boolean;
  setIsRecruiting: Function;
}) => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  useScroll(setIsNavVisible);

  const handleFilter = (e: any) => {
    setFilterState(e.currentTarget.id);
  };

  const handleIsRecruiting = () => {
    if (isRecruiting) setIsRecruiting(false);
    else setIsRecruiting(true);
  };

  return (
    <>
      <C.header $isVisible={isNavVisible}>
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
                  <C.header_content_unselected id={val} onClick={handleFilter}>
                    <C.header_content_text>
                      <C.test2>{val}</C.test2>
                    </C.header_content_text>
                  </C.header_content_unselected>
                )}
              </React.Fragment>
            );
          })}
        </C.header_inner_wrap>
        <Divider $size="100%"></Divider>
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
      </C.header>
    </>
  );
};

export default Filter;
