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
      total: 0,
      totaldiscount: 0,
    };
  }

  handleInputs = event => {
    const { name, value } = event.target;
    this.setState({
      userInformation: { ...this.state.userInformation, [name]: value },
    });
    console.log(this.state.userInformation);
  };

  componentDidMount() {
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

    for (let cartItem of cartItems) {
      const { quantity } = cartItem;
      const productPrice = cartItem.information[0].product_price;
      const productDiscount = cartItem.information[0].product_discount;

      totalPrice += quantity * productPrice;
      totalDiscount += quantity * productDiscount;
    }
    return [totalPrice, totalDiscount];
  };

  handleSubmit = calculateTotal => {
    // console.log(calculateTotal);
    //const token = localStorage.getItem(`${TOKEN_KEY}`);
    console.log(this.state.userInformation);
    fetch(`${BASE_URL}/orders/purchase`, {
      headers: {
        Authorization: localStorage.getItem(TOKEN_KEY),
      },
      method: 'POST',
      body: JSON.stringify({
        total_price: calculateTotal,
        order_id: this.state.cartItem[0].order_number,
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
    const { cartItem } = this.state;
    const [totalPrice, totalDiscount] = this.getTotalPrice(cartItem);
    // const { total, totaldiscount } = this.state;
    const shippingFee = totalDiscount < 30000 ? 2500 : 0;
    const calculateTotal = totalPrice - totalDiscount + shippingFee;

    console.log(this.state.cartItem);

    return (
      <main className="payment">
        <PaymentOrderDetails cartItem={this.state.cartItem} />
        <PaymentDeliveryInfo onChange={this.handleInputs} />
        <PaymentTotalPayment
          userInformation={this.state.userInformation}
          handleSubmit={() => this.handleSubmit(calculateTotal)}
          totalPrice={totalPrice}
          totalDiscount={totalDiscount}
          calculateTotal={calculateTotal}
          shippingFee={shippingFee}
        />
      </main>
    );
  }
}

export default Payment;
