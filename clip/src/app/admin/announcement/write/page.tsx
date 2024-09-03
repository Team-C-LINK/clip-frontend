'use client';

import { useEffect, useState } from 'react';
import * as S from '@/app/admin/announcement/write/page.style';
import HeaderWrite from './asset/components/Header/Header';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import note from '@/app/admin/announcement/write/asset/image/note.svg';
import searchIcon from '@/app/admin/asset/image/searchIcon.svg';
import Image from 'next/image';
import { useForm, useWatch } from 'react-hook-form';
import CalendarModal from './asset/components/CalendarModal/CalendarModal';
import calendar_gray from '@/app/admin/announcement/write/asset/image/calendar_gray.svg';
import Calendar from './asset/components/Calendar/Calendar';
import ResearcherModal from './asset/components/ResearcherModal/ResearcherModal';
import { useRecoilState } from 'recoil';
import { announcementModalStateWriteModify } from '@/app/Atoms/announcementModalStateWriteModify';
import { selectedResearcherState } from '@/app/Atoms/selectedResearcherState';
import { imageFileState } from '@/app/Atoms/imageFileState';
import { announceInfoState } from '@/app/Atoms/announcementInfoState';
import plus from '@/app/admin/researcher/all/asset/image/plus.svg';
import cancel from '@/app/admin/announcement/write/asset/image/cancel.svg';
import { useSearchParams } from 'next/navigation';
import { sidoList, siguList } from '@/app/join/address/hooks/sidoList';

