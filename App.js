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
  Pay,
  Products,
  Selection,
  PaymentDetails,
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
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="home"
              component={Home}
              options={{headerShown: false}}
            />
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
            <Stack.Screen
              name="pay"
              component={Pay}
              options={{title: 'Pagar'}}
            />
            <Stack.Screen
              name="products"
              component={Products}
              options={{title: 'Productos'}}
            />
            <Stack.Screen
              name="selection"
              component={Selection}
              options={{title: 'Productos a pagar'}}
            />
            <Stack.Screen
              name="payment"
              component={PaymentDetails}
              options={{title: 'Detalles del pago'}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
