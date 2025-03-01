import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart, Product } from './information';
import { styles } from '../styles'; // Importing styles from the styles.ts file

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { addToCart } = useCart();

  const products: Product[] = [
    { id: '1', name: 'Product 1', price: 10, quantity: 0 },
    { id: '2', name: 'Product 2', price: 15, quantity: 0 },
    { id: '3', name: 'Product 3', price: 20, quantity: 0 },
  ];

  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.homeProduct}>
            <Text style={styles.homeProductText}>{item.name} - ${item.price}</Text>
            <TouchableOpacity onPress={() => addToCart(item)} style={styles.homeButton}>
              <Text style={styles.homeButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.homeCartButton}>
        <Text style={styles.homeCartButtonText}>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
