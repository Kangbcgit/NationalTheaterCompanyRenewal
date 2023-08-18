import React, { Component } from 'react'
import { styled } from 'styled-components'
import MapNaver from './MapNaver';


const FrameFooter = styled.footer`
  height: 100vh;
  background: #000;
  /* overflow: hidden; */
`;
const WrapMaps = styled.div`
  display: grid;
  grid-template-columns: repeat(2, clamp(0px, 42.1875vw, 810px));
  grid-auto-rows: 466px;
  column-gap: clamp(0px, 3.0208vw, 58px);

  width: 1678px;

  margin: 220px auto 100px;
`;
const WrapInfoCompany = styled.div`
  display: flex;
  justify-content: space-between;

  width: 1678px;
  
  margin: 0 auto;
  border: 1px solid #fff;
`;
const WrapLeftInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  width: 900px;
  &>.wrapLogo {
    width: 133px;
    height: 133px;
  }
  &>.wrapDesc {
    color: var(--white);
  }
`;
const WrapRightInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: end;
  

  border: 1px solid #fff;
  width: 30%;

  &>.wrapGoTop {
    width: fit-content;
  }
  &>.wrapSns {
    display: flex;
  }
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
        <WrapInfoCompany>
          <WrapLeftInfo>
            <div className="wrapLogo">
              <img src={`${process.env.PUBLIC_URL}/images/footer/logoWhite.svg`} alt="" />
            </div>
            <div className="wrapDesc">
              <h3>재단법인 국립극단</h3>
              <p>
                04302 서울특별시 용산구 청파로373 | 대표 : 김광보 <br/>
                이메일 : cs@ntck.or.kr | 유선번호 : 1644-2003 <br/>
                사업자등록번호 201-82-07107 | 통신판매업신고번호 제2012-서울용산-00305<br/>
                COPYRIGHT 2014 NATIONAL THEATER COMPANY OF KOREA RIGHTS RESERVED.
              </p>
            </div>
          </WrapLeftInfo>
          <WrapRightInfo>
            <div className="wrapGoTop">
              <img src={`${process.env.PUBLIC_URL}/images/footer/topBtn.svg`} alt="" />
            </div>
            <div className="wrapSns">
              <div className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/footer/facebook.svg`} alt="" />
              </div>
              <div className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/footer/twitter.svg`} alt="" />
              </div>
              <div className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/footer/youtube.svg`} alt="" />
              </div>
              <div className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/footer/blog.svg`} alt="" />
              </div>
              <div className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/footer/instagram.svg`} alt="" />
              </div>
            </div>
          </WrapRightInfo>
        </WrapInfoCompany>
      </FrameFooter>
    )
  }
}
