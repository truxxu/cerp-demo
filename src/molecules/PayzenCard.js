import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {colors, margin, padding} from '../styles/base.js';
import {Input} from './Input';
import {parseAmount} from '../utils/parsing.js';
import {UserContext} from '../context/user-context';

const PayzenCard = ({data}) => {
  const {descProd, numProd, pagoMin, tipoProd} = data;
  const user = useContext(UserContext);
  const [amount, setAmount] = useState(pagoMin);
  const [isEnabled, setIsEnabled] = useState(false);
  const parsedAmount = parseAmount(amount);

  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, isValid},
  } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    if (isEnabled) {
      user.addProduct({amount, descProd, numProd, tipoProd});
    } else {
      user.removeProduct(numProd);
    }
  }, [isEnabled]);

  const handleChange = e => {
    setAmount(parseInt(e));
    user.updateProduct(parseInt(e), numProd);
  };

  const handleCheckbox = () => setIsEnabled(!isEnabled);

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        onPress={handleCheckbox}
        textStyle={styles.headerText}
        fillColor={colors.primary}
        text={data.descProd}
        style={styles.header}
        isChecked={isEnabled}
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
        placeholder={parsedAmount}
        keyboard="numeric"
        control={control}
        action={handleChange}
        editable={isEnabled}
      />
      <Input
        name="total"
        label="Valor a pagar"
        placeholder={parsedAmount}
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
