/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {UserContextProvider} from './src/context/user-context';

const AppContext = () => {
  return (
    <UserContextProvider>
      <App />
    </UserContextProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppContext);
