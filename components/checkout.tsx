import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useCart, Product } from './information';
import { styles } from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';

interface CheckoutScreenProps {
  navigation: any;
}

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ navigation }) => {
  const { cart, clearCart } = useCart();

  const calculateTotal = (): number => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    Alert.alert('Checkout successful', 'Your order has been placed.', [
      { 
        text: 'OK', 
        onPress: () => {
          clearCart();
          navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
        }
      }
    ]);
  };

  return (
    <SafeAreaView style={styles.checkoutContainer}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Product }) => (
          <View style={styles.checkoutProduct}>
            <Text style={styles.checkoutProductText}>{item.name} - ${item.price} x {item.quantity}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
      <Text style={styles.checkoutTotal}>Total: ${calculateTotal()}</Text>
      <TouchableOpacity onPress={handleCheckout} style={styles.checkoutCompleteButton}>
        <Text style={styles.checkoutCompleteButtonText}>Checkout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
