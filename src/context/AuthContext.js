// src/context/AuthContext.js
"use client";

import React, { createContext, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';

// 1. Membuat Auth Context
const AuthContext = createContext();

// Data pengguna palsu untuk simulasi
const MOCK_USER = {
  name: 'Andi Maulana',
  email: 'andi.maulana.dev@example.com',
};

// 2. Membuat Auth Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Awalnya tidak ada pengguna yang login
  const router = useRouter();

  // Fungsi untuk login
  const login = (email, password) => {
    // Di dunia nyata, di sini akan ada panggilan API ke backend
    // Untuk sekarang, kita anggap login selalu berhasil jika email & password diisi
    console.log("Attempting login with:", email, password);
    if (email && password) {
      setUser(MOCK_USER);
      router.push('/account'); // Arahkan ke halaman akun setelah login
    } else {
      alert('Please enter email and password.');
    }
  };

  // Fungsi untuk registrasi
  const register = (name, email, password) => {
    // Simulasi registrasi
    console.log("Attempting registration for:", name, email);
    if (name && email && password) {
      setUser({ name, email });
      router.push('/account'); // Arahkan ke halaman akun setelah registrasi
    } else {
      alert('Please fill all registration fields.');
    }
  };

  // Fungsi untuk logout
  const logout = () => {
    setUser(null); // Hapus data pengguna
    router.push('/login'); // Arahkan kembali ke halaman login
  };

  // Mengecek apakah pengguna sudah terautentikasi
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Hook kustom untuk menggunakan AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
