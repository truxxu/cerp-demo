import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ScreenTemplate, Button} from '../atoms';
import {UserContext} from '../context/user-context';
import {SelectedProduct} from '../molecules';
import {parseAmount} from '../utils/parsing.js';

const Selection = ({navigation}) => {
  const user = useContext(UserContext);

  const onContinue = () => {
    navigation.navigate('payment');
  };

  const total = user.selectedProducts.reduce((total, product) => {
    return total + product.amount;
  }, 0);

  return (
    <ScreenTemplate>
      {user.selectedProducts.map(item => {
        return <SelectedProduct data={item} />;
      })}
      <Text style={styles.totalText}>Total: ${parseAmount(total)}</Text>
      <Button label="Continuar" action={onContinue} />
      <Button label="Atrás" action={onContinue} />
    </ScreenTemplate>
  );
};

export {Selection};

const styles = StyleSheet.create({});
