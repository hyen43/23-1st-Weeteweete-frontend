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

  componentDidMount() {
    // fetch('https://api.google.com/user', {
    //   method: 'post',
    //   body: JSON.stringify({
    //     name: this.state.,
    //     batch: ,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     if (res.success) {
    //       alert('저장 완료');
    //     }
    //   });
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
