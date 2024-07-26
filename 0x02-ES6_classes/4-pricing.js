import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get Name() {
    return this._amount;
  }

  set Name(amount) {
    this._amount = amount;
  }

  get Currency() {
    return this._currency;
  }

  set Currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instanceof of Currency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} ${this._currency.code}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
