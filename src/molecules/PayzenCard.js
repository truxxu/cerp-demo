import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm} from 'react-hook-form';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {fonts, colors, margin, padding} from '../styles/base.js';
import {Input} from './Input';

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
      />
      <Input
        name="pagoMin"
        label="Pago mínimo"
        placeholder="1.000"
        keyboard="numeric"
        control={control}
      />
      <Input
        name="total"
        label="Valor a pagar"
        placeholder="1.000"
        control={control}
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
  },
});
