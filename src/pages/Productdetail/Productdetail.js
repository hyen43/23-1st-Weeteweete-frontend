import React from 'react';
import { Link } from 'react-router-dom';
import './Productdetail.scss';

class Productdetail extends React.Component {
  render() {
    return (
      <div className="productDetailPage">
        <div className="productDetail">
          <div className="ProductDetailImgTable">
            <section className="productDetailImg">
              <img
                id="mainSlideImg"
                alt="mainSlide"
                src="images/motemoteDetailImg1.jpg"
              />
              <div className="productSlideImg">
                <ul>
                  <li>
                    <img
                      alt="productImg1"
                      src="images/motemoteDetailImg1.jpg"
                    />
                  </li>
                  <li>
                    <img
                      alt="productImg2"
                      src="images/motemoteDetailImg2.jpg"
                    />
                  </li>
                  <li>
                    <img
                      alt="productImg3"
                      src="images/motemoteDetailImg3.jpg"
                    />
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <section>
            <table className="productDetailTable">
              <tr>
                <td className="productDetailName">
                  <span className="productDetailName">
                    [오리지널] 텐미닛 플래너 31DAYS - 화이트
                  </span>
                </td>
              </tr>
              <tr>
                <td className="productDetailPrice">
                  판매가
                  <br />
                  <span>2000원</span>
                </td>
              </tr>
              <tr>
                <td className="productDetailDiscount">
                  할인가
                  <br />
                  <span id="DiscountPrice">1,800원</span>
                  <span id="DiscountPercent"> (200원 할인)</span>
                </td>
              </tr>
              <tr>
                <td className="productDetailDeliveryFee">
                  배송비
                  <br />
                  <span id="DeliveryFee">
                    2500원 (30,000원 이상 구매 시 무료)
                  </span>
                </td>
              </tr>
            </table>
            <table className="productDetailOption">
              <tr className="productDetailOptionTable">
                <td id="optionName">
                  [오리지널] 텐미닛 플래너 31DAYS - 화이트{' '}
                </td>
                <td>
                  <span className="quantitiyBlock">
                    <input
                      id="quantity"
                      type="text"
                      value="1"
                      randonly="randonly"
                      min="1"
                      max="100"
                    />
                    <div className="plus">
                      <Link to="/">
                        <i class="fas fa-sort-up"></i>
                      </Link>
                    </div>
                    <div className="minus">
                      <Link to="/">
                        <i class="fas fa-sort-down"></i>
                      </Link>
                    </div>
                  </span>
                </td>
                <td>2000원</td>
              </tr>
            </table>
            <table className="productDetailTotal">
              <tr>
                <td>
                  <span>Total: </span>
                  <span id="totalPrice">1,800원</span>
                  <span> (1개)</span>
                </td>
              </tr>
            </table>
            <div className="productDetailbuttons">
              <button className="buyNowButton" type="button">
                BUY NOW
              </button>
              <button className="addCart" type="button">
                ADD CART
              </button>
            </div>
          </section>
        </div>
        <div className="productDetailDescription">
          <div>
            <Link to="/" className="detailInformation">
              상품상세정보
            </Link>
          </div>
          <div>
            <Link to="/" className="detailReview">
              상품후기
            </Link>
          </div>
          <div>
            <Link to="/" className="delivery">
              배송/교환 및 반품안내
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Productdetail;
