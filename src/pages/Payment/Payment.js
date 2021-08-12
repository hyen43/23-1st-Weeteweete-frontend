import React from 'react';
import './Payment.scss';
import PaymentOrderDetails from './PaymentOrderDetails';
import PaymentDeliveryInfo from './PaymentDeliveryInfo';
import PaymentTotalPayment from './PaymentTotalPayment';
import { BASE_URL, TOKEN_KEY } from '../../config';

class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInformation: {
        order_number: '',
        name: '',
        phone_number: '',
        content: '',
        email: '',
      },
      cartItem: [],
      totalprice: 0,
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
    console.log(this.props);
    fetch(`${BASE_URL}/orders?${this.props.location.state.itemId}`, {
      headers: {
        Authorization: localStorage.getItem(TOKEN_KEY),
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          cartItem: res.RESULT,
        });
        console.log(this.state.cartItem);
      });
  }
  //       .then(res => res.json())
  //       .then(res => {
  //         this.setState({
  //           cartItem: res.data,
  //         });
  //       }),
  //   });
  // }

  getTotalPrice = cartItems => {
    let totalPrice = 0;
    let totalDiscount = 0;
    console.log(cartItems);
    for (let cartItem of cartItems) {
      const { quantity } = cartItem;
      const productPrice = cartItem.information[0].product_price;
      const productDiscount = cartItem.information[0].product_discount;

      totalPrice += quantity * productPrice;
      totalDiscount += quantity * productDiscount;
    }
    return (
      [totalPrice, totalDiscount], this.setState({ totalprice: totalPrice })
    );
  };

  handleSubmit = () => {
    //const token = localStorage.getItem(`${TOKEN_KEY}`);
    fetch(`${BASE_URL}/orders/purchase`, {
      headers: {
        Authorization: localStorage.getItem(TOKEN_KEY),
      },
      method: 'POST',
      body: JSON.stringify({
        total_price: this.state.totalPrice,
        order_number: this.state.cartItem[0].order_number,
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

    console.log(this.state.cartItem);

    return (
      <main className="payment">
        <PaymentOrderDetails cartItem={this.state.cartItem} />
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
