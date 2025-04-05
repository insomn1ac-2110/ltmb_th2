// src/screens/HomeScreen.js
import React from 'react';
import { 
  View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity 
} from 'react-native';
import HeaderHome from '../component/HeaderHome';
import ProductCard from '../component/ProductCard';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const exclusiveData = [
    { id: '1', name: 'Organic Bananas', desc: '7pcs, Price', price: 4.99, image: require('../assets/banana.png') },
    { id: '2', name: 'Red Apple', desc: '1kg, Price', price: 4.99, image: require('../assets/apple.png') },
  ];
  
  const bestSellingData = [
    { id: '3', name: 'Bell Pepper Red', desc: '1kg, Price', price: 3.99, image: require('../assets/pepper.png') },
    { id: '4', name: 'Ginger', desc: '250g, Price', price: 2.99, image: require('../assets/ginger.png') },
  ];

  const groceriesData = [
    { id: '5', name: 'Beef Bone', desc: '1kg, Price', price: 6.99, image: require('../assets/beef.png') },
    { id: '6', name: 'Broiler Chicken', desc: '1kg, Price', price: 5.99, image: require('../assets/chicken.png') },
  ];

  const renderSectionHeader = (title) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity onPress={() => console.log(`See all pressed for ${title}`)}>
        <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHorizontalList = (data) => (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <ProductCard 
          product={item} 
          onPress={() => handleCardPress(item)} 
        />
      )}
    />
  );

  const handleCardPress = (product) => {
    console.log('Card pressed:', product.name);
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <View style={styles.container}>
      <HeaderHome />

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search Store"
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
        <Image
          source={require('../assets/search_icon.png')}
          style={styles.searchIcon}
        />
      </View>

      <View style={styles.bannerContainer}>
        <Image
          source={require('../assets/vegetables_banner.png')}
          style={styles.bannerImage}
        />
      </View>

      {renderSectionHeader('Exclusive Offer')}
      {renderHorizontalList(exclusiveData)}

      {renderSectionHeader('Best Selling')}
      {renderHorizontalList(bestSellingData)}

      {renderSectionHeader('Groceries')}
      {renderHorizontalList(groceriesData)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // Search
  searchContainer: {
    marginHorizontal: 16,
    position: 'relative',
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    paddingLeft: 50,
    paddingRight: 20,
    height: 50,
    fontSize: 16,
    color: '#000',
  },
  searchIcon: {
    position: 'absolute',
    left: 20,
    top: 14,
    width: 22,
    height: 22,
    tintColor: '#53B175',
  },
  // Banner
  bannerContainer: {
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  // Section
  sectionHeader: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
  },
  seeAll: {
    fontSize: 14,
    color: '#53B175',
  },
});
