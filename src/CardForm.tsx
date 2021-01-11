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
import { registerCard } from './api/recruit-api';
import SubmissionErrorDialog from './SubmissionErrorDialog';
import NameDialog from './NameDialog';

const useStyles = makeStyles(({ spacing }) => ({
  welcomeMessage: {
    paddingBottom: spacing(5)
  }
}));

const CARD_NUMBER_INVALID = 'Card number must be a valid number with at least one digit.';
const EXPIRY_INVALID = 'Expiry date must be valid and complete.';
const CVC_INVALID = 'CVC must be a valid number';

const CardForm = () => {
  const [user, setUser] = React.useState(new User(''));

  const [submissionError, setSubmissionError] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const [draftCardNumber, setDraftCardNumber] = React.useState('');
  const [cardNumberError, setCardNumberError] = React.useState('');

  const [draftCvc, setDraftCvc] = React.useState('');
  const [cvcError, setCvcError] = React.useState('');

  const [draftExpiryMonth, setDraftExpiryMonth] = React.useState(0);
  const [draftExpiryYear, setDraftExpiryYear] = React.useState(0);
  const [expiryError, setExpiryError] = React.useState('');

  function resetForm() {
    setDraftCardNumber('');
    setDraftCvc('');
    setDraftExpiryMonth(-1);
    setDraftExpiryYear(-1);
  }

  const submit = async () => {
    let cardNumberValid = isCardNumberValid(draftCardNumber);
    setCardNumberError(cardNumberValid ? '' : CARD_NUMBER_INVALID);
    let expiryValid = isExpiryValid(draftExpiryMonth, draftExpiryYear);
    setExpiryError(expiryValid ? '' : EXPIRY_INVALID);
    let cvcValid = draftCvc && isCvcValid(Number(draftCvc));
    setCvcError(cvcValid ? '' : CVC_INVALID);

    if (!cardNumberValid || !cvcValid || !expiryValid || !user.firstName) return;

    const card = new Card(draftCardNumber, Number(draftCvc), draftExpiryMonth, draftExpiryYear, user.firstName);
    setIsSubmitting(true);
    try {
      await registerCard(card);
      resetForm();
    } catch (e) {
      setSubmissionError(e.response?.data || e.toString());
    } finally {
      setIsSubmitting(false);
    }
  };

  const classes = useStyles();

  return (
    <div>
      <SubmissionErrorDialog errorMessage={submissionError} retry={submit}
                             isSubmitting={isSubmitting}
                             clearErrorMessage={() => setSubmissionError('')}/>


      <NameDialog firstName={user.firstName}
                  setFirstName={firstName => setUser(new User(firstName))}/>

      <Typography variant="h5"
                  className={classes.welcomeMessage}> Welcome, {user.firstName || 'user'}.</Typography>
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
          <Button color="primary" variant="contained" fullWidth onClick={submit}
                  disabled={isSubmitting}>Submit</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardForm;