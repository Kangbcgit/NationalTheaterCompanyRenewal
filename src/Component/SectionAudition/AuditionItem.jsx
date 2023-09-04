import React, { Component } from 'react'
import { styled } from 'styled-components';

const sizes = {
  mobile: 375,
}
const media = {
  mobile: `(max-width: ${sizes.mobile}px)`,
}

const HoverItem = styled.div`
`;
const WrapItem = styled.div`
  position: 'absolute';
  bottom: 'clamp(0px, 4.1667vw, 80px)';
  left: 0;
  width:"calc(100vw - 10px)";
  overflow : 'hidden';
  @media ${media.mobile} {
    background: #D9D9D9;
    padding: 12px 24px;

    /* width:294px; */
    height: 408px;
  }
`;
const Item = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  cursor: pointer;

  &>.wrapAuditionTitleText {
    display: flex;
    justify-content: space-between;

    height: 10%;

    font-family: Interop;
    font-weight: 700;
    font-size: var(--h3);
  }
  &>.wrapAuditionThumbnailImg {
    position: relative;
    width: 100%;
    height: 90%;
    padding: none;
    &>img {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &>${HoverItem} {
    position: absolute;
    left: 0;
    bottom: 0;

    display: flex;

    width: 100%;
    height: 90%;
    
    background: rgb(214, 36, 36, 50%);
    color: var(--white);

    opacity: ${props => props.isHover === true ? '1' : '0'};
    pointer-events:  ${props => props.isHover === true ? 'auto' : 'none'};
    transition: opacity .3s;

    &>.wrapHover {
      position: absolute;
      left: 50%;
      bottom: 50%;
      transform: translate(-50%, 50%);
      gap: clamp(0px, 0.8854vw, 17px);

      display: flex;
      align-items: center;
      flex-flow: column;
      gap: 30px;
      
      width: 100%;
      &>.hoverTitle, &>ul>li {
        display: flex;
        flex-wrap: nowrap;
      }
      &>ul{
        display: flex;
        flex-flow: column;
        gap: clamp(0px, 0.3646vw, 7px);
        &>li {
        justify-content: space-between;
        gap: 50px;
        
        font-size: var(--title);
        font-weight: 600;
      }
      }
      &>.hoverTitle {
        font-size: var(--h5);
        font-weight: bold;
      }
    }
    &>.arrow {
      position: absolute;
      right:0;
      bottom:0;
      transform: translate(-50%, -50%);
    }
    @media ${media.mobile} {
      position: relative;
      
      opacity: 1;
      pointer-events: auto;
      background: none;

      color: var(--black1);

      &>.wrapHover {
      gap: 6px;
        &>.hoverTitle {
          font-size: var(--small);
        }
        &>ul {
          gap: 0;
          &>li {
            font-size: var(--xSmall);
          }
        }
      }
    }
  }
  @media ${media.mobile} {
    &>.wrapAuditionThumbnailImg {
      width: 245px;
      height: 245px;
    }
    &>.wrapAuditionTitleText {
      font-size: var(--baseSize);
      font-family: interTop;
      font-weight: bold;
      height: auto;
    }
  }
`;

export default class AuditionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoverOnItem: false,
    }
  }

  mouseOverSensor = () => {
    this.setState({isHoverOnItem: true});
  }
  mouseLeaveSensor = () => {
    this.setState({isHoverOnItem: false});
  }

  render() {
    const {title, tag, src, location, ApplicationPeriod, target} = this.props.item;
    const { year } = this.props;
    return (
      <WrapItem>
        <Item onMouseOver={this.mouseOverSensor} onMouseLeave={this.mouseLeaveSensor} isHover={this.state.isHoverOnItem}>
          <div className="wrapAuditionTitleText">
            <h3 className="number">{this.props.order}</h3>
            <div className="tag">{tag}</div>
          </div>
          <div className="wrapAuditionThumbnailImg">
            <img src={src} alt="" />
          </div>
          <HoverItem>
            <div className="wrapHover">
              <div className="hoverTitle">{`${year}<${title}> 오디션`}</div>
              <ul>
                <li><span className='titleOfDesc'>접수기간</span><span className="desc">{`${ApplicationPeriod.start} ~ ${ApplicationPeriod.end}`}</span></li>
                <li><span className='titleOfDesc'>장소</span><span className="desc">{`${location}`}</span></li>
                <li><span className='titleOfDesc'>대상</span><span className="desc">{`${target.special === false ? target.gender.length === 2 ? `${target.start}세 - ${target.end}세 ${target.gender[0].substr(0,1)}/${target.gender[1].substr(0,1)} 배우` : `${target.start}세 - ${target.end}세 ${target.gender[0]} 배우` : `${target.hardText}`}`}</span></li>
              </ul>
            </div>
            <div className="arrow">
              {/* <img src={`${process.env.PUBLIC_URL}/images/audition/hoverArrow.svg`} alt="" /> */}
            </div>
          </HoverItem>
          {/* <div className="wrapDesc">
            <div className="wrapAuditionDescText"></div>
          </div> */}
        </Item>
      </WrapItem>
    )
  }
}
