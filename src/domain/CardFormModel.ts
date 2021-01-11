export const isCardNumberValid = (cardNumber: string) =>
  cardNumber.length > 1 && cardNumber.match(/^\d+/g);