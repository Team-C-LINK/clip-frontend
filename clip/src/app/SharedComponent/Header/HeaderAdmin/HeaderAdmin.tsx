import * as C from '../HeaderAdmin/HeaderAdmin.style';
import clip from '../../asset/image/clip.svg';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Dropdown from '../../Admin/Dropdown/Dropdown';
import { useRecoilState } from 'recoil';
import { dropdownOpenState } from '@/app/admin/member/Atoms/dropdownOpenStateAtom';

const CATEGORY = ['회원 관리', '공고 관리', '연구자 관리', '포인트 관리'];
const options: {
  [key: string]: { label: string; value: string; route: string }[];
} = {
  '회원 관리': [
    { label: '전체 회원관리', value: 'option1', route: '/admin/member/all' },
    {
      label: '탈퇴 회원관리',
      value: 'option2',
      route: '/admin/member/withdraw',
    },
  ],
  '공고 관리': [
    {
      label: '전체 공고 리스트',
      value: 'option1',
      route: '/admin/announcement/all',
    },
  ],
  '연구자 관리': [
    {
      label: '전체 연구자 리스트',
      value: 'option1',
      route: '/admin/researcher/all',
    },
  ],
  '포인트 관리': [
    { label: '전체 공고 리스트', value: 'option1', route: '/admin/member/all' },
  ],
};

const HeaderAdmin = ({ state }: { state: string }) => {
  const [categoryState, setCategoryState] = useState('회원 관리');
  const [text, setText] = useRecoilState(dropdownOpenState);

  const handleCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setCategoryState(e.currentTarget.innerHTML);
    handleDropdownVisibility(e);
  };

  const handleDropdownVisibility = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const target = e.currentTarget.dataset.category_id;
    for (const key in text) {
      if (key === target) {
        setText((prev) => ({ ...prev, [key]: !text[key] }));
      } else setText((prev) => ({ ...prev, [key]: false }));
    }
  };

  return (
    <C.wrap>
      <C.wrap_inner>
        <Image src={clip.src} alt="clip" width={71} height={29}></Image>
        {CATEGORY.map((category, idx) => {
          return category === state ? (
            <C.content_selected
              key={idx}
              onClick={handleDropdownVisibility}
              id={category}
              data-category_id={`header_${idx + 1}`}
            >
              {category}
              <Dropdown options={options[category]} id={`header_${idx + 1}`} />
              <C.purple_line></C.purple_line>
            </C.content_selected>
          ) : (
            <C.content_unselected
              key={idx}
              onClick={handleDropdownVisibility}
              data-category_id={`header_${idx + 1}`}
            >
              {category}
              <Dropdown options={options[category]} id={`header_${idx + 1}`} />
            </C.content_unselected>
          );
        })}
      </C.wrap_inner>
    </C.wrap>
  );
};

export default HeaderAdmin;
