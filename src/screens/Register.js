import React from 'react';
import {Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import {ScreenTemplate, Button} from '../atoms';
import {fonts, colors, margin} from '../styles/base.js';

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
        <Text style={styles.text}>Cédula</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="id"
        />
        <Text style={styles.text}>Número de celular</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="phone-pad"
            />
          )}
          name="phone"
        />
        <Text style={styles.text}>Correo electrónico</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
            />
          )}
          name="email"
        />
        <Text style={styles.text}>Contraseña</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="visible-password"
            />
          )}
          name="password"
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
