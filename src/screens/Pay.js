import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import {SuccessModal} from '../organisms';

const Pay = ({navigation}) => {
  const [isVerModalVisible, setIsVerModalVisible] = useState(false);
  const [isSucModalVisible, setIsSucModalVisible] = useState(false);

  const onSuccess = e => {
    console.log('success!');
    setIsVerModalVisible(true);
  };

  const onConfirm = () => {
    setIsVerModalVisible(false);
    setIsSucModalVisible(true);
  };

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
        flashMode={RNCamera.Constants.FlashMode.torch}
        showMarker={true}
        containerStyle={styles.container}
      />
    </>
  );
};

export {Pay};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
