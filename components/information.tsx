import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the types for Product and Cart Context
export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: string, type: 'increase' | 'decrease') => void;
  removeFromCart: (productId: string) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

// Create the Context with default value as undefined
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Context provider with safe handling of cart
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId: string, type: 'increase' | 'decrease') => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId) {
          const updatedQuantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: updatedQuantity > 0 ? updatedQuantity : 1 };
        }
        return item;
      });
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext and avoid undefined errors
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
