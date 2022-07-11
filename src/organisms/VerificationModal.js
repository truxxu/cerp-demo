import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';

import {Button, Modal} from '../atoms';
import {Input} from '../molecules';
import {fonts, colors, margin} from '../styles/base.js';

const VerificationModal = ({isVisible, onClose, onSubmit}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, isValid},
  } = useForm({
    mode: 'onChange',
  });

  const onSubmitModal = () => {
    reset();
    onSubmit();
  };

  return (
    <Modal isVisible={isVisible} close={onClose}>
      <Text style={styles.text}>
        Por favor ingresa a continuación el código de autenticación que enviamos
        a tu celular.
      </Text>
      <View style={styles.formContainerModal}>
        <Input
          name="code"
          label="Código de Autenticación"
          placeholder="Ingresa tu código de autenticación"
          keyboard="numeric"
          control={control}
        />
      </View>
      <Button
        label="Autenticar"
        action={handleSubmit(onSubmitModal)}
        disabled={!isDirty || !isValid}
      />
    </Modal>
  );
};

export {VerificationModal};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: fonts.md,
    fontFamily: fonts.primary,
    color: colors.text,
    marginBottom: margin.lg,
  },
  title: {
    color: colors.text,
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    marginBottom: margin.sm,
    marginTop: margin.md,
  },
});
