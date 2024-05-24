import styled from 'styled-components';
import Image from 'next/image';
import arrow_right from '@/app/SharedComponent/asset/image/arrow_right.svg';
import TilteWithIndex from '../TitleWithIndex/TitleWithIndex';
import getUser from '@/app/api/get-user';
import { useQuery } from '@tanstack/react-query';
import UserInfoType from '@/app/type/UserInfoType';
import phoneNumberFormatter from '@/app/join/auth/utils/phoneNumberFormatter';

const CheckMyInfo = () => {
  const { data: info } = useQuery<UserInfoType>({
    queryKey: ['user'],
    queryFn: getUser,
  });

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
            <Index>이름</Index>
            <Content>{info?.name}</Content>
          </Info_wrap>
          <Info_wrap>
            <Index>성별</Index>
            <Content>{info?.gender}</Content>
          </Info_wrap>
          <Info_wrap>
            <Index>출생년도</Index>
            <Content>{info?.birthYear}년</Content>
          </Info_wrap>
          <Info_wrap>
            <Index>거주지</Index>
            <Content>{info?.address}</Content>
          </Info_wrap>
          <Info_wrap>
            <Index>전화번호</Index>
            <Content>{phoneNumberFormatter(info?.number!)}</Content>
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
  width: 100%;
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
  width: 100%;
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
