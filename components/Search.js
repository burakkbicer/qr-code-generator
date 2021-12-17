import React from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet, View } from 'react-native';

const Search = ({ qrCode, setQrCode }) => {
  return (
    <View>
      <Text style={styles.title}>QR CODE GENERATOR</Text>
      <TextInput
        value={qrCode}
        onChangeText={(value) => setQrCode(value)}
        style={styles.input}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 300,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    borderRadius: 10,
    width: 10,
  },
});
