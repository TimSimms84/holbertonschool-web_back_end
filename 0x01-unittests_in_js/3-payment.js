//  function sendPaymentRequestToApi. The function takes two argument totalAmount, and totalShipping
// The function calls the Utils.calculateNumber function with type SUM, totalAmount as a
// totalShipping as b and display in the console the msg The total is: <result of the sum></result>
const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);
}

module.exports = sendPaymentRequestToApi;
