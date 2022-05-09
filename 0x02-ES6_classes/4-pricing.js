/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) === 'number') {
      this._amount = amount;
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    }
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof (amount) === 'number') {
      this._amount = amount;
    }
  }
}
