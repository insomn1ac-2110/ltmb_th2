import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    }
    
    const userData = { username, email, password };
    
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to save user data");
    }
  };

  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Sign Up</Text>
      
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

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
      logo: { width: 100, height: 100, marginBottom: 20,  },
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
