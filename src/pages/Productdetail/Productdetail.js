import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import './Productdetail.scss';

class Productdetail extends React.Component {
  render() {
    return (
      <main className="productDetailPage">
        <div className="productDetail">
          <div className="ProductDetailImgTable">
            <ImageSlider />
            {/* <section className="productDetailImg">
              <img
                className="mainSlideImg"
                alt="mainSlclassNamee"
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
            </section> */}
          </div>
          <section>
            <table className="productDetailTable">
              <tbody>
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
                    <span className="DiscountPrice">1,800원</span>
                    <span className="DiscountPercent"> (200원 할인)</span>
                  </td>
                </tr>
                <tr>
                  <td className="productDetailDeliveryFee">
                    배송비
                    <br />
                    <span className="DeliveryFee">
                      2500원 (30,000원 이상 구매 시 무료)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="productDetailOption">
              <tbody>
                <tr className="productDetailOptionTable">
                  <td className="optionName">
                    [오리지널] 텐미닛 플래너 31DAYS - 화이트
                  </td>
                  <td>
                    <span className="quantitiyBlock">
                      <input
                        className="quantity"
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
              </tbody>
            </table>
            <table className="productDetailTotal">
              <tbody>
                <tr>
                  <td>
                    <span>Total: </span>
                    <span className="totalPrice">1,800원</span>
                    <span> (1개)</span>
                  </td>
                </tr>
              </tbody>
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
      </main>
    );
  }
}

export default Productdetail;
