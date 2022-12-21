import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import PRODUCTS from './PayzenProducts.json';
import {ScreenTemplate} from '../atoms';
import {PayzenCard, TotalBar} from '../molecules';

const Products = () => {
  const data = PRODUCTS.cuentas;

  const Separator = () => {
    return <View style={styles.spacer} />;
  };

  const ListSeparator = () => {
    return <View style={styles.listSpacer} />;
  };

  return (
    <ScreenTemplate>
      <FlatList
        data={data}
        renderItem={({item}) => <PayzenCard data={item} />}
        keyExtractor={item => item.numProd}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={ListSeparator}
        ListFooterComponent={ListSeparator}
      />
      <TotalBar />
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
});
