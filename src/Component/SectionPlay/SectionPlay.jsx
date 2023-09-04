import React, { Component } from 'react';
import styled from 'styled-components'
import { throttle } from 'lodash'
const sizes = {
  mobile: 375,
  tablet: 785,
}
const media = {
  mobile: `(max-width: ${sizes.mobile}px)`,
  tablet: `(max-width: ${sizes.tablet}px)`
}
const Wrapper = styled.div`
  position: relative;
  width: ${props=> props.isMobile ? '100vw' : 'calc(100vw - 10px)'};
  height: 100vh;

  overflow: hidden;
`;
const WrapImg = styled.div`
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
`;
const WrapText = styled.div`
  position: absolute;
  z-index: -1;
  left: 5%;
  bottom: 8%;
  color: #fff;
  @media ${media.mobile} {
    bottom: 15%;
    line-height: 1.5;
  }
`;
const Parent = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(65%, -50%) rotate(${props => `${props.deg}deg` || 0});
  transition: 1s;

  width: 1000px;
  height: 1000px;
  @media ${media.mobile} {
    right: 0;
    top: 100%;
    transform: translate(50%, -50%) rotate(${props => `${+props.deg + 45}deg`});
  }
  @media ${media.tablet} {
    
  }
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

  @media ${media.mobile} {
    width: 300px;
    height: 300px;
    border: 5px solid #ff0000;
  }
`;
const CircleDot = styled.div`
  position: absolute;
  left: -250px;
  top: 50%;
  transform-origin: 475px 0;

  font-size: 1.5rem;
  color: #fff;

  cursor: pointer;

  transition: 1s;

  transform: translateY(-50%) rotate(${props => `${-props.calcDeg}deg`});
  
  opacity: ${props => {
    return !props.isMobile ? (props.deg !== props.calcDeg ? `${1 / ((Math.abs(props.deg - props.calcDeg) / 30) + 1)}` : `1`) : (`1`);
  }};
  font-size: ${props => props.deg !== props.calcDeg ? '1.5rem' : '1.7rem'};

  //반응형
  @media ${media.mobile} {
    left: 0;
    transform-origin: 162.5px 15px;
    transform: translate(calc(-50% - 2.5px), -50%) rotate(${props => `${-props.calcDeg}deg`});

    &>div {
      width: 30px;
      height: 30px;
      border-radius: 30px;
      background: red;
      cursor: pointer;
    }
  }
`;
const ImpactFrame = styled.div`
  @media ${media.mobile} {
    position: absolute;
    z-index: -2;
    left: 0;
    top: 50%;
    transform-origin: 162.5px 15px;
    transform: translate(calc(-50% - 2.5px), -50%) rotate(${props => `${-props.deg}deg`});

    transition: 1s;
    &>div {
      width: 30px;
      height: 30px;
      border: 1px solid red;
      border-radius: 40px;
      transform: scale(1.5);
    }
  }
