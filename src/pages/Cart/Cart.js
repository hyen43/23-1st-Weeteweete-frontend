import React from 'react';
import CartListSection from './CartListSection';
import CartTotalSection from './CartTotalSection';
import CartButton from './CartButton';
import CartTotalSectionFooter from './CartTotalSectionFooter';
import './Cart.scss';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
      totalAmount: 0,
      sum: 0,
    };
  }

  componentDidMount() {
    fetch('/data/cartData.json')
      .then(res => res.json())
      .then(cartData => {
        this.setState({
          cartData: cartData,
        });
      });
  }

  calculateTotal = price => {
    this.setState({
      totalAmount: Number(this.state.cartData.price) + price,
    });
  };

  render() {
    const total = this.state.cartData.map(el => {
      return (this.state.sum += Number(el.discount * el.quantity));
    });
    const { cartData } = this.state;
    const component = this;

    const carts = this.state.cartData.map(function (cart) {
      return (
        <CartListSection
          name={cart.name}
          price={cart.price}
          discount={cart.discount}
          image={cart.image}
          quantity={cart.quantity}
          calculateTotal={component.calculateTotal}
          parentFunction={component.parentFunction}
        />
      );
    });

    return (
      <main>
        <div className="cart">
          <section className="cartTitleSection">
            <div className="cartTitle">SHOPPING CART</div>
          </section>
          <section className="cartListSetion">
            <div className="cartList">
              <div className="cartListTableTitleBox">
                <p className="cartListTableTitle"> 일반상품 (개수)</p>
              </div>
              <table className="cartListTable">
                <thead className="cartListTableIndex">
                  <tr>
                    <th> 이미지 </th>
                    <th> 상품정보 </th>
                    <th> 판매가 </th>
                    <th> 수량 </th>
                    <th> 배송비 </th>
                    <th> 합계 </th>
                    <th> 선택 </th>
                  </tr>
                </thead>
              </table>
            </div>
          </section>
          {carts}
          <CartTotalSectionFooter total={total[total.length - 1]} />
          <CartTotalSection
            cartData={cartData}
            total={total[total.length - 1]}
          />
          <CartButton cartData={cartData} />
        </div>
      </main>
    );
  }
}

export default Cart;
