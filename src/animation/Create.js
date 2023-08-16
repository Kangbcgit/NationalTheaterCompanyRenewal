import React from 'react'
import { gsap} from "gsap";
import { useEffect} from "react";
import styled from "styled-components";
import { ReactComponent as Hamburger } from '../create/01poster_작가.svg'
const CreateWrap = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Create() {
  return (
    <CreateWrap>Create</CreateWrap>
  )
}

export default Create