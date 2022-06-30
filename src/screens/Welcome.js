import React from 'react';
import {Text, StyleSheet, Button} from 'react-native';

import {ScreenTemplate} from '../atoms';
import {fonts, colors} from '../styles/base.js';

const Welcome = ({navigation}) => {
  return (
    <ScreenTemplate center>
      <Text style={styles.text}>Welcome</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('login')}
      />
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
