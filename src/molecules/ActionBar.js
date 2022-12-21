import React from 'react';
import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {colors, margin} from '../styles/base.js';

const TABS = [
  {
    label: 'Payzen',
    navigateTo: 'transfer',
    icon: 'credit-card',
  },
  {
    label: 'Transferir',
    navigateTo: 'transfer',
    icon: 'bank-transfer-out',
  },
  {
    label: 'Pagar',
    navigateTo: 'pay',
    icon: 'bank-transfer-in',
  },
  {
    label: 'Integración',
    navigateTo: 'integration',
    icon: 'web',
  },
  {
    label: 'Ajustes',
    navigateTo: 'settings',
    icon: 'cog',
  },
];

const ActionBar = () => {
  const navigation = useNavigation();

  return (
    <ScrollView horizontal>
      {TABS.map((item, index) => {
        return (
          <View key={index} style={styles.btn}>
            <Pressable
              style={styles.btnContainer}
              onPress={() => navigation.navigate(item.navigateTo)}>
              <Icon
                name={item.icon}
                color={colors.disabled2}
                size={25}
                style={styles.icon}
              />
              <Text style={styles.label}>{item.label}</Text>
            </Pressable>
          </View>
        );
      })}
    </ScrollView>
  );
};

export {ActionBar};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.disabled2,
  },
  btn: {
    marginRight: margin.sm,
  },
  label: {
    color: colors.text,
  },
});
