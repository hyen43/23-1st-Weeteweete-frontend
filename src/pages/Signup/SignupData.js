const SIGNUP_LIST = [
  {
    key: 1,
    index: '아이디',
    type: 'text',
    name: 'account',
    explain: '(영문소문자/숫자, 4~16자)',
  },

  {
    key: 2,
    index: '비밀번호',
    type: 'password',
    name: 'password',
    explain: '(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)',
  },
  {
    key: 3,
    index: '비밀번호 확인',
    type: 'password',
    name: 'repassword',
    explain: '',
  },
  {
    key: 4,
    index: '이름',
    type: 'text',
    name: 'name',
    explain: '',
  },
  {
    key: 5,
    index: '주소',
    type: 'text',
    name: 'address',
    className: 'signUpAddressInput',
    explain: '',
  },
  {
    key: 6,
    index: '전화번호',
    type: 'text',
    name: 'phone_number',
    explain: '',
  },
  {
    key: 7,
    index: '이메일',
    type: 'text',
    name: 'email',
    className: 'signUpEmailInput',
    explain: '',
  },
  {
    key: 8,
    index: '이메일 수신여부',
    type: 'checkbox',
    explain:
      '쇼핑몰에서 제공하는 유익한 이벤트 소식을 이메일로 받으실 수 있습니다.',
  },
];

export default SIGNUP_LIST;
