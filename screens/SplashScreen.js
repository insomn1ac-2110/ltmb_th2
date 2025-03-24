import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000); // Chuyển đến màn hình Onboarding sau 2 giây
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>nectar</Text>
      <Text style={styles.subtext}>Online Groceries</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6FCF97' },
  logo: { width: 100, height: 100, marginBottom: 20 },
  text: { fontSize: 32, fontWeight: 'bold', color: 'white' },
  subtext: { fontSize: 16, color: 'white' },
});

export default SplashScreen;
