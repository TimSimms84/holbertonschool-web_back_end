const express = require('express');

const app = express();

app
  .get('/', (req, res) => {
    res.send('Welcome to the payment system');
  })
  .get('/cart/:id([0-9]+)', (req, res) => {
    res.send(`Payment methods for cart ${req.params.id}`);
  })
  .listen(7865, () => {
    console.log('Server is listening on port 7865');
  });

module.exports = app;
