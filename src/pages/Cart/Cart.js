import React from 'react';
import './Cart.scss';

class Cart extends React.Component {
  render() {
    return (
      <main>
        <div className="Cart">
          <section className="cartTitleSection">
            <div className="cartTitle">SHOPPING CART</div>
          </section>
          <section className="cartListSetion">
            <div className="cartList">
              <table>
                {/* <colgroup>
            <col 
            </colgroup> */}
                <caption> 일반상품 (5) </caption>
                <thead>
                  <tr>
                    <th> 이미지 </th>
                    <th> 상품정보 </th>
                    <th> 판매가 </th>
                    <th> 수량 </th>
                    <th> 적립금 </th>
                    <th> 배송비 </th>
                    <th> 합계 </th>
                    <th> 선택 </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 이미지 url</td>
                    <td>
                      (name 으로 변경 필요) [오리지널] 텐미닛 플래너 31DAYS -
                      화이트
                    </td>
                    <td>
                      <p> 2000원 </p>
                      <p> 1800원 </p>
                    </td>
                    <td>
                      <div className="quantityTable">
                        <input
                          className="cartQuantity"
                          value="1"
                          type="text"
                          min="1"
                          max="100"
                          disabled
                        />
                        <div className="quantityPlus">
                          <button>
                            <img
                              alt="plusQuantity"
                              src="https://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_up.gif"
                            />
                          </button>
                        </div>
                        <div className="quantityMinus">
                          <button>
                            <img
                              alt="plusQuantity"
                              src="https://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_down.gif"
                            />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td> 적립금 2000원</td>
                    <td> 무료(조건 필수)</td>
                    <td> 16,200원</td>
                    <td>
                      <p>
                        <button className="cartOrder">주문하기</button>
                      </p>
                      <p>
                        <button className="cartDelete">x 삭제</button>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <div className="CartFooter">
                      <td colspan="8">
                        <span>
                          [기본배송/총 상품 금액 30,000원 이상 구매 시 무료배송]
                        </span>
                        <span>
                          상품구매금액 00원 + 배송비 0원(무료/유료)-상품할인금액
                          00원 = 합계: 00000원
                        </span>
                      </td>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <div className="cartTotal">
              <table>
                <thead>
                  <tr>
                    <th> 총 상품금액</th>
                    <th> 총 배송비</th>
                    <th> 총 할인금액</th>
                    <th> 총 결제예정금액</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 00000원</td>
                    <td> +0원(유료일 땐, 2500원)</td>
                    <td> 0000원</td>
                    <td> = 0000원 </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <div className="cartButton">
              <button className="cartOrderbtn"> 전체상품주문</button>
              <button className="cartKeepShopping"> 쇼핑계속하기</button>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Cart;
