import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SelectLocationScreen = ({ navigation }) => {
  const [zone, setZone] = useState('');
  const [area, setArea] = useState('');

  return (
    <View style={styles.container}>
      {/* Hình ảnh bản đồ */}
      <Image source={require('../assets/map.png')} style={styles.image} />

      {/* Tiêu đề */}
      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.subtitle}>
        Switch on your location to stay in tune with what’s happening in your area
      </Text>

      {/* Chọn Zone */}
      <Text style={styles.label}>Your Zone</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={zone} onValueChange={(itemValue) => setZone(itemValue)}>
          <Picker.Item label="Select Zone" value="" />
          <Picker.Item label="Banashree" value="banashree" />
          <Picker.Item label="Gulshan" value="gulshan" />
          <Picker.Item label="Dhanmondi" value="dhanmondi" />
        </Picker>
      </View>

      {/* Chọn Area */}
      <Text style={styles.label}>Your Area</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={area} onValueChange={(itemValue) => setArea(itemValue)}>
          <Picker.Item label="Types of your area" value="" />
          <Picker.Item label="Residential" value="residential" />
          <Picker.Item label="Commercial" value="commercial" />
          <Picker.Item label="Industrial" value="industrial" />
        </Picker>
      </View>

      {/* Nút Submit */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 10, alignSelf: 'flex-start' },
  pickerContainer: { width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 10 },
  button: { backgroundColor: '#6FCF97', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default SelectLocationScreen;
