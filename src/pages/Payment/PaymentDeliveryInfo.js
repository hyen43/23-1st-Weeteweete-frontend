import React from 'react';
import DELIVERYINFO_LIST from './PaymentDeliveryInfoData';
import './PaymentDeliveryInfo.scss';

class PaymentDeliveryInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order_id: '',
      name: '',
      address: '',
      phone_number: '',
      contentet: '',
      email: '',
    };
  }

  componentDidMount() {
    fetch('https://api.google.com/user', {
      method: 'post',
      body: JSON.stringify({
        name: '',
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          alert('저장 완료');
        }
      });
  }

  // //   예은님 'order_id', 'total_price',
  // 'name', 'address', 'phone_number', 'content', 'email'
  // 가 결제페이지에서 결제 눌렀을때 백에 가야되는 정보래요!
  // // 아 키값이래요!! content는 배송메세지 부분..!

  render() {
    return (
      <main className="paymentDeliveryInfo">
        <header>
          <h3>배송 정보</h3>
        </header>
        <div className="text">
          <span className="madatoryStar">*</span>
          필수입력사항
        </div>
        <section className="orderArea">
          <form className="deliveryInfoTable">
            {DELIVERYINFO_LIST.map(ele => {
              const { key, lable, type, name, explain, className } = ele;
              return (
                <div key={key}>
                  <div className="table">
                    <div className="deliveryInfo">
                      <span className="madatoryStar">*</span>
                      <span>{lable}</span>
                    </div>
                    <div className={className}>
                      <input type={type} name={name} />
                      {<p>{explain}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </form>
        </section>
      </main>
    );
  }
}

export default PaymentDeliveryInfo;
