import React from 'react';
import './CartListSection.scss';

class CartListSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity,
    };
  }

  add = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    });
    this.props.calculateTotal(Number(this.props.price));
  };

  substract = () => {
    this.setState(prevState => {
      if (prevState.quantity > 1) {
        return {
          quantity: prevState.quantity - 1,
        };
      } else {
        return alert('최소 주문수량은 1개 입니다.');
      }
    });
    this.props.calculateTotal(-1 * Number(this.props.price));
  };

  childFunction = () => {
    this.props.parentFunction(this.childData);
  };

  render() {
    const { name, price, discount, image } = this.props;

    return (
      <section className="cartListSetion">
        <div className="cartList">
          <table className="cartListTable">
            <tbody className="cartListTableBody">
              <tr>
                <td>
                  <img className="cartImage" alt={name} src={image} />
                </td>
                <td className="productInfo">{name}</td>
                <td>
                  <p className="realPrice">
                    {Number(price).toLocaleString()}원
                  </p>
                  <p> {Number(discount).toLocaleString()}원 </p>
                </td>
                <td>
                  <div className="quantityTable">
                    <input
                      className="cartQuantity"
                      value={this.state.quantity}
                      type="text"
                      min="1"
                      max="100"
                      disabled
                    />
                    <div className="quantitybtn">
                      <button className="quantityPlus" onClick={this.add}>
                        <img
                          alt="plusQuantity"
                          src="https:img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_up.gif"
                        />
                      </button>
                      <button
                        className="quantityMinus"
                        onClick={this.substract}
                      >
                        <img
                          alt="plusQuantity"
                          src="https:img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_down.gif"
                        />
                      </button>
                      <button className="quantityChange"> 변경</button>
                    </div>
                  </div>
                </td>
                <td> 무료(조건 필수)</td>
                <td>
                  {(Number(discount) * this.state.quantity).toLocaleString()}원
                </td>
                <td className="selecteMenu">
                  <p>
                    <button className="cartOrder">주문하기</button>
                  </p>
                  <p>
                    <button className="cartDelete">x 삭제</button>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default CartListSection;
