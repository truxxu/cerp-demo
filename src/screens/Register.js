import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';
import {useForm} from 'react-hook-form';

import {fonts, colors, margin} from '../styles/base.js';
import {ScreenTemplate, Button, Logo, Modal} from '../atoms';
import {Input} from '../molecules';

const VerificationModal = ({isVisible, onClose, onSubmit}) => {
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

  return(
    <Modal isVisible={isVisible} close={onClose}>
      <Text style={styles.text}>
        Por favor ingresa a continuación el código de verificación
        que enviamos al correo:
      </Text>
      <Text style={styles.title}>
        jairo@correo.com
      </Text>
      <View style={styles.formContainerModal}>
        <Input
          name="code"
          label="Código de Verificación"
          placeholder="Ingresa tu código de verificación"
          keyboard="numeric"
          control={control}
        />
      </View>
      <Button
          label="Verificar"
          action={handleSubmit(onSubmitModal)}
          disabled={!isDirty || !isValid}
        />
    </Modal>
  );
}

const SuccessModal = ({isVisible, onClose, onSubmit}) =>
  <Modal isVisible={isVisible} close={onClose}>
    <Text style={styles.title}>
      ¡Verificación Correcta!
    </Text>
    <Text style={styles.text}>
      A continuación puedes iniciar sesión con tu correo y contraseña.
    </Text>

    <Button
      label="Continuar"
      action={onSubmit}
    />
  </Modal>

const Register = ({navigation}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, isValid},
  } = useForm({
    mode: 'onChange',
  });

  const [isVerModalVisible, setIsVerModalVisible] = useState(false);
  const [isSucModalVisible, setIsSucModalVisible] = useState(false);

  const onSubmit = () => {
    reset();
    setIsVerModalVisible(true);
  };

  const onSubmitVerModal = () => {
    setIsVerModalVisible(false);
    setIsSucModalVisible(true);
  };

  const onSubmitSucModal = () => {
    navigation.replace('login');
  };

  return (
    <ScreenTemplate>
      <VerificationModal
        isVisible={isVerModalVisible}
        onSubmit={() => onSubmitVerModal()}
        onClose={() => setIsVerModalVisible(false)}
      />
      <SuccessModal
        isVisible={isSucModalVisible}
        onSubmit={() => onSubmitSucModal()}
        onClose={() => setIsSucModalVisible(false)}
      />
      <ScrollView>
        <Logo size={120} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>¡Bienvenido!</Text>
        </View>
        <Text style={styles.text}>
          Ingrese la siguiente información para completar su registro:
        </Text>
        <Input
          name="id"
          label="Cédula"
          placeholder="Ingresa tu número de cédula"
          keyboard="numeric"
          control={control}
        />
        <Input
          name="phone"
          label="Celular"
          placeholder="Ingresa tu número de celular"
          keyboard="numeric"
          control={control}
        />
        <Input
          name="email"
          label="Email"
          placeholder="Ingresa tu correo electrónico"
          keyboard="email-address"
          control={control}
        />
        <Input
          name="password"
          label="Contraseña"
          placeholder="Ingresa una contraseña"
          control={control}
          isSecure={true}
        />
        <Button
          label="Aceptar"
          action={handleSubmit(onSubmit)}
          disabled={!isDirty || !isValid}
        />
      </ScrollView>
    </ScreenTemplate>
  );
};

export {Register};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: colors.text,
    fontSize: fonts.md,
    fontFamily: fonts.primary,
  },
  text: {
    color: colors.text,
    fontSize: fonts.sm,
    fontFamily: fonts.primary,
    textAlign: 'center',
    marginBottom: margin.md,
  },
  titleContainer: {
    marginVertical: margin.md,
  },
  formContainerModal: {
    width: '100%',
    marginVertical: margin.md,
  },
});
