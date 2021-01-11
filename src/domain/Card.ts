export default class Card {
  cardNumber: string;
  cvc: number;
  expiryMonth: number;
  expiryYear: number;
  name: string;


  constructor(cardNumber: string, cvc: number, expiryMonth: number, expiryYear: number, firstName: string) {
    this.cardNumber = cardNumber;
    this.cvc = cvc;
    this.expiryMonth = expiryMonth;
    this.expiryYear = expiryYear;
    this.name = firstName;
  }
}

export const isCardNumberValid = (cardNumber: string) =>
  cardNumber.length && cardNumber.match(/^\d+$/);

export const isExpiryValid = (expiryMonth: number, expiryYear: number) =>
  expiryMonth > 0 && expiryMonth < 13 && expiryYear > 0 && expiryYear < 10000;

export const isCvcValid = (cvc: number) => cvc > 0;