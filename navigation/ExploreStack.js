// navigation/ExploreStack.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreScreen from '../screens/ExploreScreen';
import ProductListScreen from '../screens/ProductListScreen';

const Stack = createNativeStackNavigator();

export default function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Explore" component={ExploreScreen} />
  <Stack.Screen name="ProductList" component={ProductListScreen} />
</Stack.Navigator>

  );
}
