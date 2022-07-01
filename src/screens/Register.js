import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {useForm} from 'react-hook-form';

import {fonts, colors, margin} from '../styles/base.js';
import {ScreenTemplate, Button} from '../atoms';
import {Input} from '../molecules';

const Register = ({navigation}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, isValid},
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = () => {
    console.log('click');
  };

  return (
    <ScreenTemplate>
      <ScrollView>
        <Text style={styles.title}>
          Por favor ingresa los siguientes datos personales
        </Text>
        <Input
          name="id"
          label="Cédula"
          placeholder="Ingresa tu número de cédula"
          keyboard="numeric"
          control={control}
        />
        <Input
          name="phone"
          label="Celular"
          placeholder="Ingresa tu número de celular"
          keyboard="numeric"
          control={control}
        />
        <Input
          name="email"
          label="Email"
          placeholder="Ingresa tu correo electrónico"
          keyboard="email-address"
          control={control}
        />
        <Input
          name="password"
          label="Contraseña"
          placeholder="Ingresa una contraseña"
          keyboard="email-address"
          control={control}
        />
        <Button
          label="Aceptar"
          action={handleSubmit(onSubmit)}
          disabled={!isDirty || !isValid}
        />
      </ScrollView>
    </ScreenTemplate>
  );
};

export {Register};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    marginBottom: margin.md,
  },
  text: {
    color: colors.primary,
    fontSize: fonts.md,
    fontFamily: fonts.primary,
  },
  input: {
    color: colors.primary,
    fontSize: fonts.sm,
    backgroundColor: 'whitesmoke',
    fontFamily: fonts.primary,
    marginBottom: margin.md,
    marginTop: margin.sm,
  },
});
