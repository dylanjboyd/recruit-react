export default class CardFormModel {
  cardNumber: string;
  cvc?: number;
  expiryMonth?: number;
  expiryYear?: number;

  constructor() {
    this.cardNumber = '';
    this.cvc = undefined;
    this.expiryMonth = undefined;
    this.expiryYear = undefined;

  }

  isValidForSubmission = () => {
    return this.cardNumber.length > 0 && this.cardNumber.match(/^\\d+$/g) &&
      this.cvc && this.cvc > 0 &&
      this.expiryMonth && this.expiryMonth > 0 && this.expiryMonth < 13 &&
      this.expiryYear && this.expiryYear > 0 && this.expiryYear < 10000;
  }
}