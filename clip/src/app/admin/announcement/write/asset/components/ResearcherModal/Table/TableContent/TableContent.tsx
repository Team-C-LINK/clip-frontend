import { useEffect, useState } from 'react';
import * as S from './TableContent.style';
import { useRecoilState } from 'recoil';
import { ModalState } from '../../../../Atoms/ModalState';
import { selectedResearcherState } from '../../../../Atoms/jwtAtom';

interface ResearcherModalInfoType {
  name: string;
  affiliation: string;
  email: string;
}

interface TableContentProps {
  info: ResearcherModalInfoType;
  setSelectedIndex: React.Dispatch<number>;
  selectedIndex?: number;
  index: number;
}

const TableContent: React.FC<TableContentProps> = ({
  info,
  index,
  setSelectedIndex,
  selectedIndex,
}) => {
  const [isModifyModalOpen, setIsModifyModalOpen] = useState<boolean>(false);
  const [selectedResearcher, setSelectedResearcher] = useRecoilState(
    selectedResearcherState
  );
  const [isResearcherModalStateOn, setIsResearcherModalStateOn] =
    useRecoilState(ModalState);

  const handleCheckboxChange = (index: number) => {
    setSelectedIndex(index);
    setSelectedResearcher(info);
  };

  const handleResearcherModalState = (
    e: React.MouseEvent<HTMLInputElement>
  ) => {
    e.stopPropagation();
    setIsResearcherModalStateOn(!isResearcherModalStateOn);
  };

  return (
    <>
      <tr>
        <S.td>
          <input
            type="checkbox"
            checked={info?.name === selectedResearcher.name}
            onChange={() => handleCheckboxChange(index)}
            onClick={handleResearcherModalState}
          ></input>
        </S.td>
        <S.td>{info?.name}</S.td>
        <S.td>{info?.affiliation}</S.td>
        <S.td>{info?.email}</S.td>
      </tr>
    </>
  );
};

export default TableContent;
