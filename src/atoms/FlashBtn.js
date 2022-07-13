import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FlashBtn = ({action, flash}) => {
  return (
    <Pressable style={styles.container} onPress={action}>
      <Icon
        name={flash ? 'brightness-7' : 'brightness-5'}
        color={'purple'}
        size={26}
      />
    </Pressable>
  );
};

export {FlashBtn};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
