import React, { Component } from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  &>.wrapImg {
    position: absolute;
    width: 100%;
    height: 100%;

    overflow: hidden;
    &.activeUp {
      animation: clipUp 1s forwards;
      @keyframes clipUp {
        0% {
          clip-path: polygon(-100% 0, 100% 0, 100% 200%, 0 100%);
        }
        100% {
          clip-path: polygon(100% 0, 100% 0, 100% 0, 100% 0);
        }
      }
    }
    &.activeDown {
      animation: clipDown 1s forwards;

      @keyframes clipDown {
      0% {
        clip-path: polygon(0 -100%, 100% 0, 200% 100%, 0 100%);
      }
      100% {
        clip-path: polygon(0 100%, 0 100%, 0 100%, 0 100%);
      }
    }
    }
    &>img {
      position: absolute;
      z-index: -1;

      width: 100%;
      height: 100%;
      object-fit: cover;
      
      filter: brightness(.6);
    }
  }
`;

export default class Common extends Component {
  render() {
    return (
      <>

      </>
    )
  }
}
