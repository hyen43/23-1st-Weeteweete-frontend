import React from 'react';
import CartListSection from './CartListSection';
import CartTotalSection from './CartTotalSection';
import CartButton from './CartButton';
import './Cart.scss';

class Cart extends React.Component {
  render() {
    return (
      <main>
        <div className="Cart">
          <section className="cartTitleSection">
            <div className="cartTitle">SHOPPING CART</div>
          </section>
          <CartListSection />
          <CartTotalSection />
          <CartButton />
        </div>
      </main>
    );
  }
}

export default Cart;
