import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

import {fonts, colors, padding, margin} from '../styles/base.js';

const Button = ({label, action, disabled}) => {
  return (
    <Pressable
      style={[styles.button, disabled && {backgroundColor: colors.disabled}]}
      onPress={!disabled ? action : null}>
      <Text style={styles.textStyle}>{label}</Text>
    </Pressable>
  );
};

export {Button};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    paddingVertical: padding.xs,
    paddingHorizontal: padding.md,
    backgroundColor: colors.primary,
    marginVertical: margin.sm,
    minWidth: 120,
  },
  textStyle: {
    fontFamily: fonts.primary,
    color: colors.secondary,
    textAlign: 'center',
    fontSize: fonts.sm,
  },
});
