import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ScreenTemplate, Button} from '../atoms';

const PaymentDetails = ({navigation}) => {
  const onContinue = () => {
    console.log('go to payzen');
  };

  return (
    <ScreenTemplate>
      <Text>PaymentDetails</Text>
      <Button label="Continuar a Payzen" action={onContinue} />
    </ScreenTemplate>
  );
};

export {PaymentDetails};

const styles = StyleSheet.create({});
