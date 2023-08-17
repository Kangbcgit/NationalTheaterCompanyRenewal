import React, { Component } from 'react'
import { styled } from 'styled-components'
import MapNaver from './MapNaver';


const FrameFooter = styled.footer`
  height: 100vh;
  background: #000;
  overflow: hidden;
`;
const WrapMaps = styled.div`
  display: grid;
  grid-template-columns: repeat(2, clamp(0px, 42.1875vw, 810px));
  grid-auto-rows: 466px;
  column-gap: clamp(0px, 3.0208vw, 58px);

  width: clamp(0px, 87.3958vw, 1678px);

  margin: clamp(0px, 15.2778vw ,220px) auto 0;
`;

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapList: [
        ['백성희장민호 극장 · 소극장 판', 37.552830916828576, 126.96829664985077],
        ['명동예술극장', 37.563999, 126.9841738]
      ]
    }
  }
  render() {
    return (
      <FrameFooter>
        <WrapMaps>
        {this.state.mapList.map((item, index) => {
          return (<MapNaver mapList={item}></MapNaver>)
        })}
        </WrapMaps>
      </FrameFooter>
    )
  }
}
