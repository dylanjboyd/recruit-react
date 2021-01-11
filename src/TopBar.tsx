import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

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

interface ITopBarProps {
  isMenuMode?: boolean;
}

const TopBar: React.FC<ITopBarProps> = ({ isMenuMode }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                    onClick={() => history.push('/menu')}>
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {isMenuMode ? 'Menu' : 'Register card form'}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;