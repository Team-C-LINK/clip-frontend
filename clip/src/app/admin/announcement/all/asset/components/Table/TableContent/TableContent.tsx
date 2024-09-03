import { useEffect, useState } from 'react';
import * as S from './TableContent.style';
import Image from 'next/image';
import modifyIcon from '@/app/admin/member/all/asset/image/modifyIcon.svg';
import AnnouncementType from '@/app/type/Announcment';
import GreenButton from '@/app/SharedComponent/Category/GreenButton';
import GrayButton from '@/app/SharedComponent/Category/GrayButton';
type TableContentProps = {
  info: AnnouncementType;
};

const TableContent: React.FC<TableContentProps> = ({ info }) => {
  const [isModifyModalOpen, setIsModifyModalOpen] = useState<boolean>(false);

  const handleModifyButton = () => {
    window.location.href = `/admin/announcement/modify?id=${info?.id}`;
  };

  const handleDetailButton = () => {
    window.location.href = `/admin/announcement/manage?id=${info?.id}`;
  };

  return (
    <tr>
      <S.td>{info.id}</S.td>
      <S.td>
        {info.isRecruiting && info?.remainingDay ? (
          <GreenButton>모집중</GreenButton>
        ) : (
          <GrayButton>마감</GrayButton>
        )}
      </S.td>
      <S.td>{info.category}</S.td>
      <S.td>{info.remainingDay}</S.td>
      <S.td>
        <a href={`/announcement/${info?.id}`}>{info.title}</a>
      </S.td>
      <S.td>{info.researcherName}</S.td>
      <S.td>{info.researcherAffiliation}</S.td>
      <S.td>
        <S.modify_button onClick={handleModifyButton}>
          <Image
            src={modifyIcon.src}
            alt="modifyIcon"
            width={17}
            height={17}
          ></Image>
        </S.modify_button>
      </S.td>
      <S.td>
        <S.modify_button onClick={handleDetailButton}>
          상세 보기
        </S.modify_button>
      </S.td>
    </tr>
  );
};

export default TableContent;
