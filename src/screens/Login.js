import React from 'react';
import {Image, Pressable, Text, StyleSheet} from 'react-native';

import {ScreenTemplate, Button} from '../atoms';
import {fonts, colors} from '../styles/base.js';

import Logo from './../images/logo.png';

const Login = ({navigation}) => {
  return (
    <ScreenTemplate center>
      <Image style={styles.image} source={Logo} />
      <Text style={styles.text}>¡Bienvenido!</Text>
      <Button label="Iniciar Sesión" action={() => console.log('modal')} />
      <Pressable onPress={() => navigation.navigate('register')}>
        <Text style={styles.link}>Registrarse</Text>
      </Pressable>
    </ScreenTemplate>
  );
};

export {Login};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: fonts.xl,
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
