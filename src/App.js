/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import Logo from './animation/Logo';
import Main from './animation/Main';
import Create from './animation/Create';

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
