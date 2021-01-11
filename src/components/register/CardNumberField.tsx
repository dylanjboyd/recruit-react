import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import TextField from '@material-ui/core/TextField';

interface ICardNumberProps {
  onCardNumberChange: (cardNumber: string) => any;
  cardNumber: string;
  cardNumberError: string;
}

const CardNumberField: React.FC<ICardNumberProps> = (props) => {
  const { cardNumber, onCardNumberChange, cardNumberError } = props;

  return (
    <TextField label="Credit card number" fullWidth variant="outlined" value={cardNumber}
               onChange={e => onCardNumberChange(e.target.value.replaceAll(/\D/g, ''))}
               error={!!cardNumberError} id="credit-card-number"
               helperText={cardNumberError}
               inputMode="decimal"
               InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                     <CreditCardIcon/>
                   </InputAdornment>
                 )
               }}/>
  );
};

export default CardNumberField;