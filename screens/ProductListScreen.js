import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PRODUCTS } from '../data';

export default function ProductListScreen({ route, navigation }) {
  const { categoryId, categoryName } = route.params;

  // Lấy danh sách sản phẩm
  const products = PRODUCTS[categoryId] || [];

  const renderProductItem = ({ item }) => {
    return (
      <View style={styles.productCard}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productVolume}>{item.volume}, Price</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header tùy biến */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{categoryName}</Text>
        <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Filter / Settings pressed')}>
          {/* Đổi icon tùy ý: filter-outline, settings-outline, etc. */}
          <Ionicons name="filter-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,   // chừa chỗ status bar (tuỳ thiết bị)
    paddingBottom: 10,
    backgroundColor: '#fff',
    // Nếu muốn có bóng đổ
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // Android
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181725',
  },
  iconButton: {
    padding: 6,
  },
  // Danh sách sản phẩm
  flatListContent: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  productCard: {
    width: '45%',
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#181725',
    marginBottom: 4,
  },
  productVolume: {
    fontSize: 12,
    color: '#7C7C7C',
    marginBottom: 6,
  },
  productPrice: {
    fontSize: 14,
    color: '#181725',
    fontWeight: 'bold',
  },
  addButton: {
    marginTop: 8,
    backgroundColor: '#53B175',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
