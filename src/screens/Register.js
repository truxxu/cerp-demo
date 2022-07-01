import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {useForm} from 'react-hook-form';

import {fonts, colors, margin} from '../styles/base.js';
import {ScreenTemplate, Button, Logo} from '../atoms';
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
        <Logo size={120} />
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.text}>
          Ingrese la siguiente información para completar su registro:
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
    color: colors.text,
    fontSize: fonts.md,
    fontFamily: fonts.primary,
    marginBottom: margin.sm,
    marginTop: margin.md,
  },
  text: {
    color: colors.text,
    fontSize: fonts.sm,
    fontFamily: fonts.primary,
    marginBottom: margin.md,
  },
});
