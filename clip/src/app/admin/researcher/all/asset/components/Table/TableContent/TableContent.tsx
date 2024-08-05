import { useEffect, useState } from 'react';
import * as S from './TableContent.style';
import ResearcherInfoType from '@/app/type/ResearcherInfoType';
import Image from 'next/image';
import modifyIcon from '@/app/admin/member/all/asset/image/modifyIcon.svg';
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
    <>
      {isModifyModalOpen && (
        <ModifyModal
          info={info}
          setIsModalOpen={setIsModifyModalOpen}
        ></ModifyModal>
      )}
      <tr key={info.id}>
        <S.td>{info.id}</S.td>
        <S.td>{info.name}</S.td>
        <S.td>{info.affiliation}</S.td>
        <S.td>{info.email}</S.td>
        <S.td>{info.researchField}</S.td>
        <S.td>{info.detailAddress}</S.td>
        <S.td>
          <Profile src={info.profile}></Profile>
        </S.td>
        <S.td>
          <S.modify_button onClick={handleModifyModal}>
            <Image
              src={modifyIcon.src}
              alt="modifyIcon"
              width={17}
              height={17}
            ></Image>
          </S.modify_button>
        </S.td>
      </tr>
    </>
  );
};

const Profile = ({ src }: { src: string }) => {
  const [isOpen, setIsOpeon] = useState<boolean>(false);

  return (
    <>
      <S.profile_button
        onMouseEnter={() => setIsOpeon(true)}
        onMouseLeave={() => setIsOpeon(false)}
      >
        미리 보기
        {isOpen && (
          <S.profile_wrap>
            <S.profile_img src={src} />
          </S.profile_wrap>
        )}
      </S.profile_button>
    </>
  );
};

export default TableContent;
