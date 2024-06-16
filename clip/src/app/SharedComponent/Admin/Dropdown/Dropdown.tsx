import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { dropdownOpenState } from '@/app/admin/member/Atoms/dropdownOpenStateAtom';

type DropDownItemType = {
  $isLast: boolean;
};

const DropdownWrapper = styled.div`
  position: relative;
  width: 16.8rem;
  z-index: 2;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  witdh: fit-content;
  left: 0px;
  ${(props) => props.theme.FONT.Medium.B3}
  background-color: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 0;
  margin: 0;
  left: 4rem;
  top: 1.5rem;
  list-style: none;
`;

const DropdownItem = styled.li<DropDownItemType>`
  padding: 10px;
  cursor: pointer;
  ${(props) => (props.$isLast ? null : `border-bottom: 1px solid #d9d9d9`)};
  width: 16.8rem;
  &:hover {
    background-color: #f0f0f0;
  }
`;

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  id: string;
}

// 드롭다운 컴포넌트
const Dropdown: React.FC<DropdownProps> = ({ options, id }) => {
  const [text, setText] = useRecoilState(dropdownOpenState);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
  };

  return (
    <DropdownWrapper>
      {text[id] && (
        <DropdownMenu>
          {options.map((option, idx) => (
            <DropdownItem
              $isLast={idx === options.length - 1}
              key={option.value}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
