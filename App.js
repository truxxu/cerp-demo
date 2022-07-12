import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Home,
  Login,
  Register,
  Settings,
  Welcome,
  Transfer,
  WebService,
} from './src/screens';
import {colors} from './src/styles/base.js';
import {UserContext} from './src/context/user-context';

const Stack = createNativeStackNavigator();
const headerOptions = {
  headerStyle: {
    backgroundColor: colors.secondary,
  },
  headerTintColor: colors.primary,
  headerShadowVisible: false,
};

const App = () => {
  const user = useContext(UserContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerOptions}>
        {user.firstTime === 'true' ? (
          <>
            <Stack.Screen
              name="welcome"
              component={Welcome}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="register"
              component={Register}
              options={{title: '', headerShown: false}}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={{title: '', headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="home" component={Home} options={{title: ''}} />
            <Stack.Screen
              name="settings"
              component={Settings}
              options={{title: 'Ajustes'}}
            />
            <Stack.Screen
              name="transfer"
              component={Transfer}
              options={{title: 'Transferir'}}
            />
            <Stack.Screen
              name="integration"
              component={WebService}
              options={{title: 'Integración WebService'}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
