import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <Icon
        name="check-circle"
        color={colors.primary}
        size={90}
        style={styles.icon}
      />
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
