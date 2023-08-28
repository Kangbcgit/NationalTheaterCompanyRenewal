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
  const [wheelLock, setWheelLock] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentWindowWidth, setCurrentWindowWidth] = useState(0);
  const propsRectTop = (Wrapper) => {
    const WrapperTop = Wrapper.getBoundingClientRect().top;
    setWrapperTop(WrapperTop);
  }
  const currentScroll = useRef(0);

  const throttledHandleScroll = throttle((e) => {
    if (e.deltaY > 0) {
      if (document.body.scrollHeight <= currentScroll + 100) return;
      currentScroll.current += window.innerHeight;
    } else if (e.deltaY < 0) {
      if (0 >= window.scrollY) return;
      currentScroll.current = Math.max(
        0,
        currentScroll.current - window.innerHeight
      );
    }
    window.scrollTo({ top: currentScroll.current, behavior: "smooth" });
  }, 1000, {trailing:false});

  useEffect(() => {
    mobileCensor();
    window.addEventListener("resize", mobileCensor);

    return () => {
      window.removeEventListener("resize", mobileCensor);
    };
  }, []);
  useEffect(() => {
    const preventDefaultScroll = (e) => {
      e.preventDefault();
    };
    if(!isMobile) {
      window.addEventListener("wheel", throttledHandleScroll, { passive: true });
      window.addEventListener("wheel", preventDefaultScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", throttledHandleScroll);
      window.removeEventListener("wheel", preventDefaultScroll);
    }
  },[isMobile])

  const [pauseWheelLock, setPauseWheelLock] = useState(false);
  const wheelLockController = (target) => {
    if (target.scrollHeight >= window.innerHeight) {
      setPauseWheelLock(true);
    }
  }
  const mobileCensor = () => {
    if(window.innerWidth <= 375) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    setCurrentWindowWidth(window.innerWidth);
  }

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <GlobalStyle/>
            <SectionPlay isMobile={isMobile}/>
            <SectionAudition tossWrapperTopCalc={propsRectTop} tossWrapperTop={WrapperTop} isMobile={isMobile} currentWindowWidth={currentWindowWidth}/>
          </>
        }>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}
export default App