import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import ProductDetailInfo from './productDetailInfo';
import ProductDetailOption from './ProductDetailOption';
import './Productdetail.scss';

class Productdetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: {},
    };
  }
  // http://10.58.1.209:8000/products/1
  //data.results[0]
  componentDidMount() {
    fetch('data/ItemData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          detailData: data[0],
        });
      });
  }

  render() {
    const { detailData } = this.state;

    console.log(detailData);
    return (
      <main className="productDetailPage">
        <div className="productDetail">
          <ImageSlider detailData={detailData} />
          <section>
            <ProductDetailInfo detailData={detailData} />
            {/* <table className="productDetailTable">
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
            </table> */}
            <ProductDetailOption detailData={detailData} />
            {/* <table className="productDetailOption">
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
            </table> */}
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
