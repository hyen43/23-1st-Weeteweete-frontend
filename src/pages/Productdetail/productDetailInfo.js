import React, { Component } from 'react';

class ProductDetailInfo extends Component {
  render() {
    const { price, discount_price, discount, name } = this.props.detailData;

    return (
      <section className="productDetailInfo">
        <table className="productDetailTable">
          <tbody>
            <tr>
              <td className="productDetailName">
                <span className="productDetailName">{name}</span>
              </td>
            </tr>
            <tr>
              <td className="productDetailPrice">
                판매가
                <br />
                <span>{Number(price).toLocaleString()}원</span>
              </td>
            </tr>
            <tr>
              <td className="productDetailDiscount">
                할인가
                <br />
                <span className="DiscountPrice">
                  {Number(discount_price).toLocaleString()}원
                </span>
                <span className="DiscountPercent">
                  ({Number(discount).toLocaleString()}원 할인)
                </span>
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
      </section>
    );
  }
}

export default ProductDetailInfo;
