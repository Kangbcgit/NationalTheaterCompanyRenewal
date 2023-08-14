import './App.css';
import Logo from './animation/Logo';
import { gsap } from "gsap";
import { useEffect, useRef, useState,useLayoutEffect } from "react";
import styled from "styled-components";


// const SvgLog =styled(Logo)``;

// const Wrapper = styled.div`
//   width: 100%;
//   height:100vh;
//   display: flex; 
//   justify-content: center;
//   align-items: center;
//   &>svg{
//     width:50%; height:50%;
//   }
// `;

function App() {
  return (
      <Logo/>
  );
}

export default App;
