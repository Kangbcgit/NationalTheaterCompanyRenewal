import React, { Component } from 'react';
import styled from 'styled-components'
import { Wrapper } from './../Common/Common'
import { throttle } from 'lodash'

const Parent =styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(65%, -50%) rotate(${props => props.deg || 0});
  transition: 1s;

  width: 1000px;
  height: 1000px;
`;
const Circle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 1s;

  width: 500px;
  height: 500px;
  border: 15px solid #ff00008b;
  border-radius: 50%;

  &>div {
    position: absolute;
    left: -250px;
    top: 50%;
    transform-origin: 475px 0;

    font-size: 1.5rem;
    color: #fff;

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
      deg: 0, // 현재 부모 rotate deg
      step: 0, //중앙으로부터 멀어진 양 max 2
      dummy:[1, 2, 3, 4, 5], //임시로 map 돌리기 위한~ item 번호들
      frontView: 3,
      backView: 3,
      images: [
        'images/play/play1.png',
        'images/play/play2.png',
        'images/play/play3.png',
        'images/play/play4.png',
        'images/play/play5.png',
      ],
      isActiveUp: false,
      isActiveDown: false,
    }
  }
  componentDidMount() {
    this.throttledEffected = throttle(this.Effected, 1000, {
      trailing: false,
    });
  }
  Effected = e => {
    const { deg } = this.state;
    const { dataset } = e.target;
    if (dataset.deg > deg) {
      this.setState({deg: deg + Math.abs(dataset.deg - deg), step: this.step + (Math.abs(dataset.deg - deg) / 30)});
      this.imageUpAnimation(e);
    } else if (dataset.deg < deg) {
      this.setState({deg: deg - Math.abs(dataset.deg - deg), step: this.step - (Math.abs(dataset.deg - deg) / 30)});
      this.imageDownAnimation(e);
    }
  }
  imageUpAnimation = e => {
    this.setState({backView: +e.target.dataset.order, isActiveUp: !this.state.isActiveUp});
    setTimeout(() => {
      this.setState({frontView: +e.target.dataset.order, isActiveUp: !this.state.isActiveUp})
    }, 1000)
  }
  imageDownAnimation = e => {
    this.setState({backView: +e.target.dataset.order, isActiveDown: !this.state.isActiveDown});
    setTimeout(() => {
      this.setState({frontView: +e.target.dataset.order, isActiveDown: !this.state.isActiveDown})
    }, 1000)
  }

  render() {
    return (
      <>
        <Wrapper>
          <div className="wrapImg">
            <img src={`images/play/play${this.state.backView}.png`} alt="" />
          </div>
          <div className={`wrapImg ${this.state.isActiveUp === true ? 'activeUp' : this.state.isActiveDown === true ? 'activeDown' : ""}`} >
            <img src={`images/play/play${this.state.frontView}.png`} alt="" />
          </div>
          <Parent deg={`${this.state.deg}deg`}>
            <Circle>
              {this.state.dummy.map((item, index) => {
                const itemCalc = item - 3;
                const degCalc = (itemCalc) * 30;
                return(
                  <div data-deg={degCalc} data-order={item} style={{opacity: this.state.deg !== degCalc ? `${1 / ((Math.abs(this.state.deg - degCalc) / 30) + 1)}` : '1', fontSize: this.state.deg !== degCalc ? '1.5rem' : '1.7rem'}} onClick={e => {
                    this.throttledEffected(e);
                  }}>메뉴 {item}번 입니다.</div>//
                );
              })}
            </Circle>
          </Parent>
        </Wrapper>
      </>
    )
  }
}
