import styled from 'styled-components';
import TableItem from '../TableItem/TableIndexItem';
import { useEffect, useState } from 'react';
import * as C from './TableContent.style';
import { TABLEINDEX_OPTION_ANNOUNCEMENT } from '@/app/SharedComponent/DropdownOption/TableOption';
import AnnouncementType from '@/app/type/Announcment';
type TableContentProps = {
  info: AnnouncementType;
};

const TableContent: React.FC<TableContentProps> = ({ info }) => {
  const [isModifyModalOpen, setIsModifyModalOpen] = useState<boolean>(false);

  const handleModifyModal = () => {
    setIsModifyModalOpen(true);
  };

  return (
    <C.wrap>
      {TABLEINDEX_OPTION_ANNOUNCEMENT.map((option) => {
        if (option.name === '상태')
          return <TableItem size={option.size}>마감</TableItem>;
        if (option.id)
          return <TableItem size={option.size}>{info[option.id!]}</TableItem>;
      })}
      <C.modify_button onClick={handleModifyModal}>수정</C.modify_button>
    </C.wrap>
  );
};

export default TableContent;
