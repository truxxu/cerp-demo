import React, {useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';

import {ScreenTemplate} from '../atoms';

import Logo from './../images/logo3.png';

const Welcome = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('register');
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ScreenTemplate center>
      <Image style={styles.image} source={Logo} />
    </ScreenTemplate>
  );
};

export {Welcome};

const styles = StyleSheet.create({
  image: {
    height: 300,
    resizeMode: 'contain',
  },
});
