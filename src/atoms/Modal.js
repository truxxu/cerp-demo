import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {default as BaseModal} from 'react-native-modal';

import {colors, margin} from '../styles/base.js';

const Modal = ({isVisible, close, children}) => {
  return (
    <BaseModal isVisible={isVisible} style={{margin: 0}}>
      <View style={styles.container}>
        <View style={styles.button}>
          <Pressable onPress={close}>
            <Icon
              name="close"
              color={colors.disabled2}
              size={25}
              style={styles.icon}
            />
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
  text: {
    color: colors.text,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: margin.sm,
  },
});
