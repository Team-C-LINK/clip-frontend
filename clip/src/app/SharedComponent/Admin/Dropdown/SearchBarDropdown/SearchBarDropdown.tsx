import React, { useEffect, useState } from 'react';
import * as C from './SearchBarDropdown.style';
import { DropdownBase } from '../DropdonwBase/DropdownBase.style';
import { useRecoilState } from 'recoil';
import { dropdownOpenState } from '@/app/admin/member/Atoms/dropdownOpenStateAtom';

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
  id: string;
  size: string;
}

const SearchBarDropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  selectedOption,
  id,
  size,
}) => {
  const [text, setText] = useRecoilState(dropdownOpenState);

  const handleItem = (e: React.MouseEvent<HTMLLIElement | HTMLDivElement>) => {
    e.stopPropagation();
    onSelect(e.currentTarget.innerHTML);
    handleIsOpen(e);
  };

  const handleIsOpen = (
    e: React.MouseEvent<HTMLLIElement | HTMLDivElement>
  ) => {
    e.stopPropagation();
    for (const key in text) {
      if (key === id) setText((prev) => ({ ...prev, [id]: !text[id] }));
      else setText((prev) => ({ ...prev, [key]: false }));
    }
  };

  return (
    <C.DropdownWrapper $size={size}>
      <DropdownBase onClick={handleIsOpen}>{selectedOption}</DropdownBase>
      {text[id] && (
        <C.DropdownMenu>
          {options?.map((option, idx) => (
            <C.DropdownItem
              $isLast={idx === options.length - 1}
              onClick={handleItem}
              key={idx}
            >
              {option}
            </C.DropdownItem>
          ))}
        </C.DropdownMenu>
      )}
    </C.DropdownWrapper>
  );
};

export default SearchBarDropdown;
