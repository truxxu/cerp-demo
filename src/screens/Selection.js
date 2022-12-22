import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ScreenTemplate, Button} from '../atoms';
import {UserContext} from '../context/user-context';
import {SelectedProduct} from '../molecules';
import {parseAmount} from '../utils/parsing.js';
import {colors, margin, fonts} from '../styles/base.js';

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
      <ScrollView>
        <View style={styles.textContainer}>
          <Icon
            name="alert"
            color={colors.primary}
            size={25}
            style={styles.icon}
          />
          <Text style={styles.text}>
            Por favor verifique que la información ingresada sea la correcta
          </Text>
        </View>
        {user.selectedProducts.map(item => {
          return <SelectedProduct data={item} key={item.numProd} />;
        })}
        <Text style={styles.totalText}>
          Total a pagar: ${parseAmount(total)}
        </Text>
        <Button label="Continuar" action={onContinue} />
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Atrás</Text>
        </Pressable>
      </ScrollView>
    </ScreenTemplate>
  );
};

export {Selection};

const styles = StyleSheet.create({
  totalText: {
    fontSize: fonts.md,
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'right',
    marginVertical: margin.md,
  },
  text: {
    color: colors.text,
    marginLeft: margin.sm,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: margin.md,
  },
  link: {
    color: colors.primary,
    fontSize: fonts.sm,
    marginTop: margin.md,
    textAlign: 'center',
  },
});
