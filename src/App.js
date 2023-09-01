import { Component, useEffect, useRef, useState } from 'react';
import './App.css';
import { GlobalStyle } from './Component/Common/Common';
import SectionAudition from './Component/SectionAudition/SectionAudition';
import SectionPlay from './Component/SectionPlay/SectionPlay';
import Footer from './Component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import _, { debounce, throttle } from 'lodash';

function App () {
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
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <GlobalStyle/>
            <SectionPlay isMobile={isMobile}/>
            <SectionAudition tossWrapperTopCalc={propsRectTop} tossWrapperTop={WrapperTop} isMobile={isMobile} currentWindowWidth={currentWindowWidth} />
          </>
        }>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}
export default App