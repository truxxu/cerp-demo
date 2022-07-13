import React from 'react';
import {View, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const Pay = () => {
  const onSuccess = e => {
    console.log('success!');
  };

  return (
    <View>
      <QRCodeScanner onRead={onSuccess} showMarker={true} />
    </View>
  );
};

export {Pay};
