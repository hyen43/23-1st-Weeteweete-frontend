import React from 'react';
import './Payment.scss';
import PaymentOrderDetails from './PaymentOrderDetails';
import PaymentDeliveryInfo from './PaymentDeliveryInfo';
import PaymentTotalPayment from './PaymentTotalPayment';

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
    fetch('data/paymenTotalPayment.json')
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
    const token = localStorage.getItem('TOKKEN');
    fetch('http://10.58.2.84:8000/orders', {
      method: 'POST',
      headers: {
        typ: 'JWT',
        alg: 'HS256',
      },
      body: JSON.stringify({
        cart: this.state.cartItem,
        user_info: this.state.userInformaiton,
      })
        .then(res => res.json())
        .then(res => {
          if (res.token) {
            localStorage.setItem('TOKKEN', res.token);
          }
        }),
    });
  };

  render() {
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
