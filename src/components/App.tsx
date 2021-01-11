import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterCard from './register/RegisterCard';
import lime from '@material-ui/core/colors/lime';
import purple from '@material-ui/core/colors/purple';
import MenuPage from './menu/MenuPage';
import User from '../domain/User';
import { UserContext } from '../user-context';

const App = () => {
  const [user, setUser] = React.useState(new User(''));
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
            <UserContext.Provider value={{ user: user, setUser: (user: User) => setUser(user) }}>
              <RegisterCard/>
            </UserContext.Provider>
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
