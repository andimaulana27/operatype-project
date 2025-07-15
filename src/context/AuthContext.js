// src/context/AuthContext.js
"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Definisikan email admin di satu tempat
const ADMIN_EMAIL = "andi.maulana.dev@example.com";

const AuthContext = createContext();

const getInitialState = (key, defaultValue) => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultValue;
      }
    }
  }
  return defaultValue;
};

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => getInitialState('users_db', [{
    name: 'Andi Maulana',
    email: ADMIN_EMAIL, // Gunakan konstanta
    password: 'password123',
  }]));
  
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); // State baru untuk status admin
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = getInitialState('current_user', null);
    if (storedUser) {
      setUser(storedUser);
      // Langsung cek apakah user yang login adalah admin
      if (storedUser.email === ADMIN_EMAIL) {
        setIsAdmin(true);
      }
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const foundUser = users.find(u => u.email === email);
    if (foundUser && foundUser.password === password) {
      setUser(foundUser);
      // Cek dan set status admin saat login
      if (foundUser.email === ADMIN_EMAIL) {
        setIsAdmin(true);
      }
      // Arahkan ke dashboard jika admin, jika tidak ke halaman akun
      if (foundUser.email === ADMIN_EMAIL) {
        router.push('/dashboard');
      } else {
        router.push('/account');
      }
    } else {
      alert('Invalid email or password.');
    }
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false); // Reset status admin saat logout
    localStorage.removeItem('current_user');
    router.push('/login');
  };
  
  // Update useEffect untuk menyimpan user ke localStorage
  useEffect(() => {
    if (!loading) {
      if (user) {
        localStorage.setItem('current_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('current_user');
      }
    }
  }, [user, loading]);

  // Fungsi register tidak perlu diubah
  const register = (name, email, password) => {
    if (users.some(u => u.email === email)) {
      alert('An account with this email already exists.');
      return;
    }
    const newUser = { name, email, password };
    setUsers(prevUsers => [...prevUsers, newUser]);
    setUser(newUser);
    setIsAdmin(false); // Pastikan user baru bukan admin
    router.push('/account'); 
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isAdmin, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};