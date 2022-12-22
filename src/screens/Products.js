import React, {useContext, useCallback} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import PRODUCTS from './PayzenProducts.json';
import {ScreenTemplate} from '../atoms';
import {PayzenCard, TotalBar} from '../molecules';
import {UserContext} from '../context/user-context';
import {colors, margin, fonts} from '../styles/base.js';

const Products = () => {
  const data = PRODUCTS.cuentas;
  const user = useContext(UserContext);

  const Separator = () => {
    return <View style={styles.spacer} />;
  };

  const ListSeparator = () => {
    return <View style={styles.listSpacer} />;
  };

  const total = user.selectedProducts.reduce((total, product) => {
    return total + product.amount;
  }, 0);

  useFocusEffect(
    useCallback(() => {
      user.clearSelection();
    }, []),
  );

  return (
    <ScreenTemplate>
      <Text style={styles.text}>
        Seleccione el tipo de pago que desea realizar:
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => <PayzenCard data={item} />}
        keyExtractor={item => item.numProd}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={ListSeparator}
        ListFooterComponent={ListSeparator}
      />
      <TotalBar data={total} />
    </ScreenTemplate>
  );
};

export {Products};

const styles = StyleSheet.create({
  spacer: {
    height: 25,
  },
  listSpacer: {
    height: 15,
  },
  text: {
    color: colors.text,
    marginBottom: margin.md,
    fontFamily: fonts.primary,
  },
});
