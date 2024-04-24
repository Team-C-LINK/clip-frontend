import styled from 'styled-components';
import useMap from '../../hook/useMap';
import Title from '../Title/Title';

const Map = ({ address }: { address: string | undefined }) => {
  useMap(address);

  return (
    <>
      <Wrap>
        <Title>연구 장소</Title>
        <div>
          <MapBox id="map"></MapBox>
          <Address>
            {address}
            <Purple>지도보기</Purple>
          </Address>
        </div>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  height: fit-content;
  z-index: 0;
`;

const MapBox = styled.div`
  width: 91.1dvw;
  height: 14.4rem;
  border-radius: 0.4rem;
`;

const Address = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 91.1dvw;
  height: 3.4rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B4};
  background: ${(props) => props.theme.BACKGROUND._01};
  color: ${(props) => props.theme.TEXT._01};
  border-radius: 0.4rem;
`;

const Purple = styled.span`
  color: ${(props) => props.theme.PURPLE._01};
`;

export default Map;
