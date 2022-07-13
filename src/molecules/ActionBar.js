import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {colors} from '../styles/base.js';

const ActionBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.btnContainer}
        onPress={() => navigation.navigate('transfer')}>
        <Icon
          name="bank-transfer-out"
          color={colors.disabled2}
          size={25}
          style={styles.icon}
        />
        <Text style={styles.label}>Transferir</Text>
      </Pressable>
      <View style={styles.spacer} />
      <Pressable
        style={styles.btnContainer}
        onPress={() => navigation.navigate('pay')}>
        <Icon
          name="bank-transfer-in"
          color={colors.disabled2}
          size={25}
          style={styles.icon}
        />
        <Text style={styles.label}>Pagar</Text>
      </Pressable>
      <View style={styles.spacer} />
      <Pressable
        style={styles.btnContainer}
        onPress={() => navigation.navigate('integration')}>
        <Icon
          name="web"
          color={colors.disabled2}
          size={25}
          style={styles.icon}
        />
        <Text style={styles.label}>Integración</Text>
      </Pressable>
    </View>
  );
};

export {ActionBar};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.disabled2,
  },
  spacer: {
    width: 15,
  },
  label: {
    color: colors.text,
  },
});
