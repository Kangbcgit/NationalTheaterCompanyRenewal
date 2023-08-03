import React, { Component } from 'react';
import styled from 'styled-components'
const Parent =styled.div`
  position: absolute;
  right: 0;
  transform: translateX(50%) rotate(${props => props.deg || 0});
  transition: 1s;

  width: 1000px;
  height: 1000px;

  
`;
const Circle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  height: 500px;
  border: 1px solid #000;
  border-radius: 50%;

  &>div {
    position: absolute;
    left: -250px;
    top: 50%;
    transform-origin: 475px 0;

    font-size: 1.5rem;

    cursor: pointer;

    transition: 1s;
    &:nth-child(1) {
      transform: translateY(-50%) rotate(60deg);
    }
    &:nth-child(2) {
      transform: translateY(-50%) rotate(30deg);
    }
    &:nth-child(3) {
      transform: translateY(-50%);
    }
    &:nth-child(4) {
      transform: translateY(-50%) rotate(-30deg);
    }
    &:nth-child(5) {
      transform: translateY(-50%) rotate(-60deg);
    }
  }
`;

export default class CircleAni extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      deg: 0,
      step: 0,
      dummy:[1, 2, 3, 4, 5]
    }
  }

  Effected = (e) => {
    if (e.target.dataset.deg > this.state.deg) {
      this.setState({deg: this.state.deg + Math.abs(e.target.dataset.deg - this.state.deg), step: this.step + (Math.abs(e.target.dataset.deg - this.state.deg) / 30)});
    } else if (e.target.dataset.deg < this.state.deg) {
      this.setState({deg: this.state.deg - Math.abs(e.target.dataset.deg - this.state.deg), step: this.step - (Math.abs(e.target.dataset.deg - this.state.deg) / 30)});
    }
  }

  render() {
    return (
      <>
        <Parent deg={`${this.state.deg}deg`}>
          <Circle>
            {this.state.dummy.map((item, index) => {
              const itemCalc = item - 3;
              const degCalc = (itemCalc) * 30;
              return(
                <div data-deg={degCalc} style={{opacity: this.state.deg !== degCalc ? `${1 / ((Math.abs(this.state.deg - degCalc) / 30) + 1)}` : '1', fontSize: this.state.deg !== degCalc ? '1.5rem' : '1.7rem'}} onClick={this.Effected}>메뉴 {item}번 입니다.</div>//
              );
            })}
          </Circle>
        </Parent>
      </>
    )
  }
}
