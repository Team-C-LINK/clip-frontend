import * as C from '../HeaderAdmin/HeaderAdmin.style';
import clip from '../../asset/image/clip.svg';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Dropdown from '../../Admin/Dropdown/Dropdown';
import { useRecoilState } from 'recoil';
import { dropdownOpenState } from '@/app/admin/member/Atoms/dropdownOpenStateAtom';

const CATEGORY = ['회원 관리', '공고 관리', '연구자 관리', '포인트 관리'];
const options = [
  { label: '전체 회원관리', value: 'option1' },
  { label: '탈퇴 회원관리', value: 'option2' },
];

interface Option {
  label: string;
  value: string;
}

const HeaderAdmin = () => {
  const [categoryState, setCategoryState] = useState('회원 관리');
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
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
          return category === categoryState ? (
            <C.content_selected
              onClick={handleDropdownVisibility}
              id={category}
              data-category_id={`header_${idx + 1}`}
            >
              {category}
              <Dropdown options={options} id={`header_${idx + 1}`} />
              <C.purple_line></C.purple_line>
            </C.content_selected>
          ) : (
            <C.content_unselected
              onClick={handleCategory}
              data-category_id={`header_${idx + 1}`}
            >
              {category}
            </C.content_unselected>
          );
        })}
      </C.wrap_inner>
    </C.wrap>
  );
};

export default HeaderAdmin;
