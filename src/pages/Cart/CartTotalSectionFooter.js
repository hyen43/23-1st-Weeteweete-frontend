import React, { Component } from 'react';
import './CartTotalSectionFooter.scss';

class CartTotalSectionFooter extends Component {
  render() {
    return (
      <div className="CartFooter">
        <span className="deliveryDes">
          [기본배송/총 상품 금액 30,000원 이상 구매 시 무료배송]
        </span>
        <span className="totalDes">
          상품구매금액 원 + 배송비 0원(무료/유료)- 상품할인금액 원 = 합계: 원
        </span>
      </div>
    );
  }
}

export default CartTotalSectionFooter;
