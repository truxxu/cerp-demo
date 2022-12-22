import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm} from 'react-hook-form';

import {parseAmount} from '../utils/parsing.js';
import {colors, margin, padding} from '../styles/base.js';
import {Input} from './Input';

const SelectedProduct = ({data}) => {
  const {descProd, numProd, amount} = data;

  const {control} = useForm();

  return (
    <View style={styles.container}>
      <Input
        name="descProd"
        label="Producto"
        placeholder={descProd}
        control={control}
        editable={false}
      />
      <Input
        name="numProd"
        label="Número de producto"
        placeholder={numProd}
        control={control}
        editable={false}
      />
      <Input
        name="amount"
        label="Valor a pagar"
        placeholder={`$ ${parseAmount(amount)}`}
        control={control}
        editable={false}
      />
    </View>
  );
};

export {SelectedProduct};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.disabled2,
    borderWidth: 1,
    borderRadius: 10,
    padding: padding.md,
    marginBottom: margin.sm,
  },
});
