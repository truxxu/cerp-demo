import React, {createContext} from 'react';

import {useSettings} from '../hooks/useSettings';

export const UserContext = createContext({
  firstTime: 'true',
  isloadingConfig: false,
  logout: () => {},
  completeSetup: () => {},
});

export const UserContextProvider = ({children}) => {
  const {firstTime, isloadingConfig, logout, completeSetup} = useSettings();

  return (
    <UserContext.Provider
      value={{
        firstTime,
        isloadingConfig,
        logout,
        completeSetup,
      }}>
      {children}
    </UserContext.Provider>
  );
};
