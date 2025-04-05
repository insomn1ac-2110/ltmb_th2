import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// Các màn hình
import HomeStack from '../navigation/HomeStack';
import ExploreScreen from '../screens/ExploreScreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoriteScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Ẩn header mặc định
        tabBarShowLabel: false, // Ẩn label, chỉ hiển thị icon
        tabBarActiveTintColor: '#53B175', // Màu icon khi active
        tabBarInactiveTintColor: '#777', // Màu icon khi inactive
        tabBarStyle: {
          height: 60,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Explore" 
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Account" 
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
