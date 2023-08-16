/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import Logo from './animation/Logo';
import Main from './animation/Main';
import Create from './animation/Create';
/* 수정해야할거

  1. 로딩 하는 도중에 마우스 스크롤 안돼도록 막아두기
  2. 새로고침하면 맨위 섹션으로 돌아가서 로딩되도록 

*/
function App() {
  const [logoVisible, setLogoVisible] = useState(true);

  const handleLogoAnimationComplete = () => {
    setLogoVisible(false);
  };

  return (
    <>
      {logoVisible && <Logo onAnimationComplete={handleLogoAnimationComplete} />}
      <Main></Main>
      <Create></Create>
    </>    
  );
}

export default App;
