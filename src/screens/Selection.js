import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ScreenTemplate, Button} from '../atoms';

const Selection = ({navigation}) => {
  const onContinue = () => {
    navigation.navigate('payment');
  };

  return (
    <ScreenTemplate>
      <Text>Selection</Text>
      <Button label="Continuar" action={onContinue} />
    </ScreenTemplate>
  );
};

export {Selection};

const styles = StyleSheet.create({});
