// src/screens/FavoritesScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text>Favorites Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
