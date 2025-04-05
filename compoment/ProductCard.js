// src/component/ProductCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image source={product.image} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.desc}>{product.desc}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },
  desc: {
    fontSize: 12,
    color: '#7C7C7C',
    marginBottom: 6,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#53B175',
  },
});
