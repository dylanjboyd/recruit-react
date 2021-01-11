import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ExpiryField from './ExpiryField';
import CardNumberField from './CardNumberField';
import CvcField from './CvcField';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import Card, { isCardNumberValid, isCvcValid, isExpiryValid } from '../../domain/Card';
import { registerCard } from '../../api/recruit-api';
import SubmissionErrorDialog from './SubmissionErrorDialog';
import NameDialog from './NameDialog';
import { UserContext } from '../../user-context';

const useStyles = makeStyles(({ spacing }) => ({
  welcomeMessage: {
    padding: spacing(3, 0, 5)
  }
}));

const CARD_NUMBER_INVALID = 'Card number must be a valid number with at least one digit.';
const EXPIRY_INVALID = 'Expiry date must be valid and complete.';
const CVC_INVALID = 'CVC must be a valid number.';

const CardForm = () => {
  const { user } = React.useContext(UserContext);
  const [isSnackbarOpen, setSnackbarOpen] = React.useState(false);

  const [submissionError, setSubmissionError] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const [draftCardNumber, setDraftCardNumber] = React.useState('');
  const [cardNumberError, setCardNumberError] = React.useState('');

  const [draftCvc, setDraftCvc] = React.useState('');
  const [cvcError, setCvcError] = React.useState('');

  const [draftExpiry, setDraftExpiry] = React.useState('');
  const [expiryError, setExpiryError] = React.useState('');

  const resetForm = () => {
    setDraftCardNumber('');
    setDraftCvc('');
    setDraftExpiry('');
  };

  const setExpiryFromDisplay = (newValue: string) => {

    // Strip all non-digit values from display string
    newValue = newValue.replaceAll(/[^\d/]/g, '')
      .replaceAll('//', '/');

    setDraftExpiry(prevState => {
      if (prevState.length === 1 && newValue.length === 2) {
        return newValue + '/';
      }

      return newValue.substr(0, 7);
    });
  };

  const submit = async () => {
    const splitExpiryString = draftExpiry.split('/');
    const expiryMonth = Number(splitExpiryString[0]) || -1;
    const expiryYear = splitExpiryString.length > 1 ? Number(splitExpiryString[1]) : -1;

    let cardNumberValid = isCardNumberValid(draftCardNumber);
    setCardNumberError(cardNumberValid ? '' : CARD_NUMBER_INVALID);
    let expiryValid = isExpiryValid(expiryMonth, expiryYear);
    setExpiryError(expiryValid ? '' : EXPIRY_INVALID);
    let cvcValid = draftCvc && isCvcValid(Number(draftCvc));
    setCvcError(cvcValid ? '' : CVC_INVALID);

    if (!cardNumberValid || !cvcValid || !expiryValid || !user.firstName) return;

    const card = new Card(draftCardNumber, Number(draftCvc), expiryMonth, expiryYear, user.firstName);
    setIsSubmitting(true);
    try {
      await registerCard(card);
      console.log(`Input values were:\n${JSON.stringify(card)}`);
      setSnackbarOpen(true);
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


      <NameDialog/>

      <Snackbar open={isSnackbarOpen} autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)} message="Credit card registered."/>

      <Typography variant="h5" color="textSecondary"
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
          <ExpiryField expiryError={expiryError} expiry={draftExpiry}
                       setExpiry={setExpiryFromDisplay}/>
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="contained" fullWidth onClick={submit}
                  disabled={isSubmitting} aria-label="submit">Submit</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardForm;