import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import TextField from '@material-ui/core/TextField';

const CardNumberField = () => {
  const [draftCardNumber, setDraftCardNumber] = React.useState('');
  const [cardNumberError, setCardNumberError] = React.useState('');

  return (
    <TextField label="Credit card number" fullWidth variant="outlined" value={draftCardNumber}
               onChange={e => setDraftCardNumber(e.target.value)} error={!!cardNumberError}
               helperText={cardNumberError} onFocus={() => setCardNumberError('')}
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