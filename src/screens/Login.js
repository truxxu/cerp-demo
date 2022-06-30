import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {ScreenTemplate} from '../atoms';
import {fonts, colors} from '../styles/base.js';

const Login = ({navigation}) => {
  return (
    <ScreenTemplate center>
      <Text style={styles.text}>Login</Text>
    </ScreenTemplate>
  );
};

export {Login};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: fonts.xl,
    fontFamily: fonts.primary,
  },
});
