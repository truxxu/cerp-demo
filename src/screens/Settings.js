import React, {useContext} from 'react';
import {Text, Pressable, StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';

import {ScreenTemplate, Button} from '../atoms';
import {UserContext} from '../context/user-context';
import {Input} from '../molecules';
import {fonts, colors, margin} from '../styles/base.js';

const Settings = () => {
  const user = useContext(UserContext);

  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, isValid},
  } = useForm({
    mode: 'onChange',
  });

  const onLogout = () => {
    user.logout();
  };

  const onSubmit = () => {
    reset();
  };

  return (
    <ScreenTemplate>
      <Input
        name="logo"
        label="Logo"
        placeholder="Escoge un archivo de imagen"
        control={control}
      />
      <Input
        name="name"
        label="Nombre"
        placeholder="Ingresa el nombre"
        control={control}
      />
      <Input
        name="url"
        label="URL"
        placeholder="Ingresa la URL del servicio"
        control={control}
      />
      <View style={styles.container}>
        <Button
          label="Guardar"
          action={handleSubmit(onSubmit)}
          disabled={!isDirty || !isValid}
        />
        <Pressable style={styles.logout} onPress={onLogout}>
          <Text style={styles.text}>Cerrar Sesión</Text>
        </Pressable>
      </View>
    </ScreenTemplate>
  );
};

export {Settings};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: fonts.sm,
    fontFamily: fonts.primary,
  },
  logout: {
    marginTop: margin.md,
  },
  container: {
    marginVertical: margin.sm,
  },
});
