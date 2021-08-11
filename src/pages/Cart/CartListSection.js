import React from 'react';
import './CartListSection.scss';

class CartListSection extends React.Component {
  add = () => {
    this.props.quantityUpdate(this.props.index);
    this.props.calculateTotal(this.props.price);
  };

  substract = () => {
    if (this.props.quantity > 1) {
      this.props.quantitySubstract(this.props.index);
      this.props.calculateTotal(-1 * this.props.price);
    } else {
      alert('최소 수량은 1개입니다. ');
    }
  };

  render() {
    const { name, price, discount, image, quantity, delivery, index } =
      this.props;

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
                  <p className="realPrice">{price.toLocaleString()}원</p>
                  <p> {discount.toLocaleString()}원 </p>
                </td>
                <td>
                  <div className="quantityTable">
                    <input
                      className="cartQuantity"
                      value={quantity}
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
                      <button
                        className="quantityChange"
                        onClick={() => this.props.reviseFunction(index)}
                      >
                        변경
                      </button>
                    </div>
                  </div>
                </td>
                <td> {delivery.toLocaleString()}</td>
                <td>{(discount * quantity).toLocaleString()}원</td>
                <td className="selecteMenu">
                  <p>
                    <button
                      className="cartOrder"
                      onClick={() => this.props.orderFunction(index)}
                    >
                      주문하기
                    </button>
                  </p>
                  <p>
                    <button
                      className="cartDelete"
                      onClick={() => this.props.deleteFunction(index)}
                    >
                      x 삭제
                    </button>
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
