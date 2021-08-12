import React from 'react';
import './PaymentOrderDetails.scss';

class PaymentOrderDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentList: [],
    };
  }

  componentDidMount() {
    fetch('/data/PaymentProductData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          paymentList: data.data,
        });
      });
  }

  render() {
    const productList = this.state.paymentList;
    const totalPrice = productList.reduce((total, arrayItem) => {
      total =
        total +
        Number(arrayItem.quantity) *
          Number(arrayItem.information[0].product_price);
      return total;
    }, 0);

    const discountPrice = productList.reduce((sale, arrayItem) => {
      sale =
        sale +
        Number(arrayItem.quantity) *
          Number(arrayItem.information[0].product_discount);
      return sale;
    }, 0);

    const deliveryFee = discountPrice < 30000 ? 2500 : 0;
    const paymentTotal = discountPrice + deliveryFee;

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
              {this.state.paymentList.map(product => {
                const {
                  product_image,
                  product_name,
                  product_price,
                  product_discount,
                } = product.information[0];
                return (
                  <tr key={product.order_number}>
                    <td className="tableline">{product_image}</td>
                    <td className="tableline">{product_name}</td>
                    <td className="tableline">{product_price}</td>
                    <td className="tableline">{product_discount}</td>
                    <td className="tableline">{product.quantity}</td>
                    <td className="tableline">
                      {Number(product_discount) * Number(product.quantity)}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan="9" className="totalPrice">
                  상품구매금액 {totalPrice}
                  <span>
                    <strong> 원</strong>
                  </span>
                  - 상품할인금액 {totalPrice - discountPrice}
                  <span>
                    <strong> 원</strong>
                  </span>
                  + 배송비 {deliveryFee}
                  <span>
                    <strong> 원</strong>
                  </span>
                  {paymentTotal}
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
  { key: 3, content: '할인가' },
  { key: 4, content: '수량' },
  { key: 5, content: '합계' },
];

export default PaymentOrderDetails;
