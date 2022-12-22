import React from 'react';
import {StyleSheet, Pressable, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {colors, margin} from '../styles/base.js';
import logo from './../images/logo6.png';

const SettingsBtn = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('settings');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />
      <Pressable style={styles.button} onPress={handlePress}>
        <Icon
          name="cog"
          color={colors.disabled2}
          size={25}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

export {SettingsBtn};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: margin.md,
  },
  icon: {
    marginRight: margin.sm,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {
    width: 250,
    height: null,
    // resizeMode: 'contain',
  },
});
