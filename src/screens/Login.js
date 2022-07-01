import React, {useState} from 'react';
import {Image, Pressable, Text, StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';

import {ScreenTemplate, Button, Modal} from '../atoms';
import {Input} from '../molecules';
import {fonts, colors, margin} from '../styles/base.js';

import Logo from './../images/logo.png';

const Login = ({navigation}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, isValid},
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = () => {
    setIsModalVisible(true);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const verificationModal = () => {
    return(
      <Modal isVisible={isModalVisible} close={() => setIsModalVisible(false)}>
        <Text style={styles.text}>
          Por favor ingresa a continuación el código de autenticación que
          enviamos a tu celular.
        </Text>
      </Modal>
    );
  };

  return (
    <ScreenTemplate center>
      {verificationModal()}
      <Image style={styles.image} source={Logo} />
      <Text style={[styles.text, styles.title]}>¡Bienvenido!</Text>

      <View style={styles.formContainer}>
        <Input
          name="id"
          label="Cédula"
          placeholder="Ingresa tu número de cédula"
          keyboard="numeric"
          control={control}
        />
        <Input
          name="password"
          label="Contraseña"
          placeholder="Ingresa una contraseña"
          keyboard="email-address"
          control={control}
        />
      </View>

      <Button
        label="Iniciar Sesión"
        action={handleSubmit(onSubmit)}
        disabled={!isDirty || !isValid}
      />

      <Pressable onPress={() => navigation.navigate('register')}>
        <Text style={styles.link}>Registrarse</Text>
      </Pressable>
    </ScreenTemplate>
  );
};

export {Login};

const styles = StyleSheet.create({
  title: {
    color: colors.primary,
    fontSize: fonts.xl,
    fontFamily: fonts.primary,
  },
  text: {
    textAlign: 'center',
    fontSize: fonts.md,
    fontFamily: fonts.primary,
  },
  link: {
    color: colors.primary,
    fontSize: fonts.sm,
    marginTop: margin.md,
  },
  image: {
    height: 100,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '100%',
    marginVertical: margin.xl,
  }
});
