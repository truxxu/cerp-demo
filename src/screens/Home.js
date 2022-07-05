import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';

import {ScreenTemplate, Card, Modal, Button} from '../atoms';
import {NewCardBtn} from '../molecules';
import {fonts, colors, margin} from '../styles/base.js';

const PRODUCTS = [
  {
    label: 'Cuentas de Ahorro (1)',
    product: 'Ahorros',
    id: '345-0000-2332',
    balance: 'COP$10.234.034',
  },
  {
    label: 'CDTs (1)',
    product: 'CDT',
    id: '345-0000-2332',
    balance: 'COP$56.234.224',
    date: '13 Dic 2022',
  },
  {
    label: 'E-Cards (1)',
    product: 'Visa',
    id: '****************3556',
    balance: 'COP$0',
    button: 'Recargar',
  },
];

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onCreate = () => {
    setIsModalVisible(true);
  };

  const newCardModal = () => {
    return (
      <Modal isVisible={isModalVisible} close={() => setIsModalVisible(false)}>
        <Text style={styles.title}>¡Felicidades!</Text>
        <Text style={styles.text}>Tienes una nueva tarjeta Ecard</Text>
        <Button label="Aceptar" action={() => setIsModalVisible(false)} />
      </Modal>
    );
  };

  return (
    <ScreenTemplate>
      <ScrollView>
        {newCardModal()}
        <Text style={styles.title}>Mis productos</Text>
        {PRODUCTS.map((e, i) => {
          return <Card key={i} data={e} />;
        })}
        <NewCardBtn action={onCreate} />
      </ScrollView>
    </ScreenTemplate>
  );
};

export {Home};

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    marginBottom: margin.sm,
    marginTop: margin.md,
  },
  text: {
    textAlign: 'center',
    fontSize: fonts.md,
    fontFamily: fonts.primary,
    color: colors.text,
  },
});
