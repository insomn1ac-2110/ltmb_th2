import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, Platform, Keyboard, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const NumberInputScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [buttonPosition] = useState(new Animated.Value(20));

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
      Animated.timing(buttonPosition, {
        toValue: event.endCoordinates.height + 20,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
    
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      Animated.timing(buttonPosition, {
        toValue: 20,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <LinearGradient colors={['#FFFFFF', '#F7F7F7']} style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'} style={styles.keyboardView}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        
        <Text style={styles.title}>Enter Your Mobile Number</Text>
        
        <View style={styles.inputContainer}>
          <Image source={require('../assets/flag.png')} style={styles.flag} />
          <Text style={styles.countryCode}>+84</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="Enter your mobile number"
            placeholderTextColor="#C4C4C4"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      </KeyboardAvoidingView>
      
      <Animated.View style={[styles.submitButton, { bottom: buttonPosition, right: 20 }]}> 
        <TouchableOpacity onPress={() => navigation.navigate('VerificationScreen')}>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 100,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#DADADA',
    paddingBottom: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    marginTop: 50,
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
  },
  submitButton: {
    backgroundColor: '#2ECC71',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

export default NumberInputScreen;
