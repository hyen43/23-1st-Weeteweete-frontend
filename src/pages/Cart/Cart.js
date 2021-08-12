import React from 'react';
import CartListSection from './CartListSection';
import CartTotalSection from './CartTotalSection';
import CartButton from './CartButton';
import CartTotalSectionFooter from './CartTotalSectionFooter';
import { withRouter } from 'react-router-dom';
import { TOKEN_KEY } from '../../config';
import { BASE_URL } from '../../config';
import './Cart.scss';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
      totalAmount: 0,
      delivery: 0,
    };
  }

  getCartData = () => {
    fetch(`${BASE_URL}/orders/cart`, {
      headers: {
        Authorization: localStorage.getItem(TOKEN_KEY),
      },
    })
      .then(res => res.json())
      .then(cartData => {
        cartData.RESULT === undefined
          ? this.setState({ cartData: [] })
          : this.setState({
              cartData: cartData.RESULT,
            });
      });
  };

  componentDidMount() {
    this.getCartData();
  }

  calculateTotal = price => {
    this.setState({
      totalAmount: Number(this.state.cartData.price) + price,
    });
  };

  changeQuantity = (idx, id) => {
    id === 'quantityMinus' ? (id = -1) : (id = 1);
    const copy = this.state.cartData.map((product, index) => {
      if (idx === index) {
        return { ...product, quantity: product.quantity + id };
      } else {
        return product;
      }
    });
    this.setState({
      cartData: copy,
    });
  };

  ordered = idx => {
    fetch(`${BASE_URL}/orders?item_id=${this.state.cartData[idx].item_id}`, {
      headers: {
        Authorization: localStorage.getItem(TOKEN_KEY),
      },
      method: 'POST',
      body: JSON.stringify({
        //item_id: this.state.cartData[idx].item_id,
        quantity: this.state.cartData[idx].quantity,
      }),
    }).then(() => {
      this.props.history.push({
        pathname: `/payment`,
        state: { itemId: this.state.cartData[idx].item_id },
      });
    });
  };

  deleteproduct = idx => {
    console.log(this.state.cartData[idx].item_id);
    fetch(
      `${BASE_URL}/orders/cart?item_id=${this.state.cartData[idx].item_id}`,
      {
        method: 'DELETE',
        body: JSON.stringify({
          item_id: this.state.cartData[idx].item_id,
          //quantity: this.state.cartData[idx].quantity,
        }),
        headers: {
          Authorization: localStorage.getItem(TOKEN_KEY),
        },
      }
    )
      .then(res => res.status)
      .then(status => {
        if (status === 204) {
          this.getCartData();
        }
      });
  };

  reviseQuantity = idx => {
    fetch(
      `${BASE_URL}/orders/cart?item_id=${this.state.cartData[idx].item_id}`,
      {
        headers: {
          Authorization: localStorage.getItem('TOKEN_KEY'),
        },
        method: 'PATCH',
        body: JSON.stringify({
          item_id: this.state.cartData[idx].item_id,
          quantities: this.state.cartData[idx].quantity,
        }),
      }
    ).then(() => {
      alert('성공');
    });
  };

  render() {
    const { cartData } = this.state;
    console.log(this.state.cartData);

    let originTotal = 0;
    for (let i = 0; i < cartData.length; i++) {
      originTotal += cartData[i].price * cartData[i].quantity;
    }

    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
      total +=
        (cartData[i].price - cartData[i].discount) * cartData[i].quantity;
    }

    let deliveryFee = total > 30000 ? 0 : 2500;

    let component = this;
    const carts = this.state.cartData.map(function (cart, index) {
      return (
        <CartListSection
          name={cart.name}
          price={cart.price}
          discount={cart.discount}
          image={cart.image}
          total={total}
          deliveryFee={deliveryFee}
          quantity={cart.quantity}
          calculateTotal={component.calculateTotal}
          changeQuantity={component.changeQuantity}
          index={index}
          key={cart.cart_id}
          ordered={component.ordered}
          deleteproduct={component.deleteproduct}
          reviseQuantity={component.reviseQuantity}
        />
      );
    });

    return (
      <>
        <main>
          <div className="cart">
            <section className="cartTitleSection">
              <div className="cartTitle">SHOPPING CART</div>
            </section>
            <section className="cartListSetion">
              <div className="cartList">
                <div className="cartListTableTitleBox">
                  <p className="cartListTableTitle">
                    일반상품 ({cartData.length})
                  </p>
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
            <CartTotalSectionFooter
              cartData={cartData}
              originTotal={originTotal}
              total={total}
              deliveryFee={deliveryFee}
            />
            <CartTotalSection
              cartData={cartData}
              originTotal={originTotal}
              total={total}
              deliveryFee={deliveryFee}
            />
            <CartButton cartData={cartData} />
          </div>
        </main>
      </>
    );
  }
}

export default withRouter(Cart);
