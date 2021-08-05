import React, { Component } from 'react';

class ProductDetailInfo extends Component {
  render() {
    const { detailData } = this.props;
    return (
      <div className="productDetailInfo">
        <table className="productDetailTable">
          <tbody>
            <tr>
              <td className="productDetailName">
                <span className="productDetailName">{detailData.name}</span>
              </td>
            </tr>
            <tr>
              <td className="productDetailPrice">
                판매가
                <br />
                <span>{Number(detailData.price).toLocaleString()}원</span>
              </td>
            </tr>
            <tr>
              <td className="productDetailDiscount">
                할인가
                <br />
                <span className="DiscountPrice">
                  {Number(detailData.discount_price).toLocaleString()}원
                </span>
                <span className="DiscountPercent">
                  ({Number(detailData.discount).toLocaleString()}원 할인)
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
      </div>
    );
  }
}

export default ProductDetailInfo;
