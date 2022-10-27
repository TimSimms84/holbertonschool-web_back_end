// eslint-disable-next-line consistent-return
function getPaymentTokenFromApi(success) {
  if (success) {
    return Promise.resolve({ data: 'Sucess response from the API' });
  }
}

module.exports = getPaymentTokenFromApi;
