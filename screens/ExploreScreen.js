// ExploreScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ExploreScreen({ navigation }) {
  const renderCategoryItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.categoryCard, { backgroundColor: item.color }]}
        onPress={() =>
          navigation.navigate('ExploreStack', {
            screen: 'ProductList',
            params: {
              categoryId: item.id,
              categoryName: item.name,
            },
          })
        }
      >
        <Image source={item.image} style={styles.categoryImage} />
        <Text style={styles.categoryName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Find Products</Text>
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchContainer}>
        {/* Icon search (dùng Ionicons hoặc image) */}
        <Ionicons name="search-outline" size={20} color="#999" style={{ marginLeft: 10 }} />
        <Text style={styles.searchPlaceholder}>Search Store</Text>
      </View>

      {/* DANH MỤC (GRID) */}
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategoryItem}
        numColumns={2} // hiển thị dạng 2 cột
        contentContainerStyle={styles.flatListContent}
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
  headerContainer: {
    paddingTop: 50,       // chừa khoảng trống cho status bar
    paddingBottom: 20,    // khoảng cách dưới tiêu đề
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Android
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181725',
  },

  // Search bar
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  searchPlaceholder: {
    marginLeft: 5,
    color: '#999',
    fontSize: 14,
  },

  // Grid
  flatListContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 16,
  },
  categoryCard: {
    width: '45%',
    margin: 8,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  categoryImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#181725',
  },
});
