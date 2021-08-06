import React from 'react';
import './Payment.scss';
import DELIVERYINFO_LIST from './DeliveryInfoData';

class Payment extends React.Component {
  render() {
    const list = [
      '이미지',
      '상품정보',
      '판매가',
      '수량',
      '배송구분',
      '배송비',
      '합계',
    ];
    return (
      <main>
        <div className="orderProductList">
          <ul className="orderInfo">
            <li>
              <i className="fa-exclamation">!</i>
              상품의 옵션 및 수량 변경은 상품상세 또는 장바구니에서 가능합니다.
            </li>
          </ul>
          <header className="tableTitle">
            <h3>국내배송상품 주문내역</h3>
          </header>
          <table className="orderDetailsTable">
            {list.map((list, idx) => {
              return (
                <th className="tableStyle" key={idx}>
                  {list}
                </th>
              );
            })}
            <tr>
              <td className="tableline">{'img'}</td>
              <td className="tableline">{'product'}</td>
              <th className="tableline">{'price'}</th>
              <th className="tableline">{'quantity'}</th>
              <th className="tableline">{'delivery'}</th>
              <th className="tableline">{'delivery fee'}</th>
              <th className="tableline">{'total'}</th>
            </tr>
            <th colspan="9" className="totalPrice">
              <strong>기본배송</strong> 상품구매금액 {''}+ 배송비 {''} -
              상품할인금액 {''} = 합계:
              <span>
                {''}
                <strong>원</strong>
              </span>
            </th>
          </table>
          <ul>
            <li>
              <i className="fa-exclamation">!</i>
              상품의 옵션 및 수량 변경은 상품상세 또는 장바구니에서 가능합니다.
            </li>
          </ul>
        </div>
        <header>
          <h3>배송 정보</h3>
        </header>
        <div className="text">
          <img
            alt="red star"
            src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/ico_required.gif"
          />
          필수입력사항
        </div>
        <section className="orderArea">
          <form className="deliveryInfoTable">
            {DELIVERYINFO_LIST.map(ele => {
              const { key, lable, type, name, explain } = ele;
              return (
                <div key={key}>
                  <div className="table">
                    <div className="deliveryInfo">
                      <img
                        alt="madatory option star"
                        src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/ico_required.gif"
                      />
                      <span>{lable}</span>
                    </div>
                    <div>
                      <input type={type} name={name} />
                      {<p className="emailInfo">{explain}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </form>
        </section>
        <h3>결제 예정 금액</h3>
        <table className="totalPayAmountTable">
          <tr>
            <th className="tableStyle">총 주문 금액</th>
            <th className="tableStyle">총 할인 + 부가결제 금액</th>
            <th className="tableStyle">총 결제예정 금액</th>
          </tr>
          <tr>
            <td>{'total order price'}</td>
            <td>{'total price + extra fee'}</td>
            <td>{'total price'}</td>
          </tr>
        </table>

        <section className="payArea">
          <h3>최종결제 금액</h3>
          <p>{''}원</p>
          <button>결제하기</button>
        </section>
      </main>
    );
  }
}

export default Payment;
