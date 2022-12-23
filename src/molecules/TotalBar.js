import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {colors, padding, fonts, margin} from '../styles/base.js';
import {parseAmount} from '../utils/parsing.js';

const TotalBar = ({data, count}) => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate('selection');
  };

  if (data) {
    return (
      <View style={styles.container}>
        <Text style={styles.text2}>Has seleccionado {count} producto(s)</Text>
        <View style={styles.btn}>
          <Text style={styles.text}>Total: ${parseAmount(data)}</Text>
          <Pressable style={styles.button} onPress={onPressHandler}>
            <Text style={styles.text}>Continuar</Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

export {TotalBar};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: padding.sm,
    marginTop: margin.xs,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: colors.secondary,
    fontSize: fonts.sm,
    fontFamily: fonts.primary,
  },
  text2: {
    color: colors.secondary,
    fontSize: fonts.xs,
    fontFamily: fonts.primary,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.secondary,
    padding: padding.xs,
    borderRadius: 10,
  },
});
