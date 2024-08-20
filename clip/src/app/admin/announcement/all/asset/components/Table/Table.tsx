import TableContent from './TableContent/TableContent';
import * as S from './Table.style';
import AnnouncementType from '@/app/type/Announcment';
import Image from 'next/image';
import toggle from '@/app/admin/announcement/all/asset/image/toggle.svg';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import GreenButton from '@/app/SharedComponent/Category/GreenButton';
import GrayButton from '@/app/SharedComponent/Category/GrayButton';

interface TableProps {
  info?: AnnouncementType[];
}

const Table: React.FC<TableProps> = ({ info }) => {
  const [isStatusDropdownOn, setIsStatusDropdownOn] = useState(false);
  const [isCateogryDropdownOn, setIsCategoryDropdownOn] = useState(false);
  const params = useSearchParams();

  const handleStatusDropdown = () => {
    setIsStatusDropdownOn(!isStatusDropdownOn);
  };

  const handleCateogryDropdown = () => {
    setIsCategoryDropdownOn(!isCateogryDropdownOn);
  };

  const handleCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    const selectCategory = e.currentTarget.id;

    if (selectCategory === 'all') {
      const url = new URLSearchParams(params.toString());
      url.delete('announcementType');
      window.location.href = `?${url.toString()}`;
      return;
    }

    if (params.size) {
      if (params.get('announcementType') === null)
        window.location.href += `&announcementType=${selectCategory}`;
      else window.location.href = `?announcementType=${selectCategory}`;
    } else window.location.href = `?announcementType=${selectCategory}`;
  };

  const handleStatus = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetId = e.currentTarget.id;

    if (targetId === 'all') {
      const url = new URLSearchParams(params.toString());
      url.delete('isRecruiting');
      window.location.href = `?${url.toString()}`;
      return;
    }

    const selectStatus = targetId === 'recruiting' ? true : false;

    if (params.size) {
      if (params.get('isRecruiting') === null)
        window.location.href += `&isRecruiting=${selectStatus}`;
      else window.location.href = `?isRecruiting=${selectStatus}`;
    } else window.location.href = `?isRecruiting=${selectStatus}`;
  };

  return (
    <S.table>
      <thead>
        <tr>
          <S.th>번호</S.th>
          <S.th>
            <S.status_wrap onClick={handleStatusDropdown}>
              상태
              <Image
                src={toggle.src}
                alt="toggle"
                width={10}
                height={10}
              ></Image>
              {isStatusDropdownOn && (
                <S.drop>
                  <S.menu id={'all'} $isLast={false} onClick={handleStatus}>
                    <GreenButton>전체</GreenButton>
                  </S.menu>
                  <S.menu
                    id={'recruiting'}
                    $isLast={false}
                    onClick={handleStatus}
                  >
                    <GreenButton>모집중</GreenButton>
                  </S.menu>
                  <S.menu id={'end'} $isLast={true} onClick={handleStatus}>
                    <GrayButton>마감</GrayButton>
                  </S.menu>
                </S.drop>
              )}
            </S.status_wrap>
          </S.th>
          <S.th>
            <S.status_wrap onClick={handleCateogryDropdown}>
              분류
              <Image
                src={toggle.src}
                alt="toggle"
                width={10}
                height={10}
              ></Image>
              {isCateogryDropdownOn && (
                <S.drop>
                  <S.menu id={'all'} $isLast={false} onClick={handleCategory}>
                    전체
                  </S.menu>
                  <S.menu
                    id={'SURVEY'}
                    $isLast={false}
                    onClick={handleCategory}
                  >
                    설문조사
                  </S.menu>
                  <S.menu
                    id={'INTERVIEW'}
                    $isLast={false}
                    onClick={handleCategory}
                  >
                    연구/인터뷰
                  </S.menu>
                  <S.menu id={'ETC'} $isLast={true} onClick={handleCategory}>
                    기타
                  </S.menu>
                </S.drop>
              )}
            </S.status_wrap>
          </S.th>
          <S.th>마감일</S.th>
          <S.th>제목</S.th>
          <S.th>연구자 이름</S.th>
          <S.th>소속</S.th>
          <S.th>수정</S.th>
          <S.th>모집 현황</S.th>
        </tr>
      </thead>
      <tbody>
        {info?.map((item) => {
          return <TableContent key={item.id} info={item}></TableContent>;
        })}
      </tbody>
    </S.table>
  );
};

export default Table;
