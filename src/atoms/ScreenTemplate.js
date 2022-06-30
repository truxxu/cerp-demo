import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../styles/base.js';

const ScreenTemplate = ({children, center}) => {
  return (
    <View style={[styles.container, center && styles.center]}>{children}</View>
  );
};

export {ScreenTemplate};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    padding: 15,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
