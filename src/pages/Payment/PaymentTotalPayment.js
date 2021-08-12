import React from 'react';
import './PaymentTotalPayment.scss';

class PaymentTotalPayment extends React.Component {
  render() {
    return (
      <main className="paymentTotalPayment">
        <h3>결제 예정 금액</h3>
        <table className="totalPayAmountTable">
          <thead>
            <tr>
              <th className="tableStyle">총 주문 금액</th>
              <th className="tableStyle">총 할인</th>
              <th className="tableStyle">배송비</th>
              <th className="tableStyle">총 결제예정 금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.totalPrice}원</td>
              <td>{this.props.totalDiscount}원</td>
              <td>{this.props.shippingFee}원</td>
              <td>{this.props.calculateTotal}원</td>
            </tr>
          </tbody>
        </table>
        <section className="payArea">
          <h3>최종결제 금액</h3>
          <p>{this.props.calculateTotal}원</p>
          <button
            type="submit"
            formMethod="POST"
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
