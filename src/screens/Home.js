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
];

const NewCardModal = ({isVisible, onClose, onSubmit}) => {
  return (
    <Modal isVisible={isVisible} close={onClose}>
      <Text style={styles.title}>¡Felicidades!</Text>
      <Text style={styles.text}>Tienes una nueva tarjeta Ecard</Text>
      <Button label="Aceptar" action={onSubmit} />
    </Modal>
  );
};

const TopUpModal = ({isVisible, onClose, onSubmit}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, isValid},
  } = useForm({
    mode: 'onChange',
  });

  const onSubmitModal = () => {
    reset();
    onSubmit();
  };

  return (
    <Modal isVisible={isVisible} close={onClose}>
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
      <Button
        label="Aceptar"
        action={handleSubmit(onSubmitModal)}
        disabled={!isDirty || !isValid}
      />
    </Modal>
  );
};

const EnterTokenModal = ({isVisible, onClose, onSubmit}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, isValid},
  } = useForm({
    mode: 'onChange',
  });

  const onSubmitModal = () => {
    reset();
    onSubmit();
  };

  return (
    <Modal isVisible={isVisible} close={onClose}>
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
      <Button
        label="Recargar"
        action={handleSubmit(onSubmitModal)}
        disabled={!isDirty || !isValid}
      />
    </Modal>
  );
};

const SuccessModal = ({isVisible, onClose, onSubmit}) => {
  return (
    <Modal isVisible={isVisible} close={onClose}>
      <Text style={styles.title}>¡Recarga exitosa!</Text>
      <Text style={styles.text}>Tu E-Card ha sido recargada con éxito</Text>
      <Button label="Cerrar" action={onSubmit} />
    </Modal>
  );
};

const Home = ({navigation}) => {
  const [eCard, setECard] = useState(0);
  const [isNewCardModalVisible, setIsNewCardModalVisible] = useState(false);
  const [isTopUpModalVisible, setIsTopUpModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isEnterTokenModalVisible, setIsEnterTokenModalVisible] =
    useState(false);

  const onAccept = () => {
    setECard(eCard + 1);
    setIsNewCardModalVisible(false);
  };

  const onTopUp = () => {
    setIsTopUpModalVisible(false);
    setIsEnterTokenModalVisible(true);
  };

  const onSuccess = () => {
    setIsEnterTokenModalVisible(false);
    setIsSuccessModalVisible(true);
  };

  const onButtonPress = () => {
    navigation.navigate('settings');
  };

  return (
    <ScreenTemplate>
      <SettingsBtn onPress={onButtonPress} />
      <ScrollView>
        <NewCardModal
          isVisible={isNewCardModalVisible}
          onSubmit={onAccept}
          onClose={() => setIsNewCardModalVisible(false)}
        />
        <TopUpModal
          isVisible={isTopUpModalVisible}
          onSubmit={onTopUp}
          onClose={() => setIsTopUpModalVisible(false)}
        />
        <EnterTokenModal
          isVisible={isEnterTokenModalVisible}
          onSubmit={onSuccess}
          onClose={() => setIsEnterTokenModalVisible(false)}
        />
        <SuccessModal
          isVisible={isSuccessModalVisible}
          onSubmit={() => setIsSuccessModalVisible(false)}
          onClose={() => setIsSuccessModalVisible(false)}
        />
        <Products cards={eCard} action={() => setIsTopUpModalVisible(true)} />
        {!eCard && <NewCardBtn action={() => setIsNewCardModalVisible(true)} />}
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
