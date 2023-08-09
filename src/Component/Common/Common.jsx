import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    ::-webkit-scrollbar {
      width: 10px; /* 스크롤바 너비 조정 */
      height: 0;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgb(120, 0, 255);
      border-radius: 5px;
    }
  } 
`;