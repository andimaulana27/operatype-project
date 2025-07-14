// src/context/AuthContext.js
"use client";

import React, { createContext, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

// Data pengguna palsu untuk simulasi "database"
const MOCK_USERS = [
  {
    name: 'Andi Maulana',
    email: 'andi.maulana.dev@example.com',
    password: 'password123', // Tambahkan password untuk validasi
  }
];


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [users, setUsers] = useState(MOCK_USERS); // State untuk daftar pengguna
  const router = useRouter();

  // Fungsi untuk login
  const login = (email, password) => {
    // Cari pengguna berdasarkan email
    const foundUser = users.find(u => u.email === email);

    // Validasi email dan password
    if (foundUser && foundUser.password === password) {
      setUser(foundUser);
      router.push('/account'); 
    } else {
      alert('Invalid email or password.');
    }
  };

  // Fungsi untuk registrasi
  const register = (name, email, password) => {
    // Cek apakah email sudah ada
    if (users.some(u => u.email === email)) {
      alert('An account with this email already exists.');
      return;
    }
    
    const newUser = { name, email, password };
    // Tambahkan pengguna baru ke "database" simulasi
    setUsers(prevUsers => [...prevUsers, newUser]);
    // Langsung login setelah registrasi
    setUser(newUser); 
    router.push('/account'); 
  };

  // Fungsi untuk logout
  const logout = () => {
    setUser(null); 
    router.push('/login');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};