import { debounce } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';

const sizes = {
  mobile: 375,
}
const media = {
  mobile: `(max-width: ${sizes.mobile}px)`,
}

const WrapTop = styled.div`
  &>h4 {
    text-align: center;
    color: var(--white);
    font-size: var(--h4);
  }
  @media ${media.mobile} {
    &>h4 {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      font-size: var(--baseSize);
      margin-bottom: 9px;
    }
  }
`;
const FrameMap = styled.div`
  width: 100%;
  height: 100%;
`;

function MapNaver(props) {
  const mapElement = useRef(null);

  useEffect(() => {
    const loadNaverMap = () => {
      const script = document.createElement('script');
      script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=wwkp87l93f&submodules=geocoder';
      script.async = true;
      document.head.appendChild(script);
      script.onload = initMap;
      console.log('comp loadNaverMap');
    };

    const debounceLoadNaverMap = debounce(loadNaverMap, 2000);
    const initMap = () => {
      const { naver } = window;
      if (!mapElement.current || !naver) return;
      console.log(props.item)
      const location = new naver.maps.LatLng(props.mapList[1], props.mapList[2]);
      const mapOptions = {
        center: location,
        zoom: 30,
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT,
        },
      };
      const map = new naver.maps.Map(mapElement.current, mapOptions);
      new naver.maps.Marker({
        position: new naver.maps.LatLng(props.mapList[1], props.mapList[2]),
        map: map,
      });
      
      console.log('comp init');
    };
    const debounceInitMap = debounce(initMap, 2000);

    if (!window.naver) {
      debounceLoadNaverMap();
    } else {
      debounceInitMap();
    }
  }, []);
  return (
    <WrapTop>
      <h4><img src={`${process.env.PUBLIC_URL}/images/footer/theatreIcon.svg`}></img>{props.mapList[0]}</h4>
      <FrameMap ref={mapElement}></FrameMap>
      {/* <Map 
        center={{ lat: 33.5563, lng: 126.79581 }}   // 지도의 중심 좌표
        style={{ width: '100%', height: '100%' }} // 지도 크기
        level={3}                                   // 지도 확대 레벨
      >
      </Map>; */}
    </WrapTop>
  )
}

export default MapNaver;