const Write = () => {
  const { register, watch, setValue, control } = useForm<any>({
    mode: 'onChange',
    defaultValues: {
      city: '서울특별시',
      district: '종로구',
    },
  });
  const queryParam = useSearchParams();
  const watchValues = useWatch({ control });
  const [isCalendarModalOpen, setIsCalendarModalOpen] =
    useState<boolean>(false);
  const [test, setTest] = useState('');
  const [startDate, setStartDate] = useState<any>('');
  const [endDate, setEndDate] = useState<any>('');
  const [selectedResearcher, setSelectedResearcher] = useRecoilState(
    selectedResearcherState
  );
  const [screeningInput, setScreeningInput] = useState<string[]>(['']);
  const [modalState, setModalState] = useRecoilState(
    announcementModalStateWriteModify
  );
  const [announceInfo, setAnnouncementInfo] = useRecoilState(announceInfoState);
  const [imageFiles, setImageFiles] = useRecoilState(imageFileState);

  const handleCalendarModal = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();

    setModalState((prev) => ({
      ...prev,
      calendarModalState: !prev.calendarModalState,
    }));
  };

  const handleResearcherModalState = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.currentTarget === e.target)
      setModalState((prev) => ({
        ...prev,
        reseracherModalState: !prev.reseracherModalState,
      }));
  };

  const addScreeningInput = () => {
    setScreeningInput([...screeningInput, '']);
  };

  const handleEraseScreeningInput = (index: number) => {
    const copiedArray = screeningInput.slice();
    copiedArray.splice(index, 1);
    setScreeningInput(copiedArray);
  };

  const handleScreeningInfo = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const temp = screeningInput.slice();
    temp[idx] = e.target.value;
    setScreeningInput(temp);
  };

  const handleImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const copy = e.target.files as unknown as File[];
    setImageFiles(copy);
  };

  useEffect(() => {
    if (startDate || endDate)
      setTest(
        `${startDate
          .toString()
          .replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3')}      /     ${endDate
          ?.toString()
          .replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3')}`
      );

    if (endDate) {
      const endDateStr = endDate.toString();
      const formattedDate = `${endDateStr.slice(0, 4)}-${endDateStr.slice(
        4,
        6
      )}-${endDateStr.slice(6)}`;
      setAnnouncementInfo((prev) => ({ ...prev, endDate: formattedDate }));
    }
  }, [startDate, endDate]);

  useEffect(() => {
    setAnnouncementInfo((prev) => ({ ...prev, ...watchValues }));
  }, [watchValues]);

  useEffect(() => {
    setValue('district', siguList[watch('city')][0]);
  }, [watch('city')]);

  useEffect(() => {
    setAnnouncementInfo((prev) => ({
      ...prev,
      applicationConditions: screeningInput,
    }));
  }, [screeningInput]);

  return (
    <>
      <HeaderWrite></HeaderWrite>
      <S.wrap>
        <S.left_wrap>
          <Spacer height="2rem;"></Spacer>
          <S.title>{queryParam.get('type') as string} 등록</S.title>
          <S.input_list>
            <S.detail>
              <Image src={note.src} alt="note" width={20} height={20}></Image>
              기본 정보 입력
            </S.detail>
            <S.input_wrap>
              <S.index>제목 *</S.index>
              <S.input
                {...register('title')}
                placeholder={'제목을 입력하세요'}
                id={'title'}
                width={'67.2rem'}
              ></S.input>
            </S.input_wrap>
            <S.input_wrap>
              <S.index>연구자 *</S.index>
              <S.input
                placeholder={'연구자 등록하기'}
                value={selectedResearcher.name}
                src={searchIcon.src}
                width={'67.2rem'}
                onClick={handleResearcherModalState}
              ></S.input>
              {modalState.reseracherModalState && (
                <ResearcherModal></ResearcherModal>
              )}
            </S.input_wrap>
            {queryParam.get('type') === '연구/인터뷰' && (
              <S.double_input_wrap>
                <S.input_wrap>
                  <S.index>연구 장소(시,도)*</S.index>
                  <S.select {...register('city')}>
                    {sidoList.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </S.select>
                </S.input_wrap>
                <S.input_wrap>
                  <S.index>연구 장소(시, 군, 구) *</S.index>
                  <S.select {...register('district')}>
                    {siguList[watch('city')]?.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </S.select>
                </S.input_wrap>
                <S.input_wrap>
                  <S.index>연구 장소(상세 주소)*</S.index>
                  <S.input
                    {...register('detailAddress')}
                    placeholder={'상세 주소를 입력해주세요'}
                    width={'32.1rem'}
                  ></S.input>
                </S.input_wrap>
              </S.double_input_wrap>
            )}

            <S.input_wrap>
              <S.index>스크리닝 정보 *</S.index>
              {screeningInput?.map((item, index) => {
                return (
                  <div
                    style={{ position: 'relative', display: 'flex' }}
                    key={index}
                  >
                    <S.input
                      placeholder={'스크리닝 정보 등록하기'}
                      src={searchIcon.src}
                      width={'67.2rem'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleScreeningInfo(e, index)
                      }
                    ></S.input>
                    {index === screeningInput.length - 1 && (
                      <S.cancel
                        src={cancel.src}
                        onClick={() => handleEraseScreeningInput(index)}
                      ></S.cancel>
                    )}
                  </div>
                );
              })}
              <S.add_screening onClick={addScreeningInput}>
                <Image src={plus.src} alt="plus" width={10} height={10}></Image>
                스크리닝 정보 추가
              </S.add_screening>
            </S.input_wrap>
            <S.input_wrap>
              <S.index>구글 예약 폼 링크 *</S.index>
              <S.input
                {...register('registerLink')}
                placeholder={'예약 폼 링크'}
                src={searchIcon.src}
                width={'67.2rem'}
              ></S.input>
            </S.input_wrap>
            <S.input_wrap>
              <S.index>사례금 *</S.index>
              <S.input
                {...register('fee')}
                placeholder={'사례금'}
                src={searchIcon.src}
                width={'67.2rem'}
              ></S.input>
            </S.input_wrap>
          </S.input_list>
          <S.input_wrap>
            <S.index>내용 설명</S.index>
            <S.input_textarea
              {...register('content')}
              placeholder={'연구 / 인터뷰에 관한 설명을 입력해주세요'}
            ></S.input_textarea>
          </S.input_wrap>
          <input
            id="image"
            type="file"
            accept="image/*"
            hidden={true}
            onChange={handleImageFile}
          ></input>
          <S.upload_wrap>
            <S.upload htmlFor="image">
              <Image src={plus.src} alt="plus" width={10} height={10}></Image>
              사진 업로드
            </S.upload>
            <S.selected_file>
              {imageFiles?.length
                ? `${imageFiles[0]?.name}`
                : `선택된 파일 없음`}
            </S.selected_file>
          </S.upload_wrap>
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
              {modalState?.calendarModalState && (
                <CalendarModal
                  isCalendarModalOpen={modalState?.calendarModalState}
                  setIsCalendarModalOpen={setIsCalendarModalOpen}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  startDate={startDate}
                  endDate={endDate}
                ></CalendarModal>
              )}
            </S.input_wrap>
            {startDate && endDate && (
              <Calendar startDate={startDate} endDate={endDate}></Calendar>
            )}
            <Spacer height="10rem"></Spacer>
          </S.right_wrap_inner>
        </S.right_wrap>
      </S.wrap>
      <Spacer height="10rem"></Spacer>
    </>
  );
};

export default Write;
