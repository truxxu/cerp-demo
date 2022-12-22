import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useForm} from 'react-hook-form';

import {ScreenTemplate, Button} from '../atoms';
import {colors, margin, fonts} from '../styles/base.js';
import {Input, DropDown} from '../molecules';
import {SuccessModal} from '../organisms';

const ID = [
  {
    value: 'select',
    label: 'Seleccione su tipo de documento',
  },
  {
    value: 'cc',
    label: 'Cédula de Ciudadanía',
  },
  {
    value: 'nit',
    label: 'NIT',
  },
  {
    value: 'ce',
    label: 'Cédula de Extranjería',
  },
  {
    value: 'ti',
    label: 'Tarjeta de Identidad',
  },
  {
    value: 'pasaporte',
    label: 'Pasaporte',
  },
  {
    value: 'nuip',
    label: 'NUIP',
  },
  {
    value: 'registro',
    label: 'Registro Civil',
  },
];

const PaymentDetails = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const url = 'http://www.google.com';

  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, isValid},
  } = useForm({
    mode: 'onChange',
  });

  const onContinue = async () => {
    reset();
    await Linking.openURL(url);
    setShowModal(true);
  };

  const handleModal = () => {
    setShowModal(false);
    navigation.navigate('home');
  };

  return (
    <ScreenTemplate>
      <SuccessModal
        isVisible={showModal}
        onSubmit={handleModal}
        onClose={handleModal}
        title="¡Transacción Exitosa!"
        text="El pago se ha realizado con éxito"
        btnLabel="Continuar"
      />
      <ScrollView>
        <View style={styles.textContainer}>
          <Icon
            name="alert"
            color={colors.primary}
            size={25}
            style={styles.icon}
          />
          <Text style={styles.text}>
            Para realizar el pago indique la siguiente información:
          </Text>
        </View>
        <View style={styles.form}>
          <DropDown label="Tipo de documento" data={ID} />
          <Input
            name="id"
            label="Número de documento"
            placeholder="Ingresa el número del documento"
            keyboard="numeric"
            control={control}
          />
          <Input
            name="name"
            label="Nombre completo"
            placeholder="Ingresa los nombres y apellidos"
            control={control}
          />
          <Input
            name="email"
            label="Correo electrónico"
            placeholder="Ingresa un correo electrónico"
            keyboard="email-address"
            control={control}
          />
          <Input
            name="emailConfirmation"
            label="Confirmación correo electrónico"
            placeholder="Ingresa de nuevo el correo electrónico"
            keyboard="email-address"
            control={control}
          />
          <Input
            name="phone"
            label="Móvil para notificaciones"
            placeholder="Ingresa el número del móvil"
            keyboard="phone-pad"
            control={control}
          />
          <Input
            name="phoneConfirmation"
            label="Confirmar móvil"
            placeholder="Ingresa de nuevo el número del móvil"
            keyboard="phone-pad"
            control={control}
          />
        </View>
        <Button
          label="Continuar a Payzen"
          action={handleSubmit(onContinue)}
          disabled={!isDirty || !isValid}
        />
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Volver</Text>
        </Pressable>
      </ScrollView>
    </ScreenTemplate>
  );
};

export {PaymentDetails};

const styles = StyleSheet.create({
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
  form: {
    marginVertical: margin.md,
  },
});
