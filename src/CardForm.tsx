import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { isCardNumberValid } from './domain/CardFormModel';

const CardForm = () => {
  const [draftCardNumber, setDraftCardNumber] = React.useState('');
  const [cardNumberError, setCardNumberError] = React.useState('');

  const [draftCvc, setDraftCvc] = React.useState('');
  const [cvcError, setCvcError] = React.useState('');

  const [draftExpiry, setDraftExpiry] = React.useState('');
  const [expiryError, setExpiryError] = React.useState('');

  const setExpiryFromDisplay = (newValue: string) => {

    // Strip all non-digit values from display string
    const strippedValue = newValue.replaceAll(/[^\d/]/g, '');

    // const splitExpiry = newValue.split('/');
    setDraftExpiry(strippedValue);
  };

  const submit = () => {
    if (!isCardNumberValid(draftCardNumber)) {
      setCardNumberError('Card number must be a valid number with at least one digit.');
      return;
    }
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField label="Credit card number" fullWidth variant="outlined" value={draftCardNumber}
                     onChange={e => setDraftCardNumber(e.target.value)} error={!!cardNumberError}
                     helperText={cardNumberError} onFocus={() => setCardNumberError('')}
                     InputProps={{
                       startAdornment: (
                         <InputAdornment position="start">
                           <CreditCardIcon/>
                         </InputAdornment>
                       )
                     }}/>
        </Grid>
        <Grid item xs={6}>
          <TextField label="CVC" fullWidth variant="outlined" value={draftCvc} error={!!cvcError}
                     helperText={cvcError || 'On rear of card'}
                     onFocus={() => setCvcError('')}
                     onChange={e => setDraftCvc(e.target.value)}
                     InputProps={{
                       startAdornment: (
                         <InputAdornment position="start">
                           <LockOpenIcon/>
                         </InputAdornment>
                       )
                     }}/>
        </Grid>
        <Grid item xs={6}>
          <TextField label="Expiry" fullWidth variant="outlined" value={draftExpiry}
                     onFocus={() => setExpiryError('')}
                     error={!!expiryError} helperText={expiryError || 'MM/YYYY'}
                     onChange={e => setExpiryFromDisplay(e.target.value)}
                     InputProps={{
                       startAdornment: (
                         <InputAdornment position="start">
                           <ScheduleIcon/>
                         </InputAdornment>
                       )
                     }}/>
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="contained" fullWidth onClick={submit}>Submit</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardForm;