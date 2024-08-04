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
import { announceInfoState } from './asset/Atoms/announcementInfoState';
import { imageFileState } from './asset/Atoms/imageFileState';
import plus from '@/app/admin/researcher/all/asset/image/plus.svg';
import cancel from '@/app/admin/announcement/write/asset/image/cancel.svg';

const Write = () => {
  const { register, watch, setValue } = useForm<any>({ mode: 'onChange' });

  const [isCalendarModalOpen, setIsCalendarModalOpen] =
    useState<boolean>(false);
  const [test, setTest] = useState('');
  const [startDate, setStartDate] = useState<any>('');
  const [endDate, setEndDate] = useState<any>('');
  const [selectedResearcher, setSelectedResearcher] = useRecoilState(
    selectedResearcherState
  );
  const [screeningInput, setScreeningInput] = useState<string[]>(['']);
  const [isResearcherModalStateOn, setIsResearcherModalStateOn] =
    useRecoilState(ModalState);
  const [announceInfo, setAnnouncementInfo] = useRecoilState(announceInfoState);
  const [imageFiles, setImageFiles] = useRecoilState(imageFileState);

  const handleCalendarModal = (e: React.MouseEvent<HTMLInputElement>) => {
    if (e.currentTarget === e.target)
      setIsCalendarModalOpen(!isCalendarModalOpen);
  };

  const handleResearcherModalState = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target)
      setIsResearcherModalStateOn(!isResearcherModalStateOn);
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
    if (startDate || endDate) setTest(`${startDate}      /     ${endDate}`);

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
    setAnnouncementInfo((prev) => ({ ...prev, ...watch() }));
  }, [watch()]);

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
          <S.title>연구 / 인터뷰 등록</S.title>
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
              {isResearcherModalStateOn && <ResearcherModal></ResearcherModal>}
            </S.input_wrap>
            <S.double_input_wrap>
              <S.input_wrap>
                <S.index>연구 장소(시,도)*</S.index>
                <S.input
                  {...register('city')}
                  width={'15.1rem'}
                  placeholder={'시, 도를 입력하세요'}
                ></S.input>
              </S.input_wrap>
              <S.input_wrap>
                <S.index>연구 장소(시, 군, 구) *</S.index>
                <S.input
                  {...register('district')}
                  placeholder={'구, 군을 입력하세요'}
                  width={'15.1rem'}
                ></S.input>
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
            <S.input_wrap>
              <S.index>스크리닝 정보 *</S.index>
              {screeningInput?.map((item, index) => {
                return (
                  <div style={{ position: 'relative', display: 'flex' }}>
                    <S.input
                      placeholder={'스크리닝 정보 등록하기' + index}
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
              {watch('image')?.length
                ? `${(watch('image')[0] as File)?.name}`
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
            {startDate && endDate && (
              <Calendar startDate={startDate} endDate={endDate}></Calendar>
            )}
            <Spacer height="10rem"></Spacer>
          </S.right_wrap_inner>
        </S.right_wrap>
      </S.wrap>
    </>
  );
};

export default Write;
