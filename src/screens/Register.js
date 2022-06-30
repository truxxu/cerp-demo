import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {ScreenTemplate} from '../atoms';
import {fonts, colors} from '../styles/base.js';

const Register = ({navigation}) => {
  return (
    <ScreenTemplate center>
      <Text style={styles.text}>Register</Text>
    </ScreenTemplate>
  );
};

export {Register};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: fonts.xl,
    fontFamily: fonts.primary,
  },
});
