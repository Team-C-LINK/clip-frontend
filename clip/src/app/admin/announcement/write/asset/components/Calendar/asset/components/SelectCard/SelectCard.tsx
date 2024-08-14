import * as S from './SelectCard.style';
import Image from 'next/image';
import plus_black from '@/app/admin/announcement/write/asset/components/Calendar/asset/image/plus_black.svg';
import minus_gray from '@/app/admin/announcement/write/asset/components/Calendar/asset/image/minus.gray.svg';
import minus_black from '@/app/admin/announcement/write/asset/components/Calendar/asset/image/minus_black.svg';
import { useState } from 'react';

interface SelectCardProps {
  info: SelectCardInfo;
  date: SelectedDateType;
  reserveInfo: ReserveInfoType[];
  setReserveInfo: React.Dispatch<ReserveInfoType[]>;
}

interface SelectCardInfo {
  detail: string;
  person: number;
}

type SelectedDateType = {
  year: string;
  month: string;
  day: string;
};

type ReserveInfoType = {
  date: string;
  time: SelectCardInfo[];
};

const SelectCard: React.FC<SelectCardProps> = ({
  info,
  date,
  reserveInfo,
  setReserveInfo,
}) => {
  const findIdx = (date: string) => {
    const idx = reserveInfo?.findIndex((item) => item.date === date);
    return idx;
  };

  const handlePerson = (e: React.MouseEvent<HTMLImageElement>) => {
    const _date = `${date?.year}-${date?.month}-${date?.day}`;
    const idx = findIdx(_date)!;

    if (idx! >= 0) {
      const target = reserveInfo?.slice(0);
      const timeIdx = target[idx]?.time.findIndex(
        (item) => item.detail === info.detail
      );

      if (e.currentTarget.id === 'minus') target[idx].time[timeIdx].person -= 1;
      if (e.currentTarget.id === 'plus') target[idx].time[timeIdx].person += 1;

      setReserveInfo(target);
    }
  };

  return (
    <S.wrap>
      <S.row>
        <strong>
          {date?.month}월 {date?.day}일
        </strong>
        &nbsp;({info?.detail}시)
      </S.row>
      <S.row>
        <S.counter>
          <Image
            src={info?.person > 1 ? minus_black.src : minus_gray.src}
            alt="minus_gray"
            id="minus"
            width={24}
            height={24}
            onClick={handlePerson}
          ></Image>
          {info?.person}명
          <Image
            src={plus_black.src}
            alt="plus_black"
            id="plus"
            width={24}
            height={24}
            onClick={handlePerson}
          ></Image>
        </S.counter>
      </S.row>
    </S.wrap>
  );
};

export default SelectCard;
