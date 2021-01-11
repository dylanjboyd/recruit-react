import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router-dom';

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

const TopBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const isMenuActive = React.useMemo(() => location.pathname === '/menu', [location]);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                    onClick={() => history.push(isMenuActive ? '/' : '/menu')}>
          {isMenuActive ? <ArrowBackIcon/> : <MenuIcon/>}
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {isMenuActive ? 'Menu' : 'Register card form'}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;