import React from 'react';
import TopBar from '../common/TopBar';
import CardForm from './CardForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
  form: {
    padding: spacing(3)
  }
}));

const RegisterCard = () => {
  const classes = useStyles();
  return <div>
    <TopBar/>
    <div className={classes.form}>
      <CardForm/>
    </div>
  </div>
};

export default RegisterCard;