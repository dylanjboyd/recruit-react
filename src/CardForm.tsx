import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ExpiryField from './ExpiryField';
import CardNumberField from './CardNumberField';
import CvcField from './CvcField';

const CardForm = () => {
  const submit = () => {
    //   if (!isCardNumberValid(draftCardNumber)) {
    //     setCardNumberError('Card number must be a valid number with at least one digit.');
    //     return;
    //   }
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CardNumberField/>
        </Grid>
        <Grid item xs={6}>
          <CvcField/>
        </Grid>
        <Grid item xs={6}>
          <ExpiryField/>
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="contained" fullWidth onClick={submit}>Submit</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardForm;