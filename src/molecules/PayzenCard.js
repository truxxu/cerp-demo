import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm} from 'react-hook-form';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {colors, margin, padding} from '../styles/base.js';
import {Input} from './Input';
import {parseAmount} from '../utils/parsing.js';

const PayzenCard = ({data}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, isValid},
  } = useForm({
    mode: 'onChange',
  });

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        onPress={() => console.log('checked!')}
        textStyle={styles.headerText}
        fillColor={colors.primary}
        text={data.descProd}
        style={styles.header}
      />
      <Input
        name="numProd"
        label="Número de producto"
        placeholder={data.numProd}
        control={control}
        editable={false}
      />
      <Input
        name="pagoMin"
        label="Pago mínimo"
        placeholder={parseAmount(data.pagoMin / 100)}
        keyboard="numeric"
        control={control}
      />
      <Input
        name="total"
        label="Valor a pagar"
        placeholder="1.000"
        control={control}
        editable={false}
      />
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
  header: {
    marginBottom: margin.sm,
    position: 'absolute',
    top: -13,
    left: 10,
    zIndex: 9,
    backgroundColor: colors.secondary,
    paddingHorizontal: padding.xs,
  },
  headerText: {
    textDecorationLine: 'none',
    color: colors.primary,
    fontWeight: 'bold',
  },
});
