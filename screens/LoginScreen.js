import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedData = await AsyncStorage.getItem('userData');
      if (!storedData) {
        Alert.alert("Error", "No account found! Please sign up.");
        return;
      }

      const { email: storedEmail, password: storedPassword } = JSON.parse(storedData);

      if (email === storedEmail && password === storedPassword) {
        Alert.alert("Success", "Login successful!");
      } else {
        Alert.alert("Error", "Invalid email or password!");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to fetch user data");
    }
  };

  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Log In</Text>

      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    logo: { width: 100, height: 100, marginBottom: 20, alignItems:'center' },
    input: {
      width: '80%',
      borderBottomWidth: 1,
      marginBottom: 20,
      fontSize: 16,
      padding: 10,
    },
    button: {
      backgroundColor: '#6FCF97',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      width: '80%',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
  });
  
export default LoginScreen;
