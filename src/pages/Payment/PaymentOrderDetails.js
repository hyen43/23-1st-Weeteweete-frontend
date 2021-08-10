import React from 'react';
import './PaymentOrderDetails.scss';

class PaymentOrderDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentList: [],
      productPrice: 0,
      discountPrice: 0,
      totalPrice: 0,
    };
  }

  componentDidMount() {
    fetch('/data/PaymentProductData.json', {})
      .then(res => res.json())
      .then(data => {
        this.setState({
          paymentList: data.data,
        });
      });
  }

  render() {
    const totalPrice = this.state.paymentList.map(el => {
      return (this.state.totalPrice +=
        Number(el.information[0].product_discount) * Number(el.quantity));
    });
    const productPrice = this.state.paymentList.map(el => {
      return (this.state.productPrice +=
        Number(el.information[0].product_price) * Number(el.quantity));
    });
    return (
      <main className="paymentOrderDetails">
        <section className="orderProductList">
          <ul>
            <li>
              <i className="faExclamation">!</i>
              상품의 옵션 및 수량 변경은 상품상세 또는 장바구니에서 가능합니다.
            </li>
          </ul>
          <header className="tableTitle">
            <h3>국내배송상품 주문내역</h3>
          </header>
          <table className="orderDetailsTable">
            <thead>
              <tr>
                {ORDER_DETAILS_LIST.map(list => {
                  const { key, content } = list;
                  return (
                    <th className="tableStyle" key={key}>
                      {content}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {this.state.paymentList.map(el => {
                return (
                  <tr key={el.order_number}>
                    <td className="tableline">
                      {el.information[0].product_image}
                    </td>
                    <td className="tableline">
                      {el.information[0].product_name}
                    </td>
                    <td className="tableline">
                      {el.information[0].product_price}
                    </td>
                    <td className="tableline">{el.quantity}</td>
                    <td className="tableline">
                      {Number(el.information[0].product_discount) *
                        Number(el.quantity) >=
                      30000
                        ? 0
                        : 2500}
                    </td>
                    <td className="tableline">
                      {Number(el.information[0].product_discount) *
                        Number(el.quantity)}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan="9" className="totalPrice">
                  상품구매금액 {productPrice[productPrice.length - 1]}{' '}
                  <span>
                    <strong> 원</strong>
                  </span>
                  - 상품할인금액{' '}
                  {productPrice[productPrice.length - 1] -
                    totalPrice[totalPrice.length - 1]}{' '}
                  <span>
                    <strong> 원</strong>
                  </span>
                  + 배송비{' '}
                  {totalPrice[totalPrice.length - 1] < 30000 ? 2500 : 0}{' '}
                  <span>
                    <strong> 원</strong>
                  </span>
                  =
                  {totalPrice[totalPrice.length - 1] < 30000
                    ? totalPrice[totalPrice.length - 1] + 2500
                    : totalPrice[totalPrice.length - 1]}
                  <span>
                    <strong> 원</strong>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <ul>
            <li>
              <i className="faExclamation">!</i>
              상품의 옵션 및 수량 변경은 상품상세 또는 장바구니에서 가능합니다.
            </li>
          </ul>
        </section>
      </main>
    );
  }
}

const ORDER_DETAILS_LIST = [
  { key: 0, content: '이미지' },
  { key: 1, content: '상품정보' },
  { key: 2, content: '판매가' },
  { key: 3, content: '수량' },
  { key: 5, content: '배송비' },
  { key: 6, content: '합계' },
];

export default PaymentOrderDetails;
