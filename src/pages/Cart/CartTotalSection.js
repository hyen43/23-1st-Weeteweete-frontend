import React from 'react';
import './CartTotalSection.scss';

class CartTotalSection extends React.Component {
  render() {
    const { total, originTotal, delivery } = this.props;

    return (
      <section>
        <div className="cartTotalSection">
          <table className="cartTotalTable">
            <thead>
              <tr>
                <th>총 상품금액</th>
                <th>총 배송비</th>
                <th>총 할인금액</th>
                <th>총 결제예정금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {originTotal.toLocaleString()}원</td>
                <td> +{delivery.toLocaleString()}원</td>
                <td> {(originTotal - total).toLocaleString()}원</td>
                <td> = {(total + delivery).toLocaleString()}원 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default CartTotalSection;
