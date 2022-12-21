import React from 'react';
import {StyleSheet, Image} from 'react-native';
import logo from './../images/logo5.png';

const Logo = ({size}) => {
  return <Image style={[styles.image, {height: size}]} source={logo} />;
};

export {Logo};

const styles = StyleSheet.create({
  image: {
    width: null,
    resizeMode: 'contain',
  },
});
