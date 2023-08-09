import React, { Component } from 'react'
import { css, styled } from 'styled-components';

const Wrapper = styled.div`
  width: calc(100vw - 10px);
  height: 200vh;
  background: #fff;
`;
const FrameSectionAudition = styled.div`
  position: sticky;
  top: 0;

  width: 100%;
  height: 50%;
  border: 1px solid rgb(120, 0, 255);
`;

//총 길이를 어떤 기준으로 선정해야할지 > ?  감으로 200vh정도롤 설정함
const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.itemsLenght}, clamp(0px, 26.0417vw, 500px));
  grid-auto-rows: clamp(0px, 26.0417vw, 500px);
  gap: clamp(0px, 3.125vw, 60px);
  height: clamp(0px, 26.0417vw, 500px);
  border: 1px solid #f00;

  
`;
const Item = styled.div`
  height: 100%;
  border: 1px solid #000;
`;

export default class SectionAudition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        (<></>),
        (<></>),
        (<></>),
        (<></>),
        (<></>),
        (<></>)
      ],
    }
  }
  render() {
    return (
      <Wrapper>
        <FrameSectionAudition>
          <Items itemsLenght={this.state.items.length}>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
          </Items>
        </FrameSectionAudition>
      </Wrapper>
    )
  }
}
