import React, { Component } from 'react'
import { styled } from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  border: 1px solid #000;

  &>.wrapAuditionTitleText {
    display: flex;
    justify-content: space-between;

    height: 10%;

    font-family: Intertop;
    font-weight: 700;
    font-size: var(--h3);
  }
  &>.wrapAuditionThumbnailImg {
    width: 100%;
    height: 90%;
    border: 1px solid red;
    padding: none;
    &>img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default class AuditionItem extends Component {
  render() {
    return (
      <Item>
        <div className="wrapAuditionTitleText">
          <h3 className="number">01</h3>
          <div className="tag">#UI 배치 테스트</div>
        </div>
        <div className="wrapAuditionThumbnailImg">
          <img src="images/audition/스카팽.svg" alt="" />
        </div>
        <div className="wrapDesc">
          <div className="wrapAuditionDescText"></div>
        </div>
      </Item>
    )
  }
}
