import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { useCart, Product } from './information';
import { styles } from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';

interface CartScreenProps {
  navigation: any;
}

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const calculateTotal = (): number => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckoutNavigation = () => {
    if (cart.length === 0) {
      Alert.alert('Cart is empty', 'You cannot proceed to checkout with an empty cart.');
    } else {
      navigation.navigate('Checkout');
    }
  };

  return (
    <SafeAreaView style={styles.cartContainer}>
      {cart.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: Product }) => (
            <View style={styles.cartProduct}>
              {/* Product Image (Left) */}
              <Image source={item.image} style={styles.cartProductImage} />

              {/* Product Info (Middle) */}
              <View style={styles.cartProductInfo}>
                <Text style={styles.cartProductText}>{item.name}</Text>
                <Text style={styles.cartProductDetails}>Price: ${item.price}</Text>
                <Text style={styles.cartProductDetails}>Quantity: {item.quantity}</Text>
              </View>

              {/* Buttons (Right) */}
              <View style={styles.cartControls}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 'increase')} style={styles.cartButton}>
                  <Text style={styles.cartButtonText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrease')} style={styles.cartButton}>
                  <Text style={styles.cartButtonText}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.cartButton}>
                  <Text style={styles.cartButtonText}>X</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}

      {}
      <View style={styles.cartFooter}>
        <Text style={styles.total}>Total: ${calculateTotal()}</Text>
        <TouchableOpacity
          onPress={handleCheckoutNavigation}
          style={[styles.checkoutButton, cart.length === 0 && styles.disabledButton]}
          disabled={cart.length === 0}
        >
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
