 // src/context/CartContext.js
 "use client";

 import React, { createContext, useState, useContext } from 'react';

 const CartContext = createContext();

 export const CartProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState([]);
   const [notification, setNotification] = useState(null); // State untuk notifikasi

   const showNotification = (message) => {
     setNotification({ message, show: true });
     setTimeout(() => {
       setNotification({ ...notification, show: false });
     }, 3000); // Tampilkan notifikasi selama 3 detik
   };

   const addToCart = (product, license, quantity) => {
     setCartItems(prevItems => {
       const itemID = `${product.name}-${license.name}`;
       const existingItem = prevItems.find(item => item.id === itemID);

       if (existingItem) {
         return prevItems.map(item =>
           item.id === itemID
             ? { ...item, quantity: item.quantity + quantity }
             : item
         );
       } else {
         const newItem = {
           id: itemID,
           name: product.name,
           imageUrl: product.mainImage,
           license: license.name,
           price: license.price,
           quantity: quantity,
         };
         return [...prevItems, newItem];
       }
     });
     showNotification(`${product.name} (${license.name}) has been added to your cart!`);
   };

   const removeFromCart = (itemId) => {
     setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
   };

   const cartItemCount = cartItems.length;

   return (
     <CartContext.Provider value={{ cartItems, cartItemCount, addToCart, removeFromCart, notification }}>
       {children}
       {notification?.show && (
         <div className="fixed top-6 right-6 bg-[#C8705C] text-white p-4 rounded-md shadow-lg z-50">
           {notification.message}
         </div>
       )}
     </CartContext.Provider>
   );
 };

 export const useCart = () => {
   return useContext(CartContext);
 };
 