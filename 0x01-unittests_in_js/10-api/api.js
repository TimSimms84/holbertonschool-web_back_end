const express = require('express');

const app = express();

app
  .get('/', (req, res) => {
    res.send('Welcome to the payment system');
  })
  .get('/cart/:id([0-9]+)', (req, res) => {
    res.send(`Payment methods for cart ${req.params.id}`);
  })
  .get('/available_payments', (req, res) => {
    const paymentMethods = {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    };
    res.json(paymentMethods);
  })
  .use(express.json())
  .post('/login', (req, res) => {
    res.send(`Welcome ${req.body.userName}`);
  })
  .listen(7865, () => {
    console.log('Server is listening on port 7865');
  });

module.exports = app;
