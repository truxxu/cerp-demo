import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {fonts, colors, margin} from '../styles/base.js';

const NewCardBtn = ({action}) => {
  return (
    <Pressable style={styles.container} onPress={action}>
      <Icon
        name="plus-circle-outline"
        color={colors.disabled2}
        size={50}
        style={styles.icon}
      />
      <View>
        <Text style={styles.placeholder}>Aún no tienes E-Cards.</Text>
        <Text style={styles.placeholder}>¡Solicita una!</Text>
      </View>
    </Pressable>
  );
};

export {NewCardBtn};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: margin.lg,
    justifyContent: 'center',
  },
  placeholder: {
    color: colors.disabled2,
    fontSize: fonts.md,
    fontFamily: fonts.primary,
  },
  icon: {
    marginRight: margin.sm,
  },
});
