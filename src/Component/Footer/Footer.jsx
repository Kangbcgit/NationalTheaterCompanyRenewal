import React, { Component } from 'react'
import { styled } from 'styled-components'
import MapNaver from './MapNaver';
import { Link } from 'react-router-dom';


const FrameFooter = styled.footer`
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
  border-bottom: 1px solid #fff;
  padding: 0 0px 40px;
`;
const WrapLeftInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  width: 900px;
  &>.wrapDesc {
    color: var(--white);
  }
`;
const WrapLogoLeft = styled(Link)`
  width: 133px;
  height: 133px;
`;
const WrapDescLeft = styled.div`
  color: var(--white);
  &>h3 {
    font-size: var(--h4);
  }
`;
const WrapRightInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: end;
  gap: 20px;
  

  /* border: 1px solid #fff; */
  width: 30%;

  &>.wrapGoTop {
    width: fit-content;
  }
  &>.wrapSns {
    display: flex;
    justify-content: space-between;

    width: 360px;
  }
`;

const FooterLink = styled.div`
  display: flex;
  width: 1678px;
  height: 100px;
  margin: 0 auto;


  color: var(--white);
`;
const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1200px;
  color: inherit;

  /* border: 1px solid #fff; */
  &>a {
    color: var(--white);
  }
`;
const Box = styled.div`
&>select {
  background: var(--primary);
  border: none;
  color: var(--white);
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
            <WrapLogoLeft to='#none'>
              <img src={`${process.env.PUBLIC_URL}/images/footer/logoWhite.svg`} alt="" />
            </WrapLogoLeft>
            <WrapDescLeft>
              <h3>재단법인 국립극단</h3>
              <p>
                04302 서울특별시 용산구 청파로373 | 대표 : 김광보 <br/>
                이메일 : cs@ntck.or.kr | 유선번호 : 1644-2003 <br/>
                사업자등록번호 201-82-07107 | 통신판매업신고번호 제2012-서울용산-00305<br/>
                COPYRIGHT 2014 NATIONAL THEATER COMPANY OF KOREA RIGHTS RESERVED.
              </p>
            </WrapDescLeft>
          </WrapLeftInfo>
          <WrapRightInfo>
            <div className="wrapGoTop">
              <img src={`${process.env.PUBLIC_URL}/images/footer/topBtn.svg`} alt="" />
            </div>
            <div className="wrapSns">
              <a href='#none' className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/footer/facebook.svg`} alt="" />
              </a>
              <a href='#none' className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/footer/twitter.svg`} alt="" />
              </a>
              <a href='#none' className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/footer/youtube.svg`} alt="" />
              </a>
              <a href='#none' className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/footer/blog.svg`} alt="" />
              </a>
              <a href='#none' className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/footer/instagram.svg`} alt="" />
              </a>
            </div>
          </WrapRightInfo>
        </WrapInfoCompany>
        <FooterLink>
          <Links>
            <Link to={'#none'}>회원서비스약관</Link>
            <Link to={'#none'}>개인정보처리방침</Link>
            <Link to={'#none'}>영상정보처리기기 운영방침</Link>
            <Link to={'#none'}>저작권정책</Link>
            <Link to={'#none'}>이메일무단수집거부</Link>
            <Link to={'#none'}>민원신청</Link>
            <Link to={'#none'}>CONTACT US</Link>
            <Link to={'#none'}>사이트맵</Link>
          </Links>
          <Box>
            <select name="" id="" placeholder='여기저기고르세요'>
              <option value="">관련기관 바로가기</option>
              <option value="">저기</option>
              <option value="">아무데나</option>
            </select>
          </Box>
        </FooterLink>
      </FrameFooter>
    )
  }
}
