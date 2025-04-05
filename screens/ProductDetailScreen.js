// src/screens/ProductDetailScreen.js
import React, { useState } from 'react';
import { 
  View, Text, Image, StyleSheet, TouchableOpacity, ScrollView 
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params || {};
  
  // State quản lý số lượng
  const [quantity, setQuantity] = useState(1);

  const onBack = () => {
    navigation.goBack();
  };

  const onAddToBasket = () => {
    // Xử lý thêm vào giỏ hàng
    console.log('Đã thêm vào giỏ hàng:', product.name, 'Số lượng:', quantity);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <View style={styles.container}>
      {/* Thanh Header (Back, Heart) */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.iconButton}>
          <Ionicons name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Ảnh sản phẩm */}
        <Image source={product.image} style={styles.productImage} />

        {/* Thông tin cơ bản */}
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDesc}>{product.desc}</Text>

          {/* Chọn số lượng & Giá */}
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decrementQuantity} style={styles.qtyButton}>
              <Ionicons name="remove" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQuantity} style={styles.qtyButton}>
              <Ionicons name="add" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={styles.priceText}>${(product.price).toFixed(2)}</Text>
          </View>

          {/* Product Detail */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Product Detail</Text>
            <Text style={styles.sectionContent}>
              {product.detail || 'No details provided'}
            </Text>
          </View>

          {/* Nutritions */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nutritions</Text>
            <View style={styles.nutritionTag}>
              <Text style={{ color: '#000' }}>100gr</Text>
            </View>
          </View>

          {/* Review */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Review</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              {renderStars(product.rating || 0)}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Nút Add To Basket */}
      <TouchableOpacity style={styles.addButton} onPress={onAddToBasket}>
        <Text style={styles.addButtonText}>Add To Basket</Text>
      </TouchableOpacity>
    </View>
  );
}

// Hàm helper render sao
function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<Ionicons key={i} name="star" size={20} color="#F9A23B" style={{ marginRight: 3 }} />);
    } else {
      stars.push(<Ionicons key={i} name="star-outline" size={20} color="#F9A23B" style={{ marginRight: 3 }} />);
    }
  }
  return stars;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
    marginTop: 50,
    marginHorizontal: 16,
    justifyContent: 'space-between',
  },
  iconButton: {
    padding: 6,
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginTop: 10,
  },
  infoContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181725',
  },
  productDesc: {
    fontSize: 14,
    color: '#7C7C7C',
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  qtyButton: {
    width: 35,
    height: 35,
    borderRadius: 17,
    backgroundColor: '#F2F3F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    width: 30,
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 5,
  },
  priceText: {
    marginLeft: 'auto',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181725',
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
    marginBottom: 6,
  },
  sectionContent: {
    fontSize: 14,
    color: '#7C7C7C',
    lineHeight: 20,
  },
  nutritionTag: {
    backgroundColor: '#F2F3F2',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  addButton: {
    backgroundColor: '#53B175',
    marginHorizontal: 16,
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
