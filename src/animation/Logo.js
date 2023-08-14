import React from 'react'
import { gsap, Power2, Bounce } from "gsap";
import { useEffect} from "react";
import styled from "styled-components";

const Intro = styled.div``;
const SvgWrap = styled.div``;
const SvgLineFirst = styled.path`
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
`;
const SvgLineSecond = styled.path`
  stroke-dasharray: 100;
  stroke-dashoffset: -10;
`;
const SvgLineThird= styled.path`
  stroke-dasharray: 100;
  stroke-dashoffset:-13;
`;
const HiddenRect = styled.rect.attrs({
  width: "100%",
  height: "16px",
  x:"0", 
  y:"25",
  fill: 'white',
})``;

const Gock = styled.path.attrs({
  transform: 'translate(-932 -528)'
})``;

const Lib = styled.path.attrs({
  transform: 'translate(-932 -528)'
})``;
const Guk = styled.path.attrs({
  transform: 'translate(-932 -528)'
})``;
const Dan = styled.path.attrs({
  transform: 'translate(-932 -528)'
})``;

const Container = styled.div`
    width: 100%;
    height:100vh;
    display: flex; 
    position: relative;
    justify-content: center;
    align-items: center;
    ${Intro}{
      width: 100%; height: 100%;
    }
    ${SvgWrap}{
      width: 100%; height: 100%;
      display: flex; 
      justify-content: center;
      align-items: center;
    }
    ${Intro}>${SvgWrap}>svg{
      width: 50%; height: 50%;
      border: 1px solid red;
    }
    ${Intro}>${SvgWrap}>svg>.cls-1{}
    ${Intro}>${SvgWrap}>svg>.cls-2{fill:none;stroke:#656263;stroke-miterlimit:10;stroke-width:2px;}
`;

