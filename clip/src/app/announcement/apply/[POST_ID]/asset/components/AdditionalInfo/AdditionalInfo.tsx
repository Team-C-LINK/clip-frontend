import styled from 'styled-components';
import TilteWithIndex from '../TitleWithIndex/TitleWithIndex';
import Image from 'next/image';
import file from './asset/image/file.svg';
import { useEffect, useState } from 'react';
import { uploadS3Multiple } from '@/app/utils/uploadS3Multiple';
import RequestApplyType from '@/app/type/RequestApplyType';

const AdditionalInfo = ({
  setApplyInfo,
}: {
  setApplyInfo: React.Dispatch<React.SetStateAction<RequestApplyType>>;
}) => {
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (e: any) => {
    setApplyInfo((prevState) => ({
      ...prevState,
      announcementReservationImages: [
        ...prevState.announcementReservationImages,
        ...e.target.files,
      ],
    }));
    setImages((prev) => [...prev, ...e.target.files]);
  };

  return (
    <>
      <Wrap>
        <TilteWithIndex index="4" text="추가 스크리닝 정보"></TilteWithIndex>
        <input
          type="file"
          id="files"
          name="files"
          onChange={handleImageChange}
          multiple
          hidden={true}
        />
        <label htmlFor="files">
          <Upload>
            인증서 업로드
            <Image src={file.src} alt="file" width={24} height={24}></Image>
          </Upload>
        </label>
        {images && (
          <div>
            {images.map((val, idx) => {
              return (
                <File_item key={idx}>{val.name}&nbsp;&nbsp;&nbsp;</File_item>
              );
            })}
          </div>
        )}
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const Upload = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 100%;
  height: 4.4rem;

  background: ${(props) => props.theme.BACKGROUND._DISABLE};
  border-radius: 0.4rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B2};
`;

const File_item = styled.span`
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B3};
`;

export default AdditionalInfo;
