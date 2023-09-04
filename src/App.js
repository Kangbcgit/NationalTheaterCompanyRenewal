/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react'; //
import { Route, Routes,useLocation } from "react-router-dom";//

import _, { debounce, throttle } from 'lodash';//

/* style */
import { GlobalStyle } from './Component/Common/Common';
import "./Component/Header/Header.scss";
import "./Component/CatchPhrase/SectionCatchPhrase.scss";
import "./Component/CttBoard/CttBoard.scss";
import "./Pages/Sub02GreenTicket/Sub02GreenTicket.scss";

/* component */
import Logo from './Component/Intro/Logo';
import Header from "./Component/Header/Header";
import SectionCatchPhrase from "./Component/CatchPhrase/SectionCatchPhrase";
import SectionPlay from './Component/SectionPlay/SectionPlay';
import SectionAudition from './Component/SectionAudition/SectionAudition';
import Create from './Component/Create/Create';
import CttBoard from "./Component/CttBoard/CttBoard";
import Footer from './Component/Footer/Footer';

import Sub01Create from './Pages/Sub01Create';
import Sub02GreenTicket from "./Pages/Sub02GreenTicket/Sub02GreenTicket";


/* 수정해야할거

  1. 로딩 하는 도중에 마우스 스크롤 안돼도록 막아두기
  2. 새로고침하면 맨위 섹션으로 돌아가서 로딩되도록 
  3. 다른 페이지에 로딩 화면 안나오게
  
*/
function App() {
  
  const [logoVisible, setLogoVisible] = useState(true);
  const handleLogoAnimationComplete = () => {
    setLogoVisible(false);
  };

  const [WrapperTop, setWrapperTop] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentWindowWidth, setCurrentWindowWidth] = useState(0);
  const propsRectTop = (Wrapper) => {
    const WrapperTop = Wrapper.getBoundingClientRect().top;
    setWrapperTop(WrapperTop);
  }
  

  const mobileCensor = () => {
    if(window.innerWidth <= 375) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    setCurrentWindowWidth(window.innerWidth);
  }


  useEffect(() => {
    mobileCensor();
    window.addEventListener("resize", mobileCensor);

    return () => {
      window.removeEventListener("resize", mobileCensor);
    };
  }, []);

  //Header 스크롤 이벤트
  const [headerVisible, setHeaderVisible] = useState(true);
  const [headerColor, setHeaderColor] = useState(false);
  const location = useLocation();

  const catchRef = useRef(null);
  const noneHeader = useRef(null);
  const createRef = useRef(null);
  const cttRef = useRef(null);

  // handleScroll 함수
  const handleScroll = () => {
    if (
      window.scrollY > noneHeader.current.offsetTop &&
      window.scrollY < createRef.current.offsetTop
    ) {
      setHeaderVisible(false);
      console.log("false");
    } else if (window.scrollY < noneHeader.current.offsetTop) {
      setHeaderVisible(true);
      console.log("true");
    } else if (window.scrollY > createRef.current.offsetTop) {
      setHeaderVisible(true);
      console.log("true");
    } else {
      setHeaderVisible(null);
      console.log("n");
    }
  };
  //chgHeaderColor 함수
  const chgHeaderColor = () => {
    if (
      window.scrollY > noneHeader.current.offsetTop &&
      window.scrollY < createRef.current.offsetTop
    ) {
      setHeaderColor(false);
      console.log("white");
    } else if (window.scrollY < noneHeader.current.offsetTop) {
      setHeaderColor(false);
      console.log("white");
    } else if (
      window.scrollY > createRef.current.offsetTop &&
      window.scrollY < cttRef.current.offsetTop
    ) {
      setHeaderColor(true);
      console.log("black");
    } else if (window.scrollY > cttRef.current.offsetTop) {
      setHeaderColor(false);
      console.log("white");
    } else {
      setHeaderColor(null);
      console.log("n");
    }
    console.log("스크롤양: ", window.scrollY);
    console.log("headerVisible: ", headerVisible);
  };

  useEffect(() => {
    if (catchRef.current) {
      const height = catchRef.current.offsetTop;
      console.log("catchRef 시작점:", height);
    }

    if (noneHeader.current) {
      const height = noneHeader.current.offsetTop;
      console.log("noneHeader 시작점:", height);
    }
    if (cttRef.current) {
      const height = createRef.current.offsetTop;
      console.log("createRef 시작점:", height);
    }
  }, []);

  //서브페이지는 스크롤이벤트 없음
  useEffect(() => {
    // pathname이 "/"인 경우에만 스크롤 이벤트 리스너를 등록합니다.
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("scroll", chgHeaderColor);
    }
  
    // 컴포넌트가 언마운트되거나 pathname이 "/"이 아닐 때 스크롤 이벤트 리스너를 해제합니다.
    return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("scroll", chgHeaderColor);
    };
  }, [location.pathname]);
  


  return (
    <>
      <GlobalStyle/>
      
      <Header headerVisible={headerVisible} headerColor={headerColor} />

      <Routes>
        <Route path='/' element={    
          <>
            {logoVisible && <Logo onAnimationComplete={handleLogoAnimationComplete} />}
            <div ref={catchRef}>
                <SectionCatchPhrase />
            </div>

            <div ref={noneHeader}>
              <SectionPlay isMobile={isMobile}/>
              <SectionAudition tossWrapperTopCalc={propsRectTop} tossWrapperTop={WrapperTop} isMobile={isMobile} currentWindowWidth={currentWindowWidth} />
            </div>
            <div style={{overflow:'hidden'}} ref={createRef}>
                  <Create></Create>
            </div>
            <div ref={cttRef} >
                <CttBoard />
            </div>
          </>    
        }>
        </Route>
        <Route path='/Sub01Create' element={<Sub01Create/>}/>
        <Route path="/Sub02GreenTicket" element={<Sub02GreenTicket />} />
      </Routes>
      <Footer/>
    </>    
  );
}

export default App;
