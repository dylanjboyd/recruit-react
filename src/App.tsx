import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterCard from './RegisterCard';
import lime from '@material-ui/core/colors/lime';
import purple from '@material-ui/core/colors/purple';
import MenuPage from './MenuPage';

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: lime, secondary: purple
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <RegisterCard/>
          </Route>
          <Route path="/menu" exact>
            <MenuPage/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
