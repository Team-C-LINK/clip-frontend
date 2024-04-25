import styled from 'styled-components';
import Image from 'next/image';
import arrow_right from '@/app/SharedComponent/asset/image/arrow_right.svg';
import TilteWithIndex from '../TitleWithIndex/TitleWithIndex';

const CheckMyInfo = () => {
  return (
    <>
      <Wrap>
        <Top>
          <Title_wrap>
            <TilteWithIndex index="2" text="내 정보 확인"></TilteWithIndex>{' '}
            <Modify>
              수정하기
              <Image
                src={arrow_right.src}
                alt="arrow_right"
                width={14}
                height={14}
              />
            </Modify>
          </Title_wrap>
          <Title_detail>지원 조건에 맞는지 확인해보세요</Title_detail>
        </Top>
        <Detail_wrap>
          <Info_wrap>
            <Index>이메일</Index>
            <Content>abcdefg@gmail.com</Content>
          </Info_wrap>
          <Info_wrap>
            <Index>연구분야</Index>
            <Content>가나다라마</Content>
          </Info_wrap>
          <Info_wrap>
            <Index>대표주소</Index>
            <Content>서울 성북구 안암로 145</Content>
          </Info_wrap>
        </Detail_wrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Top = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Title_detail = styled.div`
  /* 지원 조건에 맞는지 확인해보세요 */

  position: relative;
  width: fit-content;
  height: fit-content;

  /* Regular/B4 */
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B4};

  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  /* Purple/01 */
  color: ${(props) => props.theme.PURPLE._01};
  left: 2.65rem;
`;

const Title_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 91.1%;
  height: fit-content;
`;

const Modify = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: fit-content;
  gap: 0.8rem;
  ${(props) => props.theme.FONT.Medium.B4};
  color: ${(props) => props.theme.TEXT._03};
`;

const Detail_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.4rem;
  width: 91.1%;
  gap: 1.7rem;
  align-items: center;
`;

const Info_wrap = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const Index = styled.span`
  position: relative;
  width: 5.3rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  color: ${(props) => props.theme.TEXT._02};
`;

const Content = styled.span`
  position: relative;
  width: fit-content;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  color: ${(props) => props.theme.TEXT._01};
`;

export default CheckMyInfo;
