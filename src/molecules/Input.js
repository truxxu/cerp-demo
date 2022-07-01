import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';

import {fonts, colors, margin, padding} from '../styles/base.js';

const Input = ({name, label, placeholder, keyboard, control}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
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
            keyboardType={keyboard}
            placeholder={placeholder}
            placeholderTextColor={colors.disabled2}
          />
        )}
        name={name}
      />
    </View>
  );
};

export {Input};

const styles = StyleSheet.create({
  container: {
    marginBottom: margin.md,
  },
  label: {
    color: colors.primary,
    fontSize: fonts.xs,
    fontFamily: fonts.primary,
    marginBottom: margin.xs,
  },
  input: {
    color: colors.text,
    fontSize: fonts.sm,
    fontFamily: fonts.primary,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.disabled2,
    paddingHorizontal: padding.md,
  },
});
