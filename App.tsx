import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './components/information';
import HomeScreen from './components/home';
import CartScreen from './components/cart';
import CheckoutScreen from './components/checkout';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{ 
            headerStyle: { backgroundColor: '#3E1251' },
            headerTintColor: '#FFFFFF',
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Product List' }} />
          <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Shopping Cart' }} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
