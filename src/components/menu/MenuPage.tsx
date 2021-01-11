import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: '60px'
  }
}));

const MenuPage = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={3}>
              <CreditCardIcon className={classes.icon} color="primary"/>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h5">Register cards</Typography>
              <Typography color="textSecondary">Add your known cards.</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => history.push('/')}>Go to form</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MenuPage;