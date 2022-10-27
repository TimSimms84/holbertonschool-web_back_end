// eslint-disable-next-line consistent-return
function getPaymentTokenFromApi(success) {
  if (success) {
    return new Promise((resolve) => {
      resolve({ data: 'Successful response from the API' });
    });
  }
}

module.exports = getPaymentTokenFromApi;
