import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';
import {colors} from '../styles/base.js';

const SettingsBtn = ({onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Options</Text>
    </Pressable>
  );
};

export {SettingsBtn};

const styles = StyleSheet.create({
  container: {},
  text: {
    color: colors.primary,
  },
});
