import React from 'react';
import './Payment.scss';
import PaymentOrderDetails from './PaymentOrderDetails';
import PaymentDeliveryInfo from './PaymentDeliveryInfo';
import PaymentTotalPayment from './PaymentTotalPayment';

class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <main className="payment">
        <PaymentOrderDetails />
        <PaymentDeliveryInfo />
        <PaymentTotalPayment />
      </main>
    );
  }
}

export default Payment;
