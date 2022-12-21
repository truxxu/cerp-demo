import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';

import {fonts, colors, margin, padding} from '../styles/base.js';

const Input = ({
  name,
  label,
  placeholder,
  keyboard,
  control,
  isSecure,
  editable = true,
  action,
}) => {
  const handleChange = e => {
    action(e);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        defaultValue={placeholder}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[styles.input, !editable && styles.disabled]}
            onBlur={onBlur}
            onChangeText={e => {
              onChange(e);
              handleChange(e);
            }}
            value={value}
            keyboardType={keyboard}
            secureTextEntry={isSecure}
            editable={editable}
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
    marginBottom: margin.sm,
    width: '100%',
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
    paddingHorizontal: padding.sm,
    paddingVertical: padding.xs,
  },
  disabled: {
    backgroundColor: colors.disabled2,
  },
});
