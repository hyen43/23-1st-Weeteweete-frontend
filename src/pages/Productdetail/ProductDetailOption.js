import React from 'react';

class ProductDetailOption extends React.Component {
  render() {
    const { quantity } = this.props;
    const { name, discount_price } = this.props.detailData;

    return (
      <section className="productDetailInfo">
        <table className="productDetailOption">
          <tbody>
            <tr className="productDetailOptionTable">
              <td className="optionName">{name}</td>
              <td>
                <span className="quantitiyBlock">
                  <input
                    className="quantity"
                    value={quantity}
                    onChange={this.props.handleChange}
                    type="text"
                    min="1"
                    max="100"
                    disabled
                  />
                  <div className="plus">
                    <button onClick={this.props.onClickPlusQuantity}>
                      <img
                        alt="plusQuantity"
                        src="https://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_up.gif"
                      />
                      {/* <i className="fas fa-sort-up"></i> */}
                    </button>
                  </div>
                  <div className="minus">
                    <button onClick={this.props.onClickMiunsQuantity}>
                      <img
                        alt="plusQuantity"
                        src="https://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_down.gif"
                      />
                      {/* <i className="fas fa-sort-down"></i> */}
                    </button>
                  </div>
                </span>
              </td>
              <td>{(Number(discount_price) * quantity).toLocaleString()}원</td>
            </tr>
          </tbody>
        </table>
        <table className="productDetailTotal">
          <tbody>
            <tr>
              <td>
                <span>Total: </span>
                <span className="totalPrice">
                  {(Number(discount_price) * quantity).toLocaleString()}원
                </span>
                <span> ({quantity}개)</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default ProductDetailOption;
