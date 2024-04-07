'use client';

import { useState } from 'react';

const Dropdown = ({ list }: { list: any }) => {
  // 드롭다운이 열려있는지 여부를 state로 관리합니다.
  const [isOpen, setIsOpen] = useState(false);
  // 선택된 항목을 state로 관리합니다.
  const [selectedItem, setSelectedItem] = useState(null);

  // 드롭다운을 열고 닫는 함수
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // 항목을 선택하는 함수
  const selectItem = (item: any) => {
    setSelectedItem(item);
    setIsOpen(false); // 항목을 선택하면 드롭다운을 닫습니다.
  };

  return (
    <div className="dropdown">
      {/* 드롭다운 헤더 */}
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem ? selectedItem : 'Select an item'}
        <i
          className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}
        ></i>
      </div>
      {/* 드롭다운 목록 */}
      {isOpen && (
        <ul className="dropdown-list">
          <li onClick={() => selectItem('Item 1')}>Item 1</li>
          <li onClick={() => selectItem('Item 2')}>Item 2</li>
          <li onClick={() => selectItem('Item 3')}>Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
