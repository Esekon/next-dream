import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const addToCart = (item) => {
    setIsLoading(true);
    setMessage('');

    setTimeout(() => {
      setCartItems(prev => {
        const existing = prev.find(i => i.name === item.name);
        if (existing) {
          return prev.map(i =>
            i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [...prev, { ...item, quantity: 1 }];
      });

      setIsLoading(false);
      setMessage('✅ Item added to cart!');
      setTimeout(() => setMessage(''), 2000);
    }, 1000);
  };

  const removeFromCart = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isLoading, message }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
