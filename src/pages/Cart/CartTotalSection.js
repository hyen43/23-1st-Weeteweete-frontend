import React from 'react';
import './CartTotalSection.scss';

class CartTotalSection extends React.Component {
  render() {
    const { total, originTotal, deliveryFee } = this.props;

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
                <td> +{deliveryFee.toLocaleString()}원</td>
                <td> {(originTotal - total).toLocaleString()}원</td>
                <td> = {(total + deliveryFee).toLocaleString()}원 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default CartTotalSection;
