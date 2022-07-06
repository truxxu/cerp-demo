import React, {useContext} from 'react';
import {BackHandler} from 'react-native';

import {ScreenTemplate, Button} from '../atoms';
import {UserContext} from '../context/user-context';

const Settings = () => {
  const user = useContext(UserContext);

  const onLogout = () => {
    user.logout();
    BackHandler.exitApp();
  };

  return (
    <ScreenTemplate>
      <Button label="Logout" action={onLogout} />
    </ScreenTemplate>
  );
};

export {Settings};
