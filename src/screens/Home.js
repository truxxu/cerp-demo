import React from 'react';
import {Text, StyleSheet, ScrollView, Pressable} from 'react-native';

import {ScreenTemplate, Card, SettingsBtn} from '../atoms';
import {fonts, colors, margin} from '../styles/base.js';

const PRODUCTS = [
  {
    label: 'Cuentas de Ahorro (1)',
    product: 'Ahorros',
    id: '345-0000-2332',
    balance: 'COP$10.234.034',
  },
  {
    label: 'CDTs (1)',
    product: 'CDT',
    id: '345-0000-2332',
    balance: 'COP$56.234.224',
    date: '13 Dic 2022',
  },
  {
    label: 'E-Cards (1)',
    product: 'Visa',
    id: '****************3556',
    balance: 'COP$0',
    button: 'Recargar',
  },
];

const Home = ({navigation}) => {
  const onButtonPress = () => {
    navigation.navigate('settings');
  };
  return (
    <ScreenTemplate>
      <SettingsBtn onPress={onButtonPress} />
      <ScrollView>
        <Text style={styles.title}>Mis productos</Text>
        {PRODUCTS.map((e, i) => {
          return <Card key={i} data={e} />;
        })}
        <Pressable
          style={styles.container}
          onPress={() => console.log('Add card')}>
          <Text style={styles.icon}>+</Text>
          <Text style={styles.placeholder}>
            Aún no tienes E-Cards. ¡Solicita una!
          </Text>
        </Pressable>
      </ScrollView>
    </ScreenTemplate>
  );
};

export {Home};

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    marginBottom: margin.sm,
    marginTop: margin.md,
  },
  container: {
    flexDirection: 'row',
  },
  placeholder: {
    color: colors.disabled2,
    fontSize: fonts.md,
    fontFamily: fonts.primary,
    marginBottom: margin.sm,
    marginTop: margin.md,
  },
  icon: {
    fontSize: 50,
    color: colors.disabled2,
    marginRight: margin.sm,
  },
});
