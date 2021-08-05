import React from 'react';
import { Link } from 'react-router-dom';

class ProductDetailOption extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

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
                    value="1"
                    type="text"
                    randonly="randonly"
                    min="1"
                    max="100"
                  />
                  <div className="plus">
                    <Link to="/">
                      <i className="fas fa-sort-up"></i>
                    </Link>
                  </div>
                  <div className="minus">
                    <Link to="/">
                      <i className="fas fa-sort-down"></i>
                    </Link>
                  </div>
                </span>
              </td>
              <td>{Number(discount_price).toLocaleString()}원</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default ProductDetailOption;
