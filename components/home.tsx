import React, { useState, useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Animated, StatusBar, SafeAreaView } from 'react-native';
import { useCart, Product } from './information';
import { styles } from '../styles';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { addToCart, cart } = useCart();
  const [toastMessage, setToastMessage] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const products: Product[] = [
    { id: '1', name: 'Laptop', price: 67200, quantity: 0, description: '16GB RAM, 512GB SSD.', image: require('../images/laptop.jpg') },
    { id: '2', name: 'Phone', price: 44800, quantity: 0, description: '128GB storage, great camera.', image: require('../images/phone.jpg') },
    { id: '3', name: 'Tablet', price: 28000, quantity: 0, description: 'Sharp display, 64GB storage.', image: require('../images/tablet.jpg') },
    { id: '4', name: 'Headphones', price: 11200, quantity: 0, description: 'Noise-canceling, wireless.', image: require('../images/headphones.jpg') },
    { id: '5', name: 'Smartwatch', price: 16800, quantity: 0, description: 'Heart rate & fitness tracking.', image: require('../images/smartwatch.jpg') },
    { id: '6', name: 'Gaming Console', price: 33600, quantity: 0, description: 'Quality gaming, high performance.', image: require('../images/console.jpg') },
  ];

  const showToast = (message: string) => {
    setToastMessage(message);
    fadeAnim.setValue(0);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => setToastMessage(''));
      }, 1500);
    });
  };

  const handleAddToCart = (item: Product) => {
    addToCart(item);
    showToast(`${item.name} added to cart`);
  };

  const handleCheckoutNavigation = () => {
    if (cart.length === 0) {
      showToast("Cart is empty. Add items first!");
    } else {
      navigation.navigate('Checkout');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#3E1251" />

      <View style={styles.homeContainer}>
        {/* App Name */}
        <Text style={styles.appName}>TECHSTORE</Text>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.homeProduct}>
              <Image source={item.image} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.homeProductText}>{item.name}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
                <Text style={styles.productPrice}>₱{item.price.toFixed(2)}</Text>
                <TouchableOpacity onPress={() => handleAddToCart(item)} style={styles.homeButton}>
                  <Text style={styles.homeButtonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
        
        <View style={styles.navigationButtonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.homeButton}>
            <Text style={styles.homeButtonText}>Go to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCheckoutNavigation} style={styles.homeButton}>
            <Text style={styles.homeButtonText}>Go to Checkout</Text>
          </TouchableOpacity>
        </View>

        {toastMessage !== '' && (
          <Animated.View style={[styles.toastContainer, { opacity: fadeAnim }]}>
            <Text style={styles.toastText}>{toastMessage}</Text>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
