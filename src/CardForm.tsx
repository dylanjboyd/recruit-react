import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const CardForm = () => (
  <div>
    <TextField label="Credit card number"
               InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                     <CreditCardIcon/>
                   </InputAdornment>
                 )
               }}/>
  </div>
);

export default CardForm;