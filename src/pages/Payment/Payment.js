import React from 'react';
import './Payment.scss';
import PaymentOrderDetails from './PaymentOrderDetails';
import PaymentDeliveryInfo from './PaymentDeliveryInfo';
import PaymentTotalPayment from './PaymentTotalPayment';
import { BASE_URL } from '../../config';

class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInformation: {
        order_id: '',
        name: '',
        phone_number: '',
        content: '',
        email: '',
      },
      cartItem: [],
    };
  }

  handleInputs = event => {
    const { name, value } = event.target;
    this.setState({
      userInformation: {
        [name]: value,
      },
    });
  };

  componentDidMount() {
    fetch('data/paymentTotalPayment.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          cartItem: res.data,
        });
      });
  }

  getTotalPrice = cartItems => {
    let totalPrice = 0;
    let totalDiscount = 0;
    for (let cartItem of cartItems) {
      const { quantity } = cartItem;
      const productPrice = cartItem.information[0].product_price;
      const productDiscount = cartItem.information[0].product_discount;

      totalPrice += quantity * productPrice;
      totalDiscount += quantity * productDiscount;
    }
    return [totalPrice, totalDiscount];
  };

  handleSubmit = () => {
    // const token = localStorage.getItem(`${TOKEN_KEY}`);
    fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: {},
      body: JSON.stringify({
        total_price: this.state.cartItem,
        order_id: this.state.userInfomation.order_id,
        name: this.state.userInformation.name,
        address: this.state.userInformation.address,
        email: this.state.userInformation.email,
        content: this.state.userInformation.content,
        phone_number: this.state.userInformation.phone_number,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === 'SUCCESS') {
          alert('결제 성공');
        } else if (res.MESSAGE === 'INSUFFICIENT_POINTS') {
          alert('잔액이 부족합니다!');
        } else {
          alert('결제에 실패했습니다.');
        }
      });
  };

  render() {
    // const token = localStorage.getItem(`${TOKEN_KEY}`);
    const { cartItem } = this.state;
    const [totalPrice, totalDiscount] = this.getTotalPrice(cartItem);

    return (
      <main className="payment">
        <PaymentOrderDetails />
        <PaymentDeliveryInfo onChange={this.handleInputs} />
        <PaymentTotalPayment
          userInformation={this.state.userInformation}
          handleSubmit={this.handleSubmit}
          totalPrice={totalPrice}
          totalDiscount={totalDiscount}
        />
      </main>
    );
  }
}

export default Payment;
