const validateAccount = account => {
  const accountCheck = /^[a-z0-9]{10,20}$/;
  return accountCheck.test(account);
};

const validatePassword = password => {
  const passwordCheck = /^[0-9]{8,20}$/;
  return passwordCheck.test(password);
};

const validateEmail = email => {
  const emailCheck = /^[0-9a-zA-Z]+@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/;
  return emailCheck.test(email);
};

export const validationFunction = {
  account: validateAccount,
  password: validatePassword,
  email: validateEmail,
};
