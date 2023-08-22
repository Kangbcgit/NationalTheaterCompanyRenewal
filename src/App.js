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
  const propsRectTop = (Wrapper) => {
    const WrapperTop = Wrapper.getBoundingClientRect().top;
    setWrapperTop(WrapperTop);
  }
  const currentScroll = useRef(0);

  const throttledHandleScroll = throttle((e) => {
    console.log("throttled");
    if (e.deltaY > 0) {
      currentScroll.current += window.innerHeight;
    } else if (e.deltaY < 0) {
      currentScroll.current = Math.max(
        0,
        currentScroll.current - window.innerHeight
      );
    }
    window.scrollTo({ top: currentScroll.current, behavior: "smooth" });
  }, 1000, {trailing:false});

  useEffect(() => {
    const preventDefaultScroll = (e) => {
      e.preventDefault();
    };

    window.addEventListener("wheel", throttledHandleScroll, { passive: true });
    window.addEventListener("wheel", preventDefaultScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", throttledHandleScroll);
      window.removeEventListener("wheel", preventDefaultScroll);
    };
  }, []);

  const [pauseWheelLock, setPauseWheelLock] = useState(false);
  const wheelLockController = (target) => {
    if (target.scrollHeight >= window.innerHeight) {
      setPauseWheelLock(true);
    }
  }

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <GlobalStyle/>
            <SectionPlay/>
            <SectionAudition tossWrapperTopCalc={propsRectTop} tossWrapperTop={WrapperTop}/>
          </>
        }>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}
export default App