import React from 'react';
import { Link } from 'react-router-dom';

class ProductDetailOption extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
      min: 1,
    };
  }

  onClickPlusQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  onClickMiunsQuantity = () => {
    this.setState(prevState => {
      if (prevState.quantity > 1) {
        return {
          quantity: prevState.quantity - 1,
        };
      } else {
        return alert('최소 주문수량은 1개 입니다.');
      }
    });
  };

  handleChange = e => {
    this.setState({ quantity: e.target.value });
  };

  render() {
    const { discount_price } = this.props.detailData;

    return (
      <section className="productDetailInfo">
        <table className="productDetailOption">
          <tbody>
            <tr className="productDetailOptionTable">
              <td className="optionName">
                [오리지널] 텐미닛 플래너 31DAYS - 화이트
              </td>
              <td>
                <span className="quantitiyBlock">
                  <input
                    className="quantity"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                    type="text"
                    min="1"
                    max="100"
                    disabled
                  />
                  <div className="plus">
                    <button onClick={this.onClickPlusQuantity}>
                      <img
                        alt="plusQuantity"
                        src="https://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_up.gif"
                      />
                      {/* <i className="fas fa-sort-up"></i> */}
                    </button>
                  </div>
                  <div className="minus">
                    <button onClick={this.onClickMiunsQuantity}>
                      <img
                        alt="plusQuantity"
                        src="https://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_down.gif"
                      />
                      {/* <i className="fas fa-sort-down"></i> */}
                    </button>
                  </div>
                </span>
              </td>
              <td>
                {(
                  Number(discount_price) * this.state.quantity
                ).toLocaleString()}
                원
              </td>
            </tr>
          </tbody>
        </table>
        <table className="productDetailTotal">
          <tbody>
            <tr>
              <td>
                <span>Total: </span>
                <span className="totalPrice">
                  {(
                    Number(discount_price) * this.state.quantity
                  ).toLocaleString()}
                  원
                </span>
                <span> ({this.state.quantity}개)</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default ProductDetailOption;
