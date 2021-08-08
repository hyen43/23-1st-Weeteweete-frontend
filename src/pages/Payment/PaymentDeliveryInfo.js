import React from 'react';
import DELIVERYINFO_LIST from './PaymentDeliveryInfoData';
import './PaymentDeliveryInfo.scss';

class PaymentDeliveryInfo extends React.Component {
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
