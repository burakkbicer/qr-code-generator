import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import AddButton from './components/AddButton';
import QrCodes from './components/QrCodes';
import Search from './components/Search';

export default function App() {
  const [qrCode, setQrCode] = useState('');
  const [image, setImage] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' translucent={false} />
      <Search qrCode={qrCode} setQrCode={setQrCode} />
      <AddButton setImage={setImage} />
      {qrCode != '' ? <QrCodes qrCode={qrCode} image={image} /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
