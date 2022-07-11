import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {Button, Modal} from '../atoms';
import {fonts, colors, margin} from '../styles/base.js';

const SuccessModal = ({
  isVisible,
  onClose,
  onSubmit,
  title,
  text,
  btnLabel,
}) => {
  return (
    <Modal isVisible={isVisible} close={onClose}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
      <Button label={btnLabel} action={onSubmit} />
    </Modal>
  );
};

export {SuccessModal};

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
