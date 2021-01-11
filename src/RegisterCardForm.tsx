import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const RegisterCardForm = () => {
  const classes = useStyles();
  const history = useHistory();

  return <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                    onClick={() => history.push('/menu')}>
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Register card form
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
};

export default RegisterCardForm;