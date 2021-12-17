import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddButton = ({ setImage }) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={pickImage}>
      <Text style={styles.text}>Add Logo</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor: '#FF8E00',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
