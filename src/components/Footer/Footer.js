import React, { Component } from 'react';
import './Footer.scss';
import FooterLink from './FooterLink';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <FooterLink />
        <div className="footerInfo">
          <div className="contain">
            <div className="customer">
              <h3>모트모트 고객센터</h3>
              <h4>
                카카오톡 플러스 친구 <span>@motemote</span>
              </h4>
              <p>
                평일 10:00 ~ 18:00 (점심시간 13:00 ~ 14:00) 주말 및 공휴일은
                <br></br>
                휴무입니다.
              </p>
            </div>
            <div className="companyInfo">
              <address>
                <span>주식회사 모트모트</span> <span className="bar" />
                <span>
                  04560 서울특별시 중구 마른내로 146 (쌍림동) 청인빌딩 3층
                </span>
                <span className="bar" /> <span>CEO/CPO : 김권봉</span>
                <span className="bar" />
                <span>사업자등록번호 : 580-86-00984</span>
                <span className="bar" />
                <span>통신판매업 신고번호 : 제 2018-서울중구-0633 호</span>
              </address>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
