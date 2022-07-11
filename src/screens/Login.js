import React, {useState, useContext} from 'react';
import {Image, Pressable, Text, StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';

import {ScreenTemplate, Button} from '../atoms';
import {Input} from '../molecules';
import {VerificationModal} from '../organisms';
import {fonts, colors, margin} from '../styles/base.js';
import {UserContext} from '../context/user-context';

import Logo from './../images/logo.png';

const Login = ({navigation}) => {
  const user = useContext(UserContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    reset();
  };

  const onSubmitModal = () => {
    user.completeSetup();
  };

  return (
    <ScreenTemplate center>
      <VerificationModal
        isVisible={isModalVisible}
        onSubmit={() => onSubmitModal()}
        onClose={() => setIsModalVisible(false)}
      />
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
          placeholder="Ingresa tu contraseña"
          control={control}
          isSecure={true}
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
    fontSize: fonts.sm,
    fontFamily: fonts.primary,
    color: colors.text,
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
});
