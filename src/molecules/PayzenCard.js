import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {fonts, colors, margin, padding} from '../styles/base.js';

const PayzenCard = ({data}) => {
  return (
    <View style={styles.container}>
      <Text>{data.descProd}</Text>
    </View>
  );
};

export {PayzenCard};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.disabled2,
    borderWidth: 1,
    borderRadius: 10,
    padding: padding.md,
  },
});
