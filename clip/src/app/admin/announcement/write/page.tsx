'use client';

import { useEffect, useState } from 'react';
import * as S from '@/app/admin/announcement/write/page.style';
import HeaderWrite from './asset/components/Header/Header';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import note from '@/app/admin/announcement/write/asset/image/note.svg';
import searchIcon from '@/app/admin/asset/image/searchIcon.svg';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import CalendarModal from './asset/components/CalendarModal/CalendarModal';
import calendar_gray from '@/app/admin/announcement/write/asset/image/calendar_gray.svg';
import Calendar from './asset/components/Calendar/Calendar';
import ResearcherModal from './asset/components/ResearcherModal/ResearcherModal';
import { useRecoilState } from 'recoil';
import { ModalState } from './asset/Atoms/ModalState';
import { selectedResearcherState } from './asset/Atoms/jwtAtom';

const Write = () => {
  const { register } = useForm();
  const [isCalendarModalOpen, setIsCalendarModalOpen] =
    useState<boolean>(false);
  const [test, setTest] = useState('');
  const [startDate, setStartDate] = useState<any>('');
  const [endDate, setEndDate] = useState<any>('');
  const [selectedResearcher, setSelectedResearcher] = useRecoilState(
    selectedResearcherState
  );
  const [isResearcherModalStateOn, setIsResearcherModalStateOn] =
    useRecoilState(ModalState);

  const handleCalendarModal = (e: React.MouseEvent<HTMLInputElement>) => {
    if (e.currentTarget === e.target)
      setIsCalendarModalOpen(!isCalendarModalOpen);
  };

  const handleResearcherModalState = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target)
      setIsResearcherModalStateOn(!isResearcherModalStateOn);
  };

  useEffect(() => {
    if (startDate || endDate) setTest(`${startDate}      /     ${endDate}`);
  }, [startDate, endDate]);

  return (
    <>
      <HeaderWrite></HeaderWrite>
      <S.wrap>
        <S.left_wrap>
          <Spacer height="2rem;"></Spacer>
          <S.title>연구 / 인터뷰 등록</S.title>
          <S.input_list>
            <S.detail>
              <Image src={note.src} alt="note" width={20} height={20}></Image>
              기본 정보 입력
            </S.detail>
            <S.input_wrap>
              <S.index>제목 *</S.index>
              <S.input
                {...(register('title'),
                {
                  placeholder: '제목을 입력해주세요',
                })}
                width={'67.2rem'}
              ></S.input>
            </S.input_wrap>
            <S.double_input_wrap>
              <S.input_wrap>
                <S.index>연구자 *</S.index>
                <S.input
                  {...(register('researcher'),
                  {
                    placeholder: '연구자 등록하기',
                    value: `${selectedResearcher.name}`,
                  })}
                  src={searchIcon.src}
                  width={'21.7rem'}
                  onClick={handleResearcherModalState}
                ></S.input>
                {isResearcherModalStateOn && (
                  <ResearcherModal></ResearcherModal>
                )}
              </S.input_wrap>
              <S.input_wrap>
                <S.index>연구 장소 *</S.index>
                <S.input
                  {...(register('replace'),
                  {
                    placeholder: '주소를 입력해주세요',
                  })}
                  width={'43.1rem'}
                ></S.input>
              </S.input_wrap>
            </S.double_input_wrap>
            <S.input_wrap>
              <S.index>스크리닝 정보 *</S.index>
              <S.input
                {...(register('replace'),
                {
                  placeholder: '스크리닝 정보 등록하기',
                })}
                src={searchIcon.src}
                width={'67.2rem'}
              ></S.input>
            </S.input_wrap>
            <S.input_wrap>
              <S.index>구글 예약 폼 링크 *</S.index>
              <S.input
                {...(register('reservationLink'),
                {
                  placeholder: '예약 폼 링크',
                })}
                src={searchIcon.src}
                width={'67.2rem'}
              ></S.input>
            </S.input_wrap>
          </S.input_list>
          <S.input_wrap>
            <S.index>내용 설명</S.index>
            <S.input_textarea
              {...(register('content'),
              {
                placeholder: '연구 / 인터뷰에 관한 설명을 입력해주세요',
              })}
            ></S.input_textarea>
          </S.input_wrap>
        </S.left_wrap>
        <S.right_wrap>
          <S.right_wrap_inner>
            <S.detail>
              <Image src={note.src} alt="note" width={20} height={20}></Image>
              시간 / 모집인원 선택
            </S.detail>
            <S.input_wrap>
              <S.index>시작일 / 마감일 *</S.index>
              <S.input_calendar
                src={calendar_gray.src}
                placeholder="YYYY.MM.DD      /     YYYY.MM.DD"
                width={'33.6rem'}
                onClick={handleCalendarModal}
                onChange={() => {}}
                value={test}
              ></S.input_calendar>
              {isCalendarModalOpen && (
                <CalendarModal
                  isCalendarModalOpen={isCalendarModalOpen}
                  setIsCalendarModalOpen={setIsCalendarModalOpen}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  startDate={startDate}
                  endDate={endDate}
                ></CalendarModal>
              )}
            </S.input_wrap>
            <Calendar></Calendar>
            <Spacer height="10rem"></Spacer>
          </S.right_wrap_inner>
        </S.right_wrap>
      </S.wrap>
    </>
  );
};

export default Write;
