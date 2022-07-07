import React from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors, margin} from '../styles/base.js';

const SettingsBtn = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Icon
          name="cog"
          color={colors.disabled2}
          size={25}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

export {SettingsBtn};

const styles = StyleSheet.create({
  container: {},
  icon: {
    marginRight: margin.sm,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
