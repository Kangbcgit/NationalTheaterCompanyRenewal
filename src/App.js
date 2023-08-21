/* eslint-disable */
import React, { useState } from 'react';
import { Router, Switch, Route, Link } from "react-router-dom";

import { GlobalStyle } from './Component/Common/Common';
import "./Header.scss";

import Logo from './Component/Intro/Logo';
import Header from './Component/Header';
import SectionCatchPhrase from './Component/SectionCatchPhrase';
import SectionPlay from './Component/SectionPlay/SectionPlay';
import SectionAudition from './Component/SectionAudition/SectionAudition';
import Create from './Component/Create/Create';
import CttBoard from "./Component/CttBoard";
import Footer from './Component/Footer/Footer';

/* 수정해야할거

  1. 로딩 하는 도중에 마우스 스크롤 안돼도록 막아두기
  2. 새로고침하면 맨위 섹션으로 돌아가서 로딩되도록 

*/
function App() {
  const [logoVisible, setLogoVisible] = useState(true);
  const handleLogoAnimationComplete = () => {
    setLogoVisible(false);
  };

  const [WrapperTop, setWrapperTop] = useState(0);
  const propsRectTop = (Wrapper) => {
    const WrapperTop = Wrapper.getBoundingClientRect().top;
    setWrapperTop(WrapperTop);
  }
  return (
    <>
      <GlobalStyle/>
      {logoVisible && <Logo onAnimationComplete={handleLogoAnimationComplete} />}
      <Header />
      <SectionCatchPhrase />
      <SectionPlay/>
      <SectionAudition tossWrapperTopCalc={propsRectTop} tossWrapperTop={WrapperTop}/>
      <div style={{overflowX:'hidden'}}>
        <Create></Create>
        <CttBoard></CttBoard>
        <Footer/>
      </div>
    </>    
  );
}

export default App;
