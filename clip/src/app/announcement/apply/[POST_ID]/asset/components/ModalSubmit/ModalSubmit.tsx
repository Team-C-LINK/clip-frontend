import styled, { keyframes } from 'styled-components';
import cloudCheck from '../../image/cloudCheck.svg';

const ModalSubmit = ({ setModalState }: { setModalState: Function }) => {
  const handleModalState = () => {
    setModalState(false);
  };

  return (
    <>
      <Black_background onClick={handleModalState}></Black_background>
      <Modal_wrap>
        <Title>잠깐! 신청 완료 전 확인해주세요</Title>
        <Inner>
          <StyledListItem src={cloudCheck.src}>
            작성한 개인정보 및 스크리닝 정보와 실제 개인정보가 일치하지 않으면,
            신청 취소와 패널티를 획득할 수 있습니다.
          </StyledListItem>
          <StyledListItem src={cloudCheck.src}>
            약속한 날짜와 시간에 불참하시면 패널티가 부과될 수 있습니다.
          </StyledListItem>
          <StyledListItem src={cloudCheck.src}>
            해당 공고의 주의사항을 확인하였습니다.
          </StyledListItem>
        </Inner>
      </Modal_wrap>
    </>
  );
};

type ImageUlType = {
  src: string;
};

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const Black_background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

const Modal_wrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 30.9rem;
  bottom: 8rem;
  padding-top: 3rem;
  background: #fff;
  border-radius: 0.8rem 0.8rem 0rem 0rem;
  z-index: 2;
  animation: ${fadeInUp} 0.5s;
  gap: 3rem;
`;

const Title = styled.span`
  /* 잠깐! 신청 완료 전 확인해주세요 */

  position: relative;
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Header.H4};
  /* identical to box height, or 140% */
  text-align: center;

  color: #000000;
`;

const Inner = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 91.1%;
  height: fit-content;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B2};
  letter-spacing: 0.03em;
  color: ${(props) => props.theme.TEXT._01};
  overflow: auto;
  right: 2rem;
`;

const StyledListItem = styled.li<ImageUlType>`
  width: 90%;
  list-style-position: outside;
  background: url(${(props) => props.src}) no-repeat 10px 5px;
  list-style-type: none;    	
  padding: 0.5rem 0px 1.2rem 4rem;
`;

export default ModalSubmit;
