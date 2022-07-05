import React from 'react';
import {Text, Pressable, StyleSheet, View} from 'react-native';

import {default as BaseModal} from 'react-native-modal';

import {colors} from '../styles/base.js';

const Modal = ({isVisible, close, children}) => {
  return (
    <BaseModal isVisible={isVisible} style={{margin: 0}}>
      <View style={styles.container}>
        <View style={styles.button}>
          <Pressable onPress={close}>
            <Text>cerrar</Text>
          </Pressable>
        </View>
        <View style={styles.content}>{children}</View>
      </View>
    </BaseModal>
  );
};

export {Modal};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    marginTop: 50,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 20,
  },
  button: {
    alignSelf: 'flex-end',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
