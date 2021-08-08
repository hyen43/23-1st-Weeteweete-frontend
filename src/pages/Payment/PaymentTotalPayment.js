import React from 'react';
import './PaymentTotalPayment.scss';

class PaymentTotalPayment extends React.Component {
  render() {
    return (
      <main className="paymentTotalPayment">
        <h3>결제 예정 금액</h3>
        <table className="totalPayAmountTable">
          <tr>
            <th className="tableStyle">총 주문 금액</th>
            <th className="tableStyle">총 할인 + 부가결제 금액</th>
            <th className="tableStyle">총 결제예정 금액</th>
          </tr>
          <tr>
            <td>{'total order price'}</td>
            <td>{'total price + extra fee'}</td>
            <td>{'total price'}</td>
          </tr>
        </table>
        <section className="payArea">
          <h3>최종결제 금액</h3>
          <p>{''}원</p>
          <button>결제하기</button>
        </section>
      </main>
    );
  }
}

export default PaymentTotalPayment;
