import React, {useState} from 'react';
import {Image, Pressable, Text, StyleSheet, View} from 'react-native';

import {ScreenTemplate, Button, Modal} from '../atoms';
import {fonts, colors} from '../styles/base.js';

import Logo from './../images/logo.png';

const Login = ({navigation}) => {
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
      <Button label="Iniciar Sesión" action={() => setIsModalVisible(true)} />
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
  },
  image: {
    height: 100,
    resizeMode: 'contain',
  },
});
