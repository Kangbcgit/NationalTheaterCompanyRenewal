/* eslint-disable */
import { gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect} from "react";
import styled from "styled-components";
/* 
1.크리에이트 섹션 도달하면 고정되고
2.고정된 상태에서 스크롤 하면
3.포스터가 한장씩 날라감
4.단 날라가는 효과는 스크롤 내리면서 같이 날라가는게 아니라, 스크롤하고 한장 바로 날라가게

add class를 사용 해야 할지도 모름..
*/
const CreateWrap = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;

`;
const CardUl = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &>li{
    position:absolute;
    }
`;
function Create() {
  return (
    <CreateWrap>
      <CardUl>
        <li><img src={`${process.env.PUBLIC_URL}/create/poster-작가.png`} /></li>
        <li><img src={`${process.env.PUBLIC_URL}/create/poster-연출.png`} /></li>
        <li><img src={`${process.env.PUBLIC_URL}/create/poster-희곡.png`} /></li>
      </CardUl>
    </CreateWrap>
  )
}

export default Create