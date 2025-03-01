import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useCart, Product } from './information';

interface CheckoutScreenProps {
  navigation: any;
}

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ navigation }) => {
  const { cart } = useCart();  // Accessing context here, guaranteed to not be undefined

  // Function to calculate the total price of all items in the cart
  const calculateTotal = (): number => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to handle checkout logic
  const handleCheckout = () => {
    Alert.alert('Checkout successful', 'Your order has been placed.', [
      { text: 'OK', onPress: () => navigation.navigate('Home') }, // Navigate to Home Screen after checkout
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Product }) => ( // Type the item explicitly here
          <View style={styles.product}>
            <Text>{item.name} - ${item.price} x {item.quantity}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${calculateTotal()}</Text>
      <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  product: { marginBottom: 15 },
  total: { fontSize: 18, marginTop: 20 },
  checkoutButton: { padding: 10, backgroundColor: 'green', marginTop: 20 },
  checkoutButtonText: { color: 'white', textAlign: 'center' },
});

export default CheckoutScreen;
