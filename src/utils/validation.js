const validateAccount = value => {
  const accountCheck = /^[a-z0-9]{10,20}$/;
  return accountCheck.test(value);
};

const validatePassword = value => {
  const passwordCheck = /^[0-9]{8,20}$/;
  return passwordCheck.test(value);
};

const validateEmail = value => {
  const emailCheck = /^[0-9a-zA-Z]+@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/;
  return emailCheck.test(value);
};

export const validationFunction = {
  account: validateAccount,
  password: validatePassword,
  email: validateEmail,
};
