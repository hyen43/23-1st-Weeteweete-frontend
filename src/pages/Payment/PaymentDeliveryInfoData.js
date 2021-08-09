export const DELIVERYINFO_LIST = [
  {
    key: 1,
    lable: '받으시는 분',
    type: 'text',
    name: 'delivery_receiver',
    className: 'receiverInput',
    content: '',
  },

  {
    key: 2,
    lable: '주소',
    type: 'text',
    name: 'address',
    className: 'addressInput',
    content: '',
  },

  {
    key: 3,
    lable: '휴대전화',
    type: 'text',
    name: 'phone_number',
    className: 'phoneNumberInput',
    content: '',
  },

  {
    key: 4,
    lable: '이메일',
    type: 'text',
    name: 'email',
    className: 'emailInput',
    content:
      '이메일을 통해 주문처리과정을 보내드립니다. 이메일 주소란에는 반드시 수신가능한 이메일주소를 입력해 주세요.',
  },
  {
    key: 5,
    lable: '배송메시지',
    type: 'text',
    className: 'msgInput',
    content: '',
  },
];

export default DELIVERYINFO_LIST;
