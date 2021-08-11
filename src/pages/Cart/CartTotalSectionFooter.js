import React, { Component } from 'react';
import './CartTotalSectionFooter.scss';

class CartTotalSectionFooter extends Component {
  render() {
    const { total, originTotal, delivery } = this.props;

    return (
      <div className="CartFooter">
        <span className="deliveryDes">
          [기본배송/총 상품 금액 30,000원 이상 구매 시 무료배송]
        </span>
        <span className="totalDes">
          상품구매금액 {originTotal.toLocaleString()}원 + 배송비
          {delivery.toLocaleString()}원 - 상품할인금액
          {(originTotal - total).toLocaleString()}원 = 합계:
          {(total + delivery).toLocaleString()}원
        </span>
      </div>
    );
  }
}

export default CartTotalSectionFooter;
