import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart, Product } from './information';

interface CartScreenProps {
  navigation: any;
}

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const { cart, updateQuantity, removeFromCart } = useCart();  // Using the custom hook here

  const calculateTotal = (): number => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>{item.name} - ${item.price} x {item.quantity}</Text>
            <View style={styles.quantityControls}>
              <Button title="+" onPress={() => updateQuantity(item.id, 'increase')} />
              <Button title="-" onPress={() => updateQuantity(item.id, 'decrease')} />
              <Button title="Remove" onPress={() => removeFromCart(item.id)} />
            </View>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${calculateTotal()}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  product: { marginBottom: 15 },
  quantityControls: { flexDirection: 'row', justifyContent: 'space-between' },
  total: { fontSize: 18, marginTop: 20 },
  checkoutButton: { padding: 10, backgroundColor: 'green', marginTop: 20 },
  checkoutButtonText: { color: 'white', textAlign: 'center' },
});

export default CartScreen;
