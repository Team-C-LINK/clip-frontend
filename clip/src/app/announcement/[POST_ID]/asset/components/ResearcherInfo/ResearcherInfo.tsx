import styled from 'styled-components';
import Title from '../Title/Title';
import clippy from '@/../public/clippy.png';
import PostType from '@/app/type/PostType';

const ResearcherInfo = ({ info }: { info?: PostType }) => {
  return (
    <>
      <Wrap>
        <Title>연구자 정보</Title>
        <Inner>
          <Profile_wrapper>
            <Profile_right_wrapper>
              <Profile_nickname>{info?.researcherName}</Profile_nickname>
              <Profile_email>{info?.researcherAffiliation}</Profile_email>
            </Profile_right_wrapper>
          </Profile_wrapper>
          <Detail_wrap>
            <Info_wrap>
              <Index>이메일</Index>
              <Content>{info?.researcherEmail}</Content>
            </Info_wrap>
            <Info_wrap>
              <Index>연구분야</Index>
              <Content>{info?.researchField}</Content>
            </Info_wrap>
            <Info_wrap>
              <Index>대표주소</Index>
              <Content>{info?.researcherAddress}</Content>
            </Info_wrap>
          </Detail_wrap>
        </Inner>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Profile_wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: fit-content;

  gap: 1rem;
`;

const Profile_right_wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Profile_img = styled.img`
  border: 0.1rem solid #d9d9d9;
  height: 5.6rem;
  width: 5.6rem;
  background: url(${(props) => props.src});
  border-radius: 50%;
`;

const Profile_nickname = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B4};
  color: #252525;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Profile_email = styled.span`
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B4};

  color: #6c6c6c;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const Detail_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.BACKGROUND._01};
  border-radius: 0.4rem;
  width: 100%;
  gap: 0.8rem;
  padding: 0.8rem 0rem;
  align-items: center;
`;

const Info_wrap = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

const Index = styled.span`
  position: relative;
  width: 5rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B4};
  color: ${(props) => props.theme.TEXT._02};
`;

const Content = styled.span`
  position: relative;
  width: fit-content;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B4};
  color: ${(props) => props.theme.TEXT._01};
`;

export default ResearcherInfo;
