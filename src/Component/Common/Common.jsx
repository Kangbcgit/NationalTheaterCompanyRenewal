import React, { Component } from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  &>img {
    position: absolute;
    z-index: -1;

    width: 100%;
    height: 100%;
    object-fit: cover;
    
    filter: brightness(.6);
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
