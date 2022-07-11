import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useForm} from 'react-hook-form';

import {ScreenTemplate, Button} from '../atoms';
import {Input, DropDown} from '../molecules';
import {VerificationModal, SuccessModal} from '../organisms';

const ORIGIN = [
  {
    label: 'Ahorros',
    value: 'savings',
  },
];

const DESTINATION = [
  {
    label: 'Ahorros',
    value: 'savings',
  },
];

const Transfer = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, isValid},
  } = useForm({
    mode: 'onChange',
  });

  const onTransfer = () => {
    reset();
    setIsModalVisible(true);
  };

  const onAccept = () => {
    setIsModalVisible(false);
    setIsSuccessModalVisible(true);
  };

  const onSuccess = () => {
    setIsSuccessModalVisible(false);
    navigation.navigate('home');
  };

  return (
    <ScreenTemplate>
      <VerificationModal
        isVisible={isModalVisible}
        onSubmit={onAccept}
        onClose={() => setIsModalVisible(false)}
      />
      <SuccessModal
        isVisible={isSuccessModalVisible}
        onSubmit={onSuccess}
        onClose={() => setIsSuccessModalVisible(false)}
        title="¡Transferencia Exitosa!"
        text="Tu transferencia se ha realizado con éxito"
        btnLabel="Terminar"
      />
      <Input
        name="amount"
        label="Monto"
        placeholder="Ingresa el monto a transferir"
        keyboard="numeric"
        control={control}
      />
      <DropDown label="Producto Origen" data={ORIGIN} />
      <DropDown label="Producto Destino" data={DESTINATION} />
      <Button
        label="Transferir"
        action={handleSubmit(onTransfer)}
        disabled={!isDirty || !isValid}
      />
    </ScreenTemplate>
  );
};

export {Transfer};

const styles = StyleSheet.create({});
