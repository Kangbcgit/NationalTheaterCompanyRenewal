import React, { Component } from 'react';
import styled from 'styled-components'
import { throttle } from 'lodash'

const Wrapper = styled.div`
position: relative;
width: calc(100vw - 10px);
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
  &>.wrapText {
    position: absolute;
    z-index: -1;
    left: 5%;
    bottom: 8%;
    color: #fff;
  }
}
`;
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

export default class SectionPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deg: 0, // 현재 부모 rotate deg
      step: 0, //중앙으로부터 멀어진 양 max 2
      itemList:[1, 2, 3, 4, 5], //임시로 map 돌리기 위한~ item 번호들
      text: [
        
        (
          <div className="wrapText" style={{fontSize: '32px'}}>
            [창작공감:작가]<br/>
            <span style={{fontSize: '64px'}}>TANK; 0-24</span><br/>
            “이래 죽으나, 저래 죽으나 제대로 살다 가자”<br/>
            전쟁의 한 가운데에서도 인간임을 잃지 않으려는 청춘의 목소리!<br/>
            <span style={{fontSize: '20px'}}>2023.08.24~2023.09.17<br/>
            홍익대 아트센터 소극장</span>
          </div>
        ),
        (
          <div className="wrapText" style={{fontSize: '32px'}}>
            [국립극단 대표 레퍼토리]<br/>
            <span style={{fontSize: '64px'}}>조씨고아, 복수의 씨앗</span><br/>
            참혹한 과거를 가진 가문의 마지막 핏줄<br/>
            지난 날에 대한 복수의 씨앗이 싹튼다!<br/>
            <span style={{fontSize: '20px'}}>2023.08.24~2023.09.17<br/>
            홍익대 아트센터 소극장</span>
          </div> 
        ),
        (
          <div className="wrapText" style={{fontSize: '32px'}}>
            Tragedy of X<br/>
            <span style={{fontSize: '64px'}}>X의 비극</span><br/>
            “아무것도 하고싶지 않다.”<br/>
            번아웃에서 시작된 X의 비극이 전염병처럼 번지다.<br/>
            <span style={{fontSize: '20px'}}>2023.08.24~2023.09.17<br/>
            홍익대 아트센터 소극장</span>
            </div>
        ),
        (
          <div className="wrapText" style={{fontSize: '32px'}}>
            This Restless House<br/>
            <span style={{fontSize: '64px'}}>이 불안한 집</span><br/>
            그리스 대표 비극<br/>
            『오레스테이아』의 새로운 탄생!<br/>
            <span style={{paddingTop: '10px'}}>언젠간 지옥이 덮쳐올 것이다.</span>
            <span style={{fontSize: '20px'}}>2023.08.24~2023.09.17<br/>
            홍익대 아트센터 소극장</span>
          </div>
        ),
        (
          <div className="wrapText" style={{fontSize: '32px'}}>
            [창작공감:연출]<br/>
            <span style={{fontSize: '64px'}}>스고파라갈</span><br/>
            자본주의가 만들어낸 뒤틀린 세계<br/>
            땅거북은 돈이 된다!<br/>
            <span style={{fontSize: '20px'}}>2023.08.24~2023.09.17<br/>
            홍익대 아트센터 소극장</span>
          </div>
        ),
      ],
      frontView: 3,
      backView: 3,
      images: [
        'images/play/play1.svg',
        'images/play/play2.svg',
        'images/play/play3.svg',
        'images/play/play4.svg',
        'images/play/play5.svg',
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
      this.setState({deg: deg + Math.abs(dataset.deg - deg)});
      this.imageUpAnimation(e, dataset);
      
    } else if (dataset.deg < deg) {
      this.setState({deg: deg - Math.abs(dataset.deg - deg)});
      this.imageDownAnimation(e, dataset); 
    }
  }
  imageUpAnimation = (e, dataset) => {
    this.setState({backView: +e.target.dataset.order, isActiveUp: !this.state.isActiveUp});
    setTimeout(() => {
      this.setState({frontView: +e.target.dataset.order, isActiveUp: !this.state.isActiveUp, step: dataset.deg / 30})
    }, 1000)
  }
  imageDownAnimation = (e, dataset) => {
    this.setState({backView: +e.target.dataset.order, isActiveDown: !this.state.isActiveDown});
    setTimeout(() => {
      this.setState({frontView: +e.target.dataset.order, isActiveDown: !this.state.isActiveDown, step: dataset.deg / 30})
    }, 1000)
  }

  render() {
    return (
      <>
        <Wrapper>
          <div className="wrapImg">
            <img src={`images/play/play${this.state.backView}.svg`} alt="" />
              {this.state.text[this.state.backView - 1]}
          </div>
          <div className={`wrapImg ${this.state.isActiveUp === true ? 'activeUp' : this.state.isActiveDown === true ? 'activeDown' : ""}`} >
            <img src={`images/play/play${this.state.frontView}.svg`} alt="" />
              {this.state.text[this.state.frontView - 1]}
          </div>
          <Parent deg={`${this.state.deg}deg`}>
            <Circle>
              {this.state.itemList.map((item, index) => {
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
