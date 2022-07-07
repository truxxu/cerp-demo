import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {useForm} from 'react-hook-form';

import {ScreenTemplate, Modal, Button, SettingsBtn} from '../atoms';
import {NewCardBtn, Input, DropDown} from '../molecules';
import {Products} from '../organisms';
import {fonts, colors, margin} from '../styles/base.js';

const ORIGIN = [
  {
    label: 'Ahorros',
    value: 'savings',
  },
  {
    label: 'CDT',
    value: 'cdt',
  },
];

const Home = ({navigation}) => {
  const [eCard, setECard] = useState(0);
  const [isNewCardModalVisible, setIsNewCardModalVisible] = useState(false);
  const [isTopUpModalVisible, setIsTopUpModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isEnterTokenModalVisible, setIsEnterTokenModalVisible] =
    useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, isValid},
  } = useForm({
    mode: 'onChange',
  });

  const onCreate = () => {
    setIsNewCardModalVisible(true);
    setECard(eCard + 1);
  };

  const onTopUp = () => {
    setIsTopUpModalVisible(false);
    setIsEnterTokenModalVisible(true);
  };

  const onSuccess = () => {
    setIsEnterTokenModalVisible(false);
    setIsSuccessModalVisible(true);
  };

  const newCardModal = () => {
    return (
      <Modal isVisible={isNewCardModalVisible}>
        <Text style={styles.title}>¡Felicidades!</Text>
        <Text style={styles.text}>Tienes una nueva tarjeta Ecard</Text>
        <Button
          label="Aceptar"
          action={() => setIsNewCardModalVisible(false)}
        />
      </Modal>
    );
  };

  const topUpModal = () => {
    return (
      <Modal
        isVisible={isTopUpModalVisible}
        close={() => setIsEnterTokenModalVisible(true)}>
        <Text style={styles.text}>
          Ingresa el monto a recargar y escoge el producto de origen
        </Text>
        <Input
          name="amount"
          label="Monto"
          placeholder="Ingresa el monto a transferir"
          keyboard="numeric"
          control={control}
        />
        <DropDown label="Producto Origen" data={ORIGIN} />
        <Button label="Aceptar" action={onTopUp} />
      </Modal>
    );
  };

  const enterTokenModal = () => {
    return (
      <Modal isVisible={isEnterTokenModalVisible}>
        <Text style={styles.text}>
          Por favor ingresa el token de verificación que hemos enviado a tu
          celular
        </Text>
        <Input
          name="code"
          label="Token de verificación"
          placeholder="Ingresa tu token de verificación"
          keyboard="numeric"
          control={control}
        />
        <Button label="Recargar" action={onSuccess} />
      </Modal>
    );
  };

  const successModal = () => {
    return (
      <Modal isVisible={isSuccessModalVisible}>
        <Text style={styles.title}>¡Recarga exitosa!</Text>
        <Text style={styles.text}>Tu E-Card ha sido recargada con éxito</Text>
        <Button label="Cerrar" action={() => setIsSuccessModalVisible(false)} />
      </Modal>
    );
  };

  const onButtonPress = () => {
    navigation.navigate('settings');
  };

  return (
    <ScreenTemplate>
      <SettingsBtn onPress={onButtonPress} />
      <ScrollView>
        {topUpModal()}
        {newCardModal()}
        {enterTokenModal()}
        {successModal()}
        <Products cards={eCard} action={() => setIsTopUpModalVisible(true)} />
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
    marginBottom: margin.lg,
  },
  title: {
    color: colors.text,
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    marginBottom: margin.sm,
    marginTop: margin.md,
  },
});
