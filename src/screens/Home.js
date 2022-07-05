import React from 'react';
import {Text, StyleSheet, ScrollView, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ScreenTemplate, Card} from '../atoms';
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

const Home = () => {
  return (
    <ScreenTemplate>
      <ScrollView>
        <Text style={styles.title}>Mis productos</Text>
        {PRODUCTS.map((e, i) => {
          return <Card key={i} data={e} />;
        })}
        <Pressable
          style={styles.container}
          onPress={() => console.log('Add card')}>
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
