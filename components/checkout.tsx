import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useCart, Product } from './information';
import { styles } from '../styles'; // Importing styles from the styles.ts file

interface CheckoutScreenProps {
  navigation: any;
}

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ navigation }) => {
  const { cart } = useCart();

  const calculateTotal = (): number => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    Alert.alert('Checkout successful', 'Your order has been placed.', [
      { text: 'OK', onPress: () => navigation.navigate('Home') },
    ]);
  };

  return (
    <View style={styles.checkoutContainer}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Product }) => (
          <View style={styles.checkoutProduct}>
            <Text style={styles.checkoutProductText}>{item.name} - ${item.price} x {item.quantity}</Text>
          </View>
        )}
      />
      <Text style={styles.checkoutTotal}>Total: ${calculateTotal()}</Text>
      <TouchableOpacity onPress={handleCheckout} style={styles.checkoutCompleteButton}>
        <Text style={styles.checkoutCompleteButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutScreen;
