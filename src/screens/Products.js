import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ScreenTemplate, Button} from '../atoms';

const Products = ({navigation}) => {
  const onContinue = () => {
    navigation.navigate('selection');
  };

  return (
    <ScreenTemplate>
      <Text>Products List</Text>
      <Text>Item 1</Text>
      <Text>Item 1</Text>
      <Text>Item 1</Text>
      <Text>Item 1</Text>
      <Text>Item 1</Text>
      <Button label="Continuar" action={onContinue} />
    </ScreenTemplate>
  );
};

export {Products};

const styles = StyleSheet.create({});
