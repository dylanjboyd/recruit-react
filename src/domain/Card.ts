export default class Card {
  cardNumber: string;
  cvc: number;
  expiryMonth: number;
  expiryYear: number;

  constructor(cardNumber: string, cvc: number, expiryMonth: number, expiryYear: number) {
    this.cardNumber = cardNumber;
    this.cvc = cvc;
    this.expiryMonth = expiryMonth;
    this.expiryYear = expiryYear;
  }
}

export const isCardNumberValid = (cardNumber: string) =>
  cardNumber.length && cardNumber.match(/^\d+$/);