import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {fonts, colors, margin, padding} from '../styles/base.js';

const Card = ({data}) => {
  const handlePress = () => {
    console.log('pressed');
  };

  return (
    <>
      <Text style={styles.label}>{data.label}</Text>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{data.product}</Text>
          <Text style={styles.text}>{data.id}</Text>
        </View>
        <View style={styles.textContainer}>
          <View>
            {data.date && (
              <>
                <Text style={styles.title}>Fecha</Text>
                <Text style={styles.text}>{data.date}</Text>
              </>
            )}
            {data.button && (
              <Pressable style={styles.button} onPress={handlePress}>
                <Text style={styles.text}>Recargar</Text>
              </Pressable>
            )}
          </View>
          <View style={{width: '40%'}}>
            <Text style={styles.title}>Saldo</Text>
            <Text style={styles.text}>{data.balance}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export {Card};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.disabled2,
    borderWidth: 1,
    borderRadius: 10,
    padding: padding.md,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: margin.lg,
  },
  title: {
    color: colors.primary,
    fontSize: fonts.xs,
    fontFamily: fonts.primary,
  },
  text: {
    color: colors.text,
    fontSize: fonts.xs,
    fontFamily: fonts.primary,
  },
  label: {
    color: colors.text,
    fontSize: fonts.sm,
    fontFamily: fonts.primary,
    marginBottom: margin.sm,
    marginTop: margin.md,
  },
  button: {
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: padding.xs,
    paddingHorizontal: padding.sm,
    borderColor: colors.disabled2,
  },
});