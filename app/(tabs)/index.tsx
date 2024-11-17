import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

export default function RegisterScreen() {
  const [input, setInput] = useState('');

  const handleRegister = async () => {
    if (!input) {
      Alert.alert('Error', 'Please enter a value');
      return;
    }
    try {
      await axios.post('http://192.168.1.113:8000/api/items/', {
        title: input,
        description: 'N/A',
      });
      Alert.alert('Success', 'Item added successfully');
      setInput('');
    } catch (error) {
      console.error('Error adding item:', error);
      Alert.alert('Error', 'Failed to add item');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter something..."
        placeholderTextColor="#FFFFFF" // Set placeholder color to white
        value={input}
        onChangeText={setInput}
      />
      <Button title="Submit" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#000', // Optional: set background color to black for contrast
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
    color: '#FFFFFF', // Set input text color to white
  },
});
