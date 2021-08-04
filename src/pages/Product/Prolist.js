import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Prolist.scss';

class ProList extends Component {
  render() {
    return (
      <div className="proList">
        <div className="wrap">
          <div className="desc">
            <h3>오리지널</h3>
            <p>
              오늘도 시간이 부족했다면?
              <br /> 단 10분도 버리지 않는
              <br /> 가장 철저한 시간관리 플래너
            </p>
          </div>
          <div className="list">
            <ul>
              <li>
                <Link to="/">
                  <div className="thumb">
                    <div className="img">
                      <img
                        alt="product1"
                        src="./images/product_pro1.jpeg"
                      ></img>
                    </div>
                  </div>
                  <div className="cnt">
                    <div className="tit">[무료배송] 필기 완성 SET</div>
                    <div className="price sales">
                      <span className="cost">34,500원</span>
                      <span className="salePrice">32,500원</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="thumb">
                    <div className="img">
                      <img
                        alt="product1"
                        src="./images/product_pro1.jpeg"
                      ></img>
                    </div>
                  </div>
                  <div className="cnt">
                    <div className="tit">[무료배송] 필기 완성 SET</div>
                    <div className="price sales">
                      <span className="cost">34,500원</span>
                      <span className="salePrice">32,500원</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="thumb">
                    <div className="img">
                      <img
                        alt="product1"
                        src="./images/product_pro1.jpeg"
                      ></img>
                    </div>
                  </div>
                  <div className="cnt">
                    <div className="tit">[무료배송] 필기 완성 SET</div>
                    <div className="price sales">
                      <span className="cost">34,500원</span>
                      <span className="salePrice">할인 판매가 : 32,500원</span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap">
          <div className="desc">
            <h3>컬러칩</h3>
            <p>
              컬러와 후가공을 더해
              <br />
              더욱 아름다워진 플래너
            </p>
            <div className="colorFilter">
              <ul>
                <li>
                  <button className="colorChip red active" data-color="red">
                    <span>red</span>
                  </button>
                </li>
                <li>
                  <button className="colorChip green" data-color="green">
                    <span>green</span>
                  </button>
                </li>
                <li>
                  <button className="colorChip dream" data-color="dream">
                    <span>dream</span>
                  </button>
                </li>
                <li>
                  <button className="colorChip violet" data-color="violet">
                    <span>violet</span>
                  </button>
                </li>
                <li>
                  <button className="colorChip dark" data-color="dark">
                    <span>dark</span>
                  </button>
                </li>
                <li>
                  <button className="colorChip yellow" data-color="yellow">
                    <span>yellow</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="list">
            <ul>
              <li>
                <Link to="/">
                  <div className="thumb">
                    <div className="img">
                      <img
                        alt="product1"
                        src="./images/product_pro1.jpeg"
                      ></img>
                    </div>
                  </div>
                  <div className="cnt">
                    <div className="tit">[무료배송] 필기 완성 SET</div>
                    <div className="price sales">
                      <span className="cost">34,500원</span>
                      <span className="salePrice">32,500원</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="thumb">
                    <div className="img">
                      <img
                        alt="product1"
                        src="./images/product_pro1.jpeg"
                      ></img>
                    </div>
                  </div>
                  <div className="cnt">
                    <div className="tit">[무료배송] 필기 완성 SET</div>
                    <div className="price sales">
                      <span className="cost">34,500원</span>
                      <span className="salePrice">32,500원</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="thumb">
                    <div className="img">
                      <img
                        alt="product1"
                        src="./images/product_pro1.jpeg"
                      ></img>
                    </div>
                  </div>
                  <div className="cnt">
                    <div className="tit">[무료배송] 필기 완성 SET</div>
                    <div className="price sales">
                      <span className="cost">34,500원</span>
                      <span className="salePrice">할인 판매가 : 32,500원</span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap">
          <div className="desc">
            <h3>스페셜</h3>
            <p>
              고급 후가공을 입혀
              <br />
              한층 더 특별해진 플래너
            </p>
          </div>
          <div className="list">
            <ul>
              <li>
                <Link to="/">
                  <div className="thumb">
                    <div className="img">
                      <img
                        alt="product1"
                        src="./images/product_pro1.jpeg"
                      ></img>
                    </div>
                  </div>
                  <div className="cnt">
                    <div className="tit">[무료배송] 필기 완성 SET</div>
                    <div className="price sales">
                      <span className="cost">34,500원</span>
                      <span className="salePrice">32,500원</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="thumb">
                    <div className="img">
                      <img
                        alt="product1"
                        src="./images/product_pro1.jpeg"
                      ></img>
                    </div>
                  </div>
                  <div className="cnt">
                    <div className="tit">[무료배송] 필기 완성 SET</div>
                    <div className="price sales">
                      <span className="cost">34,500원</span>
                      <span className="salePrice">32,500원</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="thumb">
                    <div className="img">
                      <img
                        alt="product1"
                        src="./images/product_pro1.jpeg"
                      ></img>
                    </div>
                  </div>
                  <div className="cnt">
                    <div className="tit">[무료배송] 필기 완성 SET</div>
                    <div className="price sales">
                      <span className="cost">34,500원</span>
                      <span className="salePrice">할인 판매가 : 32,500원</span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProList;
