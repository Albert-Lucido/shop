import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart, Product } from './information';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { addToCart } = useCart();  // Using the custom hook here

  const products: Product[] = [
    { id: '1', name: 'Product 1', price: 10, quantity: 0 },
    { id: '2', name: 'Product 2', price: 15, quantity: 0 },
    { id: '3', name: 'Product 3', price: 20, quantity: 0 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>{item.name} - ${item.price}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.cartButton}>
        <Text style={styles.cartButtonText}>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  product: { marginBottom: 15 },
  cartButton: { padding: 10, backgroundColor: 'blue', marginTop: 20 },
  cartButtonText: { color: 'white', textAlign: 'center' },
});

export default HomeScreen;
