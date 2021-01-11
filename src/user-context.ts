import React from 'react';
import User from './domain/User';

export const UserContext = React.createContext({
  user: new User(''),
  setUser: (user: User) => {
  }
});