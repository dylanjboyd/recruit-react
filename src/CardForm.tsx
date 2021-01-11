import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ScheduleIcon from '@material-ui/icons/Schedule';

const CardForm = () => (
  <div>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField label="Credit card number" fullWidth variant="outlined"
                   InputProps={{
                     startAdornment: (
                       <InputAdornment position="start">
                         <CreditCardIcon/>
                       </InputAdornment>
                     )
                   }}/>
      </Grid>
      <Grid item xs={6}>
        <TextField label="CVC" fullWidth variant="outlined"
                   InputProps={{
                     startAdornment: (
                       <InputAdornment position="start">
                         <LockOpenIcon/>
                       </InputAdornment>
                     )
                   }}/>
      </Grid>
      <Grid item xs={6}>
        <TextField label="Expiry" fullWidth variant="outlined"
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

export default CardForm;