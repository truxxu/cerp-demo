import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import {SuccessModal} from '../organisms';
import {FlashBtn} from '../atoms';
import {colors} from '../styles/base.js';

const Pay = () => {
  const [isVerModalVisible, setIsVerModalVisible] = useState(false);
  const [isSucModalVisible, setIsSucModalVisible] = useState(false);
  const [flash, setFlash] = useState(false);

  const onSuccess = e => {
    console.log('success!');
    setIsVerModalVisible(true);
  };

  const onConfirm = () => {
    setIsVerModalVisible(false);
    setIsSucModalVisible(true);
  };

  const handleFlash = () => {
    setFlash(!flash);
  };

  const FlashMode = flash
    ? RNCamera.Constants.FlashMode.torch
    : RNCamera.Constants.FlashMode.off;

  return (
    <>
      <SuccessModal
        isVisible={isVerModalVisible}
        onSubmit={onConfirm}
        onClose={() => setIsVerModalVisible(false)}
        title="Pagar $30.000"
        text="Confirme para realizar el pago"
        btnLabel="Confirmar"
      />
      <SuccessModal
        isVisible={isSucModalVisible}
        onSubmit={() => setIsSucModalVisible(false)}
        onClose={() => setIsSucModalVisible(false)}
        title="¡Pago Exitoso!"
        text="Tu pago ha sido realizado con éxito"
        btnLabel="Terminar"
      />
      <QRCodeScanner
        onRead={onSuccess}
        showMarker={true}
        containerStyle={styles.container}
        flashMode={FlashMode}
        topContent={<FlashBtn action={handleFlash} flash={flash} />}
        topViewStyle={styles.top}
      />
    </>
  );
};

export {Pay};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
  },
  top: {
    justifyContent: 'flex-start',
  },
});