`;

export default class SectionPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deg: 0, // 현재 부모 rotate deg
      itemList:[[1, 'Tank; 0-24'], [2, '조씨고아 복수의 씨앗'], [3, 'X의 비극'], [4, '이 불안한 집'], [5, '스고파라갈']], //임시로 map 돌리기 위한~ item 번호들
      text: [
        {
          text1: `[창작공감:작가]`,
          text2: `TANK; 0-24`,
          text3 : `“이래 죽으나, 저래 죽으나 제대로 살다 가자”`,
          text4: `전쟁의 한 가운데에서도 인간임을 잃지 않으려는 청춘의 목소리!`,
          text5: `2023.08.24~2023.09.17`,
          text6: `홍익대 아트센터 소극장`,
          
        },
        {
          text1: `[국립극단 대표 레퍼토리]`,
          text2: `조씨고아, 복수의 씨앗`,
          text3 : `참혹한 과거를 가진 가문의 마지막 핏줄`,
          text4: `지난 날에 대한 복수의 씨앗이 싹튼다!`,
          text5: `2023.08.24~2023.09.17`,
          text6: `홍익대 아트센터 소극장`,
          
        },
        {
          text1: `Tragedy of X`,
          text2: `X의 비극`,
          text3 : `“아무것도 하고싶지 않다.”`,
          text4: `번아웃에서 시작된 X의 비극이 전염병처럼 번지다.`,
          text5: `2023.08.24~2023.09.17`,
          text6: `홍익대 아트센터 소극장`,
          
        },
        {
          text1: `This Restless House`,
          text2: `이 불안한 집`,
          text3 : `그리스 대표 비극 ${(<br/>)}『오레스테이아』의 새로운 탄생!`,
          text4: `언젠간 지옥이 덮쳐올 것이다.`,
          text5: `2023.08.24~2023.09.17`,
          text6: `홍익대 아트센터 소극장`,
          
        },
        {
          text1: `[창작공감:연출]`,
          text2: `스고파라갈`,
          text3 : `자본주의가 만들어낸 뒤틀린 세계`,
          text4: `땅거북은 돈이 된다!`,
          text5: `2023.08.24~2023.09.17`,
          text6: `홍익대 아트센터 소극장`,
          
        },
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
      isMobile: false,
    }
  }
  componentDidMount() {
    this.throttledEffected = throttle(this.Effected, 1000, {
      trailing: false,
    });
    this.checkResize();
    window.addEventListener('resize', this.checkResize);
  }
  Effected = e => {
    const { deg } = this.state;
    const { dataset } = e.currentTarget;
    if (dataset.deg > deg) {
      this.setState({deg: deg + Math.abs(dataset.deg - deg)});
      this.imageUpAnimation(e, dataset);
      
    } else if (dataset.deg < deg) {
      this.setState({deg: deg - Math.abs(dataset.deg - deg)});
      this.imageDownAnimation(dataset, dataset); 
    }
  }
  imageUpAnimation = (e, dataset) => {
    this.setState({backView: +dataset.order, isActiveUp: !this.state.isActiveUp});
    setTimeout(() => {
      this.setState({frontView: +dataset.order, isActiveUp: !this.state.isActiveUp, step: dataset.deg / 30})
    }, 1000)
  }
  imageDownAnimation = (e, dataset) => {
    this.setState({backView: +dataset.order, isActiveDown: !this.state.isActiveDown});
    setTimeout(() => {
      this.setState({frontView: +dataset.order, isActiveDown: !this.state.isActiveDown, step: dataset.deg / 30})
    }, 1000)
  }
  checkResize = () => {
    if (window.innerWidth <= 375) {
      this.setState({isMobile: true});
    } else {
      this.setState({isMobile: false});
    }
  }
  

  render() {
    return (
      <>
        <Wrapper isMobile={this.props.isMobile}>
          <WrapImg>
            <img src={`${process.env.PUBLIC_URL}/images/play/play${this.state.backView}.svg`} alt="" />
            <WrapText style={{fontSize: this.state.isMobile ? 'var(--small)' : '32px'}}>
              <span style={{fontSize: this.state.isMobile ? '11px' : 'inherit'}}>{this.state.text[this.state.backView - 1].text1}</span><br/>
              <span style={{fontSize: this.state.isMobile ? 'var(--h6)' : '64px'}}>{this.state.text[this.state.backView - 1].text2}</span><br/>
              {this.state.text[this.state.backView - 1].text3}<br/>
              {this.state.text[this.state.backView - 1].text4}<br/>
              <span style={{fontSize: this.state.isMobile ? 'var(--xSmall)' : '20px'}}>{this.state.text[this.state.backView - 1].text5}<br/>
              {this.state.text[this.state.backView - 1].text6}</span>
            </WrapText>
          </WrapImg>
          <WrapImg className={`${this.state.isActiveUp === true ? 'activeUp' : this.state.isActiveDown === true ? 'activeDown' : ""}`} >
            <img src={`${process.env.PUBLIC_URL}/images/play/play${this.state.frontView}.svg`} alt="" />
            <WrapText style={{fontSize: this.state.isMobile ? 'var(--small)' : '32px'}}>
              <span style={{fontSize: this.state.isMobile ? '11px' : 'inherit'}}>{this.state.text[this.state.frontView - 1].text1}</span><br/>
              <span style={{fontSize: this.state.isMobile ? 'var(--h6)' : '64px'}}>{this.state.text[this.state.frontView - 1].text2}</span><br/>
              {this.state.text[this.state.frontView - 1].text3}<br/>
              {this.state.text[this.state.frontView - 1].text4}<br/>
              <span style={{fontSize: this.state.isMobile ? 'var(--xSmall)' : '20px'}}>{this.state.text[this.state.frontView - 1].text5}<br/>
              {this.state.text[this.state.frontView - 1].text6}</span>
            </WrapText>
          </WrapImg>
          <Parent deg={`${this.state.deg}`}>
            <Circle isMobile={this.state.deg}>
              {this.state.itemList.map((item, index) => {
                const itemCalc = item[0] - 3;
                const calcDeg = (itemCalc) * 30;
                return(
                  <>
                    <CircleDot data-deg={calcDeg} onClick={this.throttledEffected} data-order={item[0]} deg={this.state.deg} calcDeg={calcDeg} isMobile={this.props.isMobile}>
                      {this.state.isMobile ? (<div></div>) : item[1]}
                    </CircleDot>
                  </>
                );
              })}
              <ImpactFrame deg={this.state.deg}>
                <div></div>
              </ImpactFrame>
            </Circle>
          </Parent>
        </Wrapper>
      </>
    )
  }
}
