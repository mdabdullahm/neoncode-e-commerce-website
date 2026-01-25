"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Local Storage থেকে ডাটা লোড করা
  useEffect(() => {
    const savedCart = localStorage.getItem('neonCart');
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  // কার্ট আপডেট হলে Local Storage এ সেভ করা
  useEffect(() => {
    localStorage.setItem('neonCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const isExist = prevItems.find((item) => item.id === product.id);
      if (isExist) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, type) => {
    setCartItems(cartItems.map(item => {
      if(item.id === id) {
        return {
          ...item,
          quantity: type === 'inc' ? item.quantity + 1 : (item.quantity > 1 ? item.quantity - 1 : 1)
        }
      }
      return item;
    }));
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseInt(item.price.replace(/,/g, ''));
    return total + (price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);