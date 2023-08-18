import { Component, useEffect, useState } from 'react';
import './App.css';
import { GlobalStyle } from './Component/Common/Common';
import SectionAudition from './Component/SectionAudition/SectionAudition';
import SectionPlay from './Component/SectionPlay/SectionPlay';
import Footer from './Component/Footer/Footer';

function App () {
  const [WrapperTop, setWrapperTop] = useState(0);
  const propsRectTop = (Wrapper) => {
    const WrapperTop = Wrapper.getBoundingClientRect().top;
    setWrapperTop(WrapperTop);
  }

  useEffect(() => {
    
  },[]);

  return (
    <>
      <GlobalStyle/>
      <SectionPlay/>
      <SectionAudition tossWrapperTopCalc={propsRectTop} tossWrapperTop={WrapperTop}/>
      <Footer/>
    </>
  );
}
export default App