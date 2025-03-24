import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const SignInScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20, justifyContent: 'flex-end' }}>
      <Image 
        source={require('../assets/grocery-bag.png')} 
        style={{ width: '100%', height: '33%', resizeMode: 'cover', position: 'absolute', top: 0 }} 
      />
      
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'left' }}>
        Get your groceries
      </Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'left', marginBottom: 30 }}>
        with nectar
      </Text>
      
      <TouchableOpacity 
        style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 5 }}
        onPress={() => navigation.navigate('NumberInputScreen')}
      >
        <Image source={require('../assets/flag.png')} style={{ width: 30, height: 20, marginRight: 10 }} />
        <Text style={{ fontSize: 18 }}>+84</Text>
        <Text style={{ flex: 1, fontSize: 18, marginLeft: 10, color: '#aaa' }}>Enter your number</Text>
      </TouchableOpacity>
      
      <Text style={{ textAlign: 'center', color: '#aaa', marginTop: 20 }}>Or connect with social media</Text>
      
      <TouchableOpacity style={{ backgroundColor: '#4285F4', padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
        <FontAwesome name="google" size={20} color="#fff" style={{ marginRight: 10 }} />
        <Text style={{ color: '#fff', fontSize: 16 }}>Continue with Google</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{ backgroundColor: '#3b5998', padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <FontAwesome name="facebook" size={20} color="#fff" style={{ marginRight: 10 }} />
        <Text style={{ color: '#fff', fontSize: 16 }}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;