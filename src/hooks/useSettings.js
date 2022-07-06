import {useState, useCallback, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSettings = () => {
  const [firstTime, setFirstTime] = useState('true');
  const [isloadingConfig, setIsLoadingConfig] = useState(false);

  const logout = useCallback(async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log('Error logging out', error);
    }
  }, []);

  const completeSetup = async () => {
    try {
      await AsyncStorage.setItem('settings.firstTime', 'false');
      setFirstTime('false');
    } catch (error) {
      console.log('Error setting first time setup', error);
    }
  };

  const configSetup = useCallback(async () => {
    setIsLoadingConfig(true);
    try {
      const value = await AsyncStorage.getItem('settings.firstTime');

      if (value) {
        setFirstTime(value);
      } else {
        setFirstTime('true');
      }
    } catch (error) {
      console.log('Error reading settings', error);
    } finally {
      setIsLoadingConfig(false);
    }
  }, []);

  useEffect(() => {
    if (firstTime) {
      configSetup();
    }
  }, [firstTime, configSetup]);

  return {
    firstTime,
    isloadingConfig,
    logout,
    completeSetup,
    configSetup,
  };
};
