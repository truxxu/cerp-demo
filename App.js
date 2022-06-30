import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Login, Register, Settings, Welcome} from './src/screens';
import {colors} from './src/styles/base.js';

const Stack = createNativeStackNavigator();
const headerOptions = {
  headerTintColor: colors.primary,
  headerShadowVisible: false,
  headerTransparent: true,
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{title: ''}}
        />
        <Stack.Screen name="login" component={Login} options={{title: ''}} />
        <Stack.Screen name="home" component={Home} options={{title: 'home'}} />
        <Stack.Screen
          name="settings"
          component={Settings}
          options={{title: 'settings'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
