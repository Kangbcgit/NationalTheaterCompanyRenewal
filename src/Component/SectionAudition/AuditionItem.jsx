import React, { Component } from 'react'
import { styled } from 'styled-components';

const HoverItem = styled.div`
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

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
    &>${HoverItem} {
      position: absolute;
      left: 0;
      top: 0;

      display: flex;

      width: 100%;
      height: 100%;
      
      background: rgb(214, 36, 36, 50%);
      color: #fff;
    
      &>.title {
        
      }
    }
  }
`;

export default class AuditionItem extends Component {
  render() {
    const {title, tag, src, location, ApplicationPeriod, target} = this.props.item;
    return (
      <Item>
        <div className="wrapAuditionTitleText">
          <h3 className="number">{this.props.order}</h3>
          <div className="tag">{tag}</div>
        </div>
        <div className="wrapAuditionThumbnailImg">
          <img src={src} alt="" />
          <HoverItem>
            <div className="title">{title}</div>
            <ul>
              <li><span className='titleOfDesc'>접수기간</span><span className="desc">{`${ApplicationPeriod.start} ~ ${ApplicationPeriod.end}`}</span></li>
              <li><span className='titleOfDesc'>장소</span><span className="desc">{`${location}`}</span></li>
              <li><span className='titleOfDesc'>대상</span><span className="desc">{`${target.special === false ? target.gender.length === 2 ? `${target.start}세 - ${target.end}세 ${target.gender[0].substr(0,1)}/${target.gender[1].substr(0,1)} 배우` : `${target.start}세 - ${target.end}세 ${target.gender[0]} 배우` : `${target.hardText}`}`}</span></li>
            </ul>
          </HoverItem>
        </div>
        <div className="wrapDesc">
          <div className="wrapAuditionDescText"></div>
        </div>
      </Item>
    )
  }
}
