import React from 'react';
import { View } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';

const QrCodes = ({ qrCode, image }) => {
  return (
    <View>
      <SvgQRCode size={200} value={qrCode} logo={image} />
    </View>
  );
};

export default QrCodes;
