import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Home, Login, Register, Settings, Welcome} from './src/screens';

const App = () => {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};

export default App;
