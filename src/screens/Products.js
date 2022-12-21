import React from 'react';
import {StyleSheet, Text, FlatList} from 'react-native';

import PRODUCTS from './PayzenProducts.json';
import {ScreenTemplate, Button} from '../atoms';
import {PayzenCard} from '../molecules';

const Products = ({navigation}) => {
  const data = PRODUCTS.cuentas;

  const onContinue = () => {
    navigation.navigate('selection');
  };

  return (
    <ScreenTemplate>
      <FlatList
        data={data}
        renderItem={({item}) => <PayzenCard data={item} />}
        keyExtractor={item => item.numProd}
      />
      <Button label="Continuar" action={onContinue} />
    </ScreenTemplate>
  );
};

export {Products};

const styles = StyleSheet.create({});
