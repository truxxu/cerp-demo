import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {fonts, colors, margin} from '../styles/base.js';
import {Card} from '../atoms';

const PRODUCTS = [
  {
    label: 'Cuentas de Ahorro (1)',
  },
  {
    product: 'Ahorros',
    id: '345-0000-2332',
    balance: 'COP$10.234.034',
  },
  {
    label: 'CDTs (1)',
  },
  {
    product: 'CDT',
    id: '345-0000-2332',
    balance: 'COP$56.234.224',
    date: '13 Dic 2022',
  },
];

const Products = ({cards, action}) => {
  return (
    <>
      <Text style={styles.title}>Mis productos</Text>
      {PRODUCTS.map((e, i) => {
        return <Card key={i} data={e} />;
      })}
      <Text style={styles.label}>E-Cards ({cards})</Text>
      {cards ? (
        <Card
          data={{
            product: 'Visa',
            id: '4539196035230463',
            balance: 'COP$0',
            button: 'Recargar',
          }}
          action={action}
        />
      ) : null}
    </>
  );
};

export {Products};

const styles = StyleSheet.create({
  title: {
    color: colors.primary,
    fontSize: fonts.md,
    fontFamily: fonts.primary,
    marginTop: margin.md,
  },
  label: {
    color: colors.text,
    fontSize: fonts.sm,
    fontFamily: fonts.primary,
    marginBottom: margin.sm,
    marginTop: margin.md,
  },
});