function Logo() {
  useEffect(() => {
    gsap.to('#line01', { strokeDashoffset: 0, duration: 6, delay: 0 });
    gsap.to('#line02', { strokeDashoffset: 0, duration: 0.18, delay: 0 });
    gsap.to('#line03', { strokeDashoffset: 0, duration: 0.15, delay: 0 });
    gsap.to('#line04', { strokeDashoffset: 0, duration: 6, delay: 0.15 });
    gsap.to('#line05', { strokeDashoffset: 0, duration: 0.18, delay: 0.15 });
    gsap.to('#line06', { strokeDashoffset: 0, duration: 0.15, delay: 0.15 });
    gsap.to('#line07', { strokeDashoffset: 0, duration: 6, delay: 0.3 });
    gsap.to('#line08', { strokeDashoffset: 0, duration: 0.18, delay: 0.3 });
    gsap.to('#line09', { strokeDashoffset: 0, duration: 0.15, delay: 0.3 });
    gsap.to('#line10', { strokeDashoffset: 0, duration: 6, delay: 0.45 });
    gsap.to('#line11', { strokeDashoffset: 0, duration: 0.18, delay: 0.45 });
    gsap.to('#line12', { strokeDashoffset: 0, duration: 0.15, delay: 0.45 });
    gsap.to('#line13', { strokeDashoffset: 0, duration: 6, delay: 0.6 });
    gsap.to('#line14', { strokeDashoffset: 0, duration: 0.18, delay: 0.6 });
    gsap.to('#line15', { strokeDashoffset: 0, duration: 0.15, delay: 0.6 });
    gsap.to('#line16', { strokeDashoffset: 0, duration: 6, delay: .75 });
    gsap.to('#line17', { strokeDashoffset: 0, duration: 0.18, delay: .75 });
    gsap.to('#line18', { strokeDashoffset: 0, duration: 0.15, delay: .75 });
    gsap.to('#gock', { y:'-512.03', duration: .4,delay: 1, ease: "Power2.easeOut"});
    gsap.to('#lib', {y:'-512.03', duration: .4,delay: 1.2, ease: "Power2.easeOut"});
    gsap.to('#guk', {y:'-512.03', duration: .4,delay: 1.4, ease: "Power2.easeOut"});
    gsap.to('#dan', {y:'-512.03', duration: .4,delay: 1.6, ease: "Power2.easeOut"});
  }, []);


  return (
    <Container>
      <Intro>
        <SvgWrap>
          <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 56 56.61">

            <Gock id="gock" className="cls-1" d="M944.7,561v-1.1c0-.1-.1-.3-.2-.3h-1.9a25.61,25.61,0,0,0,.3-3.9c0-.8-.3-1-1-1h-7.6c-.2,0-.3,0-.3.3v1.2c0,.3.1.3.3.3h6.4c.4,0,.4.1.4.4a13.33,13.33,0,0,1-.3,2.8h-8.5c-.3,0-.3.1-.3.3v1.1c0,.1.1.3.2.3h5.2v1.9H934c-.2,0-.3,0-.3.3v1c0,.1.1.3.2.3h6.7a.22.22,0,0,1,.2.2v3.2c0,.1.1.3.2.3h1.5c.1,0,.3-.1.3-.2v-4.1c0-.8-.2-1.1-1-1.1h-2.4v-1.9h5a.32.32,0,0,0,.3-.3Z" />

            <Lib id="lib" className="cls-1" d="M955.9,562.13h1.4c.1,0,.3-.1.3-.2v-7.2c0-.2,0-.3-.3-.3h-1.4c-.2,0-.3,0-.3.3v7.1Q955.6,562,955.9,562.13Zm1.5.8H956c-.1,0-.3.1-.3.2v1.1h-4.4v-1c0-.1-.1-.3-.2-.3h-1.5c-.1,0-.2.1-.3.2v4.2c0,.9.2,1.1,1.1,1.1h6.1c.9,0,1.1-.3,1.1-1v-4.2C957.6,562.93,957.5,562.93,957.4,562.93Zm-1.8,2.7v.9a.22.22,0,0,1-.2.2h-4c-.1,0-.1-.1-.1-.2v-.9Zm-4.2-8.1h-3.1c-.6,0-.8.2-.8.8v2.5a.8.8,0,0,0,1,1,33.89,33.89,0,0,0,4.5-.2q.9-.15,1.5-.3c.2,0,.3-.1.2-.3l-.2-1c0-.2,0-.2-.3-.2a24.87,24.87,0,0,1-4.7.4.22.22,0,0,1-.2-.2v-.8a.22.22,0,0,1,.2-.2h3c.7,0,1-.2,1-1v-2.1c0-.8-.1-1-1-1h-4.7c-.2,0-.3,0-.3.3v1.1c0,.1.1.3.2.3h3.7c.2,0,.2,0,.2.2v.6C951.6,557.53,951.6,557.53,951.4,557.53Z" />

            <Guk id="guk" className="cls-1" d="M973.3,561.33v-1.1c0-.1-.1-.3-.2-.3h-1.9a26.93,26.93,0,0,0,.3-4c0-.8-.3-1-1-1h-7.7c-.2,0-.3,0-.3.3v1.2c0,.3.1.3.3.3h6.4c.4,0,.4.1.4.4a14.28,14.28,0,0,1-.3,2.9h-8.4c-.1,0-.3.1-.3.2v1.2c0,.2,0,.3.3.3H973C973.2,561.63,973.3,561.53,973.3,561.33Zm-3.6,7.3h1.4c.1,0,.3-.1.3-.2v-4.3c0-.8-.2-1.1-1-1.1h-7.8c-.2,0-.3,0-.3.3v1.2c0,.1.1.3.2.3h6.7a.22.22,0,0,1,.2.2v3.4C969.4,568.53,969.5,568.63,969.7,568.63Z"/>

            <Dan id="dan" className="cls-1" d="M986.3,568.13v-1.2c0-.1-.1-.3-.2-.3h-6.6c-.1.1-.1,0-.1-.1v-2.4c0-.1-.1-.3-.2-.3h-1.5c-.1,0-.3.1-.3.2v3.3c0,.8.2,1.1,1,1.1h7.7C986.2,568.43,986.3,568.43,986.3,568.13Zm1.2-9.5h-1.7v-3.9c0-.1-.1-.3-.2-.3h-1.5c-.1,0-.3.1-.3.2v9.5c0,.1.1.3.2.3h1.5c.1,0,.3-.1.3-.2v-3.9h1.7c.2,0,.3,0,.3-.3v-1.2C987.8,558.63,987.7,558.63,987.5,558.63Zm-9.4-1.7h3.7c.1,0,.3-.1.3-.2v-1.3c0-.1-.1-.3-.2-.3h-5c-.8,0-1,.1-1,.9v5.4c.1.6.4.8,1,.8a30.39,30.39,0,0,0,6-.5c.2,0,.2-.1.2-.3v-.1l-.1-.7c0-.2-.1-.3-.4-.2a22.82,22.82,0,0,1-4.5.4c-.2,0-.2-.1-.2-.2v-3.4C977.9,557,977.9,556.93,978.1,556.93Z" />
            
            <HiddenRect/>
            <rect id="_--" data-name="--" className="cls-1" x="0.8" y="33.61" width="55.2" height="0.5"/>

            <SvgLineThird id="line18" className="cls-2" d="M986.24,538c0-.2,0-.39,0-.59a23.39,23.39,0,0,0-2.78-11" transform="translate(-932 -512.03)"/>

            <SvgLineSecond id="line17" className="cls-2" d="M979.05,538a17.72,17.72,0,0,0-2-7.94" transform="translate(-932 -512.03)"/>

            <SvgLineFirst id="line16" className="cls-2" d="M971.57,533.25a11.94,11.94,0,0,1,1,4.75" transform="translate(-932 -512.03)"/>

            <SvgLineThird id="line15" className="cls-2" d="M982.42,524.58a25.27,25.27,0,0,0-8.21-7.85" transform="translate(-932 -512.03)"/>

            <SvgLineSecond id="line14" className="cls-2" d="M976.05,528.26a18.45,18.45,0,0,0-5.42-5.32" transform="translate(-932 -512.03)"/>

            <SvgLineFirst id="line13" className="cls-2" d="M967.55,528.26a12.15,12.15,0,0,1,3,3.16" transform="translate(-932 -512.03)"/>

            <SvgLineThird id="line12" className="cls-2" d="M972.38,515.74A26.74,26.74,0,0,0,961.59,513" transform="translate(-932 -512.03)"/>

            <SvgLineSecond id="line11" className="cls-2" d="M968.81,521.92a18.71,18.71,0,0,0-7.22-1.87" transform="translate(-932 -512.03)"/>

            <SvgLineFirst id='line10' className="cls-2" d="M961.59,526.05a11.91,11.91,0,0,1,4.17,1.15" transform="translate(-932 -512.03)"/>

            <SvgLineThird id="line09" className="cls-2" d="M959.51,513a26.63,26.63,0,0,0-10.87,2.76" transform="translate(-932 -512.03)"/>

            <SvgLineSecond id="line08" className="cls-2" d="M959.51,520.05a18.66,18.66,0,0,0-7.3,1.91" transform="translate(-932 -512.03)"/>

            <SvgLineFirst id="line07" className="cls-2" d="M955.26,527.24a12,12,0,0,1,4.25-1.19" transform="translate(-932 -512.03)"/>

            <SvgLineThird id="line06" className="cls-2" d="M946.82,516.78a25.24,25.24,0,0,0-8.17,7.85" transform="translate(-932 -512.03)"/>

            <SvgLineSecond id="line05" className="cls-2" d="M950.4,523a18.47,18.47,0,0,0-5.38,5.33" transform="translate(-932 -512.03)"/>

            <SvgLineFirst id="line04" className="cls-2" d="M950.5,531.47a11.92,11.92,0,0,1,3-3.15" transform="translate(-932 -512.03)"/>

            <SvgLineThird id="line03" className="cls-2" d="M937.6,526.42a23.28,23.28,0,0,0-2.75,11c0,.2,0,.39,0,.59" transform="translate(-932 -512.03)"/>

            <SvgLineSecond id="line02" className="cls-2" d="M944,530.11a17.62,17.62,0,0,0-1.93,7.89" transform="translate(-932 -512.03)"/>

            <SvgLineFirst id='line01' className="cls-2 line01" d="M948.55,538a11.86,11.86,0,0,1,1-4.7" transform="translate(-932 -512.03)"/>

          </svg>
        </SvgWrap>
      </Intro>
  </Container>
  )
}

export default Logo