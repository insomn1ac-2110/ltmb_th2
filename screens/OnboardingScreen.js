import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/onboarding.png')} style={styles.image} />
      <Text style={styles.title}>Welcome to our store</Text>
      <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: '100%', height: '60%', resizeMode: 'cover' },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#6FCF97', padding: 15, borderRadius: 8, width: '80%', alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default OnboardingScreen;
