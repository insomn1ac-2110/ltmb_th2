import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HeaderHome() {
  return (
    <View style={styles.headerContainer}>
      {/* Vị trí */}
      <TouchableOpacity style={styles.locationContainer}>
        <Ionicons name="location-outline" size={20} color="#53B175" />
        <Text style={styles.locationText}>Dhaka, Banassre</Text>
        <Ionicons name="chevron-down" size={16} color="#53B175" />
      </TouchableOpacity>
      {/* Icon giỏ hàng hoặc thông báo, tuỳ thiết kế */}
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginHorizontal: 4,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});
