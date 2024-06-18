import styled from 'styled-components';
import TableItem from '../TableItem/TableIndexItem';
import { useEffect, useState } from 'react';
import * as C from './TableContent.style';
import ResearcherInfoType from '@/app/type/ResearcherInfoType';
import { TABLEINDEX_OPTION_RESEARCHER } from '@/app/SharedComponent/DropdownOption/TableOption';
import ModifyModal from '../../ModifyModal/ModifyModal';
type TableContentProps = {
  info: ResearcherInfoType;
};

const TableContent: React.FC<TableContentProps> = ({ info }) => {
  const [isModifyModalOpen, setIsModifyModalOpen] = useState<boolean>(false);

  const handleModifyModal = () => {
    setIsModifyModalOpen(true);
  };

  return (
    <C.wrap>
      {isModifyModalOpen && (
        <ModifyModal
          info={info}
          setIsModalOpen={setIsModifyModalOpen}
        ></ModifyModal>
      )}
      {TABLEINDEX_OPTION_RESEARCHER.map((option) => {
        if (option.id && option.id !== 'profile')
          return <TableItem size={option.size}>{info[option.id]}</TableItem>;
      })}
      <Profile src={info.profile}></Profile>
      <C.modify_button onClick={handleModifyModal}>수정</C.modify_button>
    </C.wrap>
  );
};

const Profile = ({ src }: { src: string }) => {
  const [isOpen, setIsOpeon] = useState<boolean>(false);

  return (
    <>
      <C.profile_button
        onMouseEnter={() => setIsOpeon(true)}
        onMouseLeave={() => setIsOpeon(false)}
      >
        보기
        {isOpen && (
          <C.profile_wrap>
            <C.profile_img src={src} />
          </C.profile_wrap>
        )}
      </C.profile_button>
    </>
  );
};

export default TableContent;
