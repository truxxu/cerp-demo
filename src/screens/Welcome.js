import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {ScreenTemplate} from '../atoms';
import {fonts, colors} from '../styles/base.js';
import {Button} from '../atoms';

const Welcome = ({navigation}) => {
  return (
    <ScreenTemplate center>
      <Text style={styles.text}>Welcome</Text>
      <Button label="Login" action={() => navigation.navigate('login')} />
      <Button label="Register" action={() => navigation.navigate('register')} />
    </ScreenTemplate>
  );
};

export {Welcome};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: fonts.xl,
    fontFamily: fonts.primary,
  },
});
