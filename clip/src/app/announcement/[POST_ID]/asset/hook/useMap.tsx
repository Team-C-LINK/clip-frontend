import { use, useEffect, useRef, useState } from 'react';

function useMap(address?: string) {
  const mapRef = useRef<HTMLElement | null | any>(null);
  const markerRef = useRef<any>(null);
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >('');

  useEffect(() => {
    if (address) {
      setTimeout(() => {
        naver?.maps?.Service?.geocode(
          { query: address },
          (status, response) => {
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
          }
        );
      }, 300);
    }
  }, [address]);

  useEffect(() => {
    if (typeof myLocation !== 'string') {
      let currentPosition = [myLocation.latitude, myLocation.longitude];

      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
      });

      markerRef.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map: mapRef.current,
      });
    }
  }, [myLocation]);

  return {
    myLocation,
    markerRef,
  };
}

export default useMap;
