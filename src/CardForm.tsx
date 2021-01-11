import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CardFormModel from './domain/CardFormModel';

const CardForm = () => {
  const cardFormModel = new CardFormModel()
  const [draftCardNumber, setDraftCardNumber] = React.useState('');
  const [draftCvc, setDraftCvc] = React.useState('');
  const [draftExpiry, setDraftExpiry] = React.useState('');

  const setExpiryFromDisplay = (newValue: string) => {

    // Strip all non-digit values from display string
    newValue = newValue.replaceAll(/\\D/g, '');

    const splitExpiry = newValue.split('/');
    if (splitExpiry.length === 2 && splitExpiry[0] && splitExpiry[1]) {
      setDraftExpiry(splitExpiry[0].substr(0, 2));
      // setDraftExpiryYear(splitExpiry[1].substr(0, 4));
    } else if (splitExpiry.length === 1) {

    }

  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField label="Credit card number" fullWidth variant="outlined" value={draftCardNumber}
                     onChange={e => setDraftCardNumber(e.target.value)}
                     InputProps={{
                       startAdornment: (
                         <InputAdornment position="start">
                           <CreditCardIcon/>
                         </InputAdornment>
                       )
                     }}/>
        </Grid>
        <Grid item xs={6}>
          <TextField label="CVC" fullWidth variant="outlined" value={draftCvc}
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
          <Button color="primary" variant="contained" fullWidth>Submit</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardForm;