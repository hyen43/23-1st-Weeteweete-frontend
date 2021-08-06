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
      '적립금',
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

            <img
              className="btnToPrev"
              alt="botton to prev"
              src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/btn_prev.gif"
            />
          </header>
          <table className="orderDetailsTable">
            <th className="tablefix">
              <input type="checkbox" />
            </th>
            {list.map((ele, idx) => {
              return (
                <th className="tableStyle" key={idx}>
                  {ele}
                </th>
              );
            })}
            <tr>
              <th className="tableline">
                <input type="checkbox" />
              </th>
              <td className="tableline">
                <img className="productImg" alt="product_img" src="" />
              </td>
              <td className="tableline product">
                상품 정보..오리지널 스프링북 - 화이트~
              </td>
              <th className="tableline price">판매가</th>
              <th className="tableline quantity">수량</th>
              <th className="tableline mileage">적립금</th>
              <th className="tableline delivery">배송구분</th>
              <th className="tableline charge">배송비</th>
              <th className="tableline total">합계</th>
            </tr>
            <th colspan="9" className="totalPrice">
              <strong>기본배송</strong> 상품구매금액 3,500+ 배송비 2,500 -
              상품할인금액 350 = 합계:
              <span>
                5,650
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

          <div className="baseButton">
            <strong className="text">선택상품을</strong>
            <img
              alt="delete button"
              src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/btn_delete2.gif"
            />
            <img
              className="btnToPrev"
              alt="button to prev"
              src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/btn_prev.gif"
            />
          </div>
        </div>
        <header>
          <h3>배송 정보</h3>
        </header>
        <div className="text text2">
          <img
            alt="red star"
            src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/ico_required.gif"
          />
          필수입력사항
        </div>
        {/* {SIGNUP_LIST.map(list => {
          const { key, index, type, explain, name, className } = list;
          return (
            <div className="signUpFormBox" key={key}>
              <span className="signUpFormIndex">
                {index}
                <span className="signUpEssentialMark">*</span>
              </span>
              <input type={type} name={name} className={className} />
              <span>{explain}</span>
            </div>
          );

           {list.map((ele, idx) => {
              return (
                <th className="tableStyle" key={idx}>
                  {ele}
                </th>
              );
            })}
        })} */}
        <section className="orderArea">
          <form className="deliveryInfoTable">
            {DELIVERYINFO_LIST.map(ele => {
              const { key, index, type, name, className, explain } = ele;
              return (
                <div key={key}>
                  <span className="deliveryInfo">{index}</span>
                  <input type={type} name={name} className={className} />
                  {/* <span>{explain}</span> */}
                </div>
              );
            })}
          </form>
          {/* <table className="deliveryInfoTable">
            <th className="tableStyle">배송지 선택</th>
            <td>
              <input type="checkbox" name="userInfo" id="userInfo" />
              <label for="userInfo">회원 정보와 동일</label>

              <input type="checkbox" name="newUserInfo" id="newUserInfo" />
              <label for="newUserInfo">새로운 배송지</label>

              <img
                className="btnToFindAddress"
                alt="button to find address"
                src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/btn_address.gif"
              />
            </td>

            <tr>
              <th className="tableStyle">
                <img
                  alt="red star"
                  src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/ico_required.gif"
                />
                받으시는 분
              </th>
              <td>
                <input type="text" className="orderer" />
              </td>
            </tr>
            <tr>
              <th className="tableStyle">
                <img
                  alt="red star"
                  src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/ico_required.gif"
                />
                주소
              </th>
              <td>
                <input type="text" />
              </td>
            </tr>

            <tr>
              <th className="tableStyle">
                <img
                  alt="red star"
                  src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/ico_required.gif"
                />
                휴대전화
              </th>
              <td>
                <input type="text" className="numsBox" />
              </td>
            </tr>

            <tr>
              <th className="tableStyle">
                <img
                  alt="red star"
                  src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/ico_required.gif"
                />
                이메일
              </th>
              <td>
                <input type="text" />

                <p className="emailInfo">
                  이메일을 통해 주문처리과정을 보내드립니다. <br />
                  이메일 주소란에는 반드시 수신가능한 이메일주소를 입력해주세요.
                </p>
              </td>
            </tr>
            <tr>
              <th className="tableStyle">배송메시지</th>
              <td>
                <textarea></textarea>
              </td>
            </tr>
          </table> */}
        </section>
        <h3>결제 예정 금액</h3>
        <table className="totalPayAmountTable">
          <tr>
            <th className="tableStyle">
              총 주문 금액
              <img
                className="btnToDetails"
                alt="checking order detail"
                src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/btn_list.gif"
              />
            </th>
            <th className="tableStyle">총 할인 + 부가결제 금액</th>
            <th className="tableStyle">총 결제예정 금액</th>
          </tr>
          <tr>
            <td>6,000원</td>
            <td>-350원</td>
            <td>= 5,650원</td>
          </tr>
        </table>

        <table className="totalDiscountTable">
          <tr>
            <th className="tableStyle">총 할인금액</th>
            <td>350원</td>
          </tr>
          <tr>
            <th className="tableStyle">추가할인금액</th>
            <td>
              350원
              <img
                className="btnToDetails"
                alt="checking order detail"
                src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/btn_list.gif"
              />
            </td>
          </tr>
          <tr>
            <th className="tableStyle">총 부가결제금액</th>
            <td>0원</td>
          </tr>
        </table>

        <h3>결제수단</h3>
        <section className="payArea">
          <div className="payAreaInner">
            <div className="checkoutMethod">
              <img
                alt="payment method check"
                src="https://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_kakaopay_disabled.gif"
              />
              <p>
                <i className="fa-exclamation">!</i>
                최소 결제 가능 금액은 결제금액에서 배송비를 제외한 금액입니다.
              </p>
              <p>
                <i className="fa-exclamation">!</i>
                소액결제의 경우 PC사 정책에 따라 결제 금액 제한이 있을 수
                있습니다.
              </p>
            </div>
            <table className="contractInfoTable">
              <div className="textArea">
                <th>청약철회방침</th>
                <td>
                  <div className="textAreaInner">
                    <textarea id="checkoutInfo" name="checkoutInfo" rows="5">
                      ① 모트모트와 재화등의 구매에 관한 계약을 체결한 이용자는
                      수신확인의 통지를 받은 날부터 7일 이내에는 청약의 철회를
                      할 수 있습니다. ② 이용자는 재화등을 배송받은 경우 다음
                      각호의 1에 해당하는 경우에는 반품 및 교환을 할 수
                      없습니다. 1. 이용자에게 책임 있는 사유로 재화 등이 멸실
                      또는 훼손된 경우(다만, 재화 등의 내용을 확인하기 위하여
                      박스 포장을 개봉한 경우에는 청약철회를 할 수 있습니다) 2.
                      이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가
                      현저히 감소한 경우 3. 시간의 경과에 의하여 재판매가 곤란할
                      정도로 재화등의 가치가 현저히 감소한 경우 4. 같은 성능을
                      지닌 재화등으로 복제가 가능한 경우 그 원본인 재화 등의
                      포장을 훼손한 경우 ③ 제2항제2호 내지 제4호의 경우에 “몰”이
                      사전에 청약철회 등이 제한되는 사실을 소비자가 쉽게 알 수
                      있는 곳에 명기하거나 시용상품을 제공하는 등의 조치를 하지
                      않았다면 이용자의 청약철회 등이 제한되지 않습니다. ④
                      이용자는 제1항 및 제2항의 규정에 불구하고 재화등의 내용이
                      표시·광고 내용과 다르거나 계약내용과 다르게 이행된 때에는
                      당해 재화등을 공급받은 날부터 3월이내, 그 사실을 안 날
                      또는 알 수 있었던 날부터 30일 이내에 청약철회 등을 할 수
                      있습니다. 제16조(청약철회 등의 효과) ① “쇼핑몰 이름”은
                      이용자로부터 재화 등을 반환받은 경우 "3 영업일 이내"에
                      이미 지급받은 재화등의 대금을 환급합니다. 이 경우 “몰”이
                      이용자에게 재화등의 환급을 지연한 때에는 그 지연기간에
                      대하여 공정거래위원회가 정하여 고시하는 지연이자율을
                      곱하여 산정한 지연이자를 지급합니다. ② “쇼핑몰 이름”은 위
                      대금을 환급함에 있어서 이용자가 신용카드 또는 전자화폐
                      등의 결제수단으로 재화등의 대금을 지급한 때에는 지체없이
                      당해 결제수단을 제공한 사업자로 하여금 재화등의 대금의
                      청구를 정지 또는 취소하도록 요청합니다. ③ 청약철회등의
                      경우 공급받은 재화등의 반환에 필요한 비용은 이용자가
                      부담합니다. “몰”은 이용자에게 청약철회등을 이유로 위약금
                      또는 손해배상을 청구하지 않습니다. 다만 재화등의 내용이
                      표시·광고 내용과 다르거나 계약내용과 다르게 이행되어
                      청약철회등을 하는 경우 재화등의 반환에 필요한 비용은
                      “쇼핑몰 이름”이 부담합니다. ④ 이용자가 재화등을 제공받을때
                      발송비를 부담한 경우에 “몰”은 청약 철회시 그 비용을 누가
                      부담하는지를 이용자가 알기 쉽도록 명확하게 표시합니다.
                    </textarea>
                    <a href="#">
                      <img
                        className="btnToFullScreen"
                        alt="button to check info on full screen"
                        src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/btn_more.gif"
                      />
                    </a>
                  </div>
                  <div className="contractCheckBox">
                    <input type="checkbox" />
                  </div>
                </td>
              </div>
            </table>
          </div>
          <div className="total">
            <h3>카드 결제 최종결제 금액</h3>

            <img
              alt="button for checkingout"
              src="http://img.echosting.cafe24.com/skin/base_ko_KR/order/btn_place_order.gif"
            />
            <p>
              <strong>총 적립예정금액</strong>
              <span>0원</span>
            </p>
            <ul>
              <li>
                <strong>상품별 적립금</strong>
                <span>0원</span>
              </li>
              <li>
                <strong>회원 적립금</strong>
                <span>0원</span>
              </li>
              <li>
                <strong>쿠폰 적립금</strong>
                <span>0원</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default Payment;
