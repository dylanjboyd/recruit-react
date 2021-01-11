import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ExpiryField from './ExpiryField';
import CardNumberField from './CardNumberField';
import CvcField from './CvcField';
import { Typography } from '@material-ui/core';
import User from './domain/User';
import { makeStyles } from '@material-ui/core/styles';
import Card, { isCardNumberValid, isCvcValid, isExpiryValid } from './domain/Card';
import { registerCard } from './domain/recruit-api';

const useStyles = makeStyles(({ spacing }) => ({
  welcomeMessage: {
    paddingBottom: spacing(5)
  }
}));

const CARD_NUMBER_INVALID = 'Card number must be a valid number with at least one digit.';
const EXPIRY_INVALID = 'Expiry date must be valid and complete.';
const CVC_INVALID = 'CVC must be a valid number';

const CardForm = () => {
  const user = new User('User');

  const [draftCardNumber, setDraftCardNumber] = React.useState('');
  const [cardNumberError, setCardNumberError] = React.useState('');

  const [draftCvc, setDraftCvc] = React.useState('');
  const [cvcError, setCvcError] = React.useState('');

  const [draftExpiryMonth, setDraftExpiryMonth] = React.useState(0);
  const [draftExpiryYear, setDraftExpiryYear] = React.useState(0);
  const [expiryError, setExpiryError] = React.useState('');

  const submit = async () => {
    setCardNumberError(isCardNumberValid(draftCardNumber) ? '' : CARD_NUMBER_INVALID);
    setExpiryError(isExpiryValid(draftExpiryMonth, draftExpiryYear) ? '' : EXPIRY_INVALID);
    setCvcError(draftCvc && isCvcValid(Number(draftCvc)) ? '' : CVC_INVALID);

    if (cardNumberError || cvcError || expiryError) return;

    const card = new Card(draftCardNumber, Number(draftCvc), draftExpiryMonth, draftExpiryYear);
    await registerCard(card);
  };

  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5"
                  className={classes.welcomeMessage}>Welcome, {user.firstName}.</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CardNumberField cardNumber={draftCardNumber} cardNumberError={cardNumberError}
                           onCardNumberChange={setDraftCardNumber}/>
        </Grid>
        <Grid item xs={6}>
          <CvcField cvc={draftCvc} setCvc={setDraftCvc} cvcError={cvcError}/>
        </Grid>
        <Grid item xs={6}>
          <ExpiryField expiryError={expiryError} setExpiryMonth={setDraftExpiryMonth}
                       setExpiryYear={setDraftExpiryYear}/>
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="contained" fullWidth onClick={submit}>Submit</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardForm;