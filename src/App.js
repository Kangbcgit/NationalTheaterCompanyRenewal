/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import Logo from './animation/Logo';
import Main from './animation/Main';

function App() {
  const [logoVisible, setLogoVisible] = useState(true);

  const handleLogoAnimationComplete = () => {
    setLogoVisible(false);
  };

  return (
    <>
      {logoVisible && <Logo onAnimationComplete={handleLogoAnimationComplete} />}
      <Main></Main>
    </>    
  );
}

export default App;
