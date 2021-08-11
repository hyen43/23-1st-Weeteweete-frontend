import React from 'react';
import './PaymentTotalPayment.scss';

class PaymentTotalPayment extends React.Component {
  render() {
    const { totalPrice, totalDiscount } = this.props;
    const calculateDiscount = totalPrice - totalDiscount;
    const shippingFee = totalPrice >= 30000 ? 0 : 2500;
    const calculateTotal = calculateDiscount + shippingFee;

    return (
      <main className="paymentTotalPayment">
        <h3>결제 예정 금액</h3>
        <table className="totalPayAmountTable">
          <tr>
            <th className="tableStyle">총 주문 금액</th>
            <th className="tableStyle">총 할인</th>
            <th className="tableStyle">배송비</th>
            <th className="tableStyle">총 결제예정 금액</th>
          </tr>
          <tr>
            <td>{totalPrice}원</td>
            <td>{totalDiscount}원</td>
            <td>{shippingFee}원</td>
            <td>{calculateTotal}</td>
          </tr>
        </table>
        <section className="payArea">
          <h3>최종결제 금액</h3>
          <p>{calculateTotal}원</p>
          <button
            type="submit"
            formmethod="POST"
            onClick={this.props.handleSubmit}
          >
            결제하기
          </button>
        </section>
      </main>
    );
  }
}

export default PaymentTotalPayment;
