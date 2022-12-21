import React, {createContext} from 'react';

import {useSettings} from '../hooks/useSettings';

export const UserContext = createContext({
  firstTime: 'true',
  isloadingConfig: false,
  logout: () => {},
  completeSetup: () => {},
  addProduct: () => {},
  removeProduct: () => {},
  updateProduct: () => {},
  clearSelection: () => {},
});

export const UserContextProvider = ({children}) => {
  const {
    firstTime,
    isloadingConfig,
    logout,
    completeSetup,
    addProduct,
    removeProduct,
    updateProduct,
    clearSelection,
  } = useSettings();

  return (
    <UserContext.Provider
      value={{
        firstTime,
        isloadingConfig,
        logout,
        completeSetup,
        addProduct,
        removeProduct,
        updateProduct,
        clearSelection,
      }}>
      {children}
    </UserContext.Provider>
  );
};
