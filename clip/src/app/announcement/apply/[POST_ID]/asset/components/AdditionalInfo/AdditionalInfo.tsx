import styled from 'styled-components';
import TilteWithIndex from '../TitleWithIndex/TitleWithIndex';
import Image from 'next/image';
import file from './asset/image/file.svg';

const AdditionalInfo = () => {
  return (
    <>
      <Wrap>
        <TilteWithIndex index="4" text="추가 스크리닝 정보"></TilteWithIndex>
        <Upload>
          인증서 업로드
          <Image src={file.src} alt="file" width={24} height={24}></Image>
        </Upload>
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

export default AdditionalInfo;
