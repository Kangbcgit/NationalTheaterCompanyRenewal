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
  const [wheelLock, setWheelLock] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [currentWindowWidth, setCurrentWindowWidth] = useState(0);
  const propsRectTop = (Wrapper) => {
    const WrapperTop = Wrapper.getBoundingClientRect().top;
    setWrapperTop(WrapperTop);
  }
  const currentScroll = useRef(0);
  const handleScroll = e => {
    if(!wheelLock) return;
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
  }
  const preventDefaultScroll = (e) => {
    if (!wheelLock) return; 
      e.preventDefault();
    };
  const heightCheck = (target) => {
    const height = target.scrollHeight;
    const windowHeight = window.innerHeight;
    if (height > windowHeight) {
      const top = target.getBoundingClientRect().top;
      if (top <= 0 && -top <= target.scrollHeight) {
        setWheelLock(false);
        console.log('휠 풀림');
      } else {
        setWheelLock(true);
        console.log('휠 잠김')
      }
    }
  }
  const scrollWheelController = e => {
    handleScroll(e);
  }
  const throttledHandleScroll = throttle(scrollWheelController, 1000, {trailing:false});
  

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
  // useEffect(() => {
  //   if(!isMobile) {
  //     window.addEventListener("wheel", preventDefaultScroll, { passive: false });
  //     window.addEventListener("wheel", throttledHandleScroll);
  //   }

  //   return () => {
  //     window.removeEventListener("wheel", preventDefaultScroll);
  //     window.removeEventListener("wheel", throttledHandleScroll);
  //   }
  // },[isMobile,wheelLock]);
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <GlobalStyle/>
            <SectionPlay isMobile={isMobile} start={heightCheck}/>
            <SectionAudition tossWrapperTopCalc={propsRectTop} tossWrapperTop={WrapperTop} isMobile={isMobile} currentWindowWidth={currentWindowWidth} wheelLockEvent={heightCheck} wheelLock={wheelLock} />
          </>
        }>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}
export default App