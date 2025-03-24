import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your 4-digit code</Text>
      <TextInput
        style={styles.input}
        placeholder="- - - -"
        keyboardType="number-pad"
        maxLength={4}
        value={code}
        onChangeText={setCode}
      />
      <TouchableOpacity style={styles.button} onPress={() => alert('Verified!')}>
        <Text style={styles.buttonText}>→</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Resend Code')} style={styles.resend}>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { borderBottomWidth: 1, width: '50%', fontSize: 24, textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#6FCF97', padding: 10, borderRadius: 50, alignItems: 'center', width: 50 },
  buttonText: { fontSize: 24, color: 'white' },
  resend: { marginTop: 10 },
  resendText: { color: '#6FCF97', fontSize: 16 },
});

export default VerificationScreen;
