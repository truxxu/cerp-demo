import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';

import {ScreenTemplate, Modal, Button} from '../atoms';
import {NewCardBtn} from '../molecules';
import {Products} from '../organisms';
import {fonts, colors} from '../styles/base.js';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [eCard, setECard] = useState(0);

  const onCreate = () => {
    setIsModalVisible(true);
    setECard(eCard + 1);
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
        <Products cards={eCard} />
        {!eCard && <NewCardBtn action={onCreate} />}
      </ScrollView>
    </ScreenTemplate>
  );
};

export {Home};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: fonts.md,
    fontFamily: fonts.primary,
    color: colors.text,
  },
});
