import { useEffect, useRef, useState } from 'react';

function useMap(address: string | undefined) {
  const mapRef = useRef<HTMLElement | null | any>(null);
  const markerRef = useRef<any>(null);
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >('');

  useEffect(() => {
    // geolocation 이용 현재 위치 확인, 위치 미동의 시 기본 위치로 지정

    if (address !== undefined)
      // 불필요한 geocode api 호출 차단
      naver.maps.Service?.geocode({ query: address }, (status, response) => {
        if (status === 200) {
          const item = response.v2.addresses[0];
          const point = new naver.maps.Point(
            parseFloat(item?.x),
            parseFloat(item?.y)
          );
          setMyLocation({ latitude: point.y, longitude: point.x });
        } else {
          window.alert('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
          setMyLocation({ latitude: 37.4862618, longitude: 127.1222903 });
        }
      });
  }, [address]);

  useEffect(() => {
    if (typeof myLocation !== 'string') {
      // 현재 위치 추적
      let currentPosition = [myLocation.latitude, myLocation.longitude];

      // Naver Map 생성
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
      });

      markerRef.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map: mapRef.current,
      });

      // naver.maps.Event.addListener(mapRef.current, 'click', (e: any) => {
      //   markerRef.current.setPosition(e.latlng);
      // });
    }
  }, [myLocation]);

  return {
    myLocation,
    markerRef,
  };
}

export default useMap;
