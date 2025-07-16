// src/context/AuthContext.js
"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const supabase = createClient();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // --- PERUBAHAN DI SINI ---
  // Menggunakan email admin asli Anda
  const ADMIN_EMAIL = "andimaula1227@gmail.com"; 
  // -------------------------

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
        setIsAdmin(session.user.email === ADMIN_EMAIL);
      }
      setLoading(false);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setIsAdmin(session?.user?.email === ADMIN_EMAIL);
      if (!loading) setLoading(false);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [supabase, ADMIN_EMAIL, loading]);


  const login = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(`Login failed: ${error.message}`);
      return;
    }
    if (email === ADMIN_EMAIL) {
      router.push('/dashboard');
    } else {
      router.push('/account');
    }
  };

  const register = async (name, email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        }
      }
    });

    if (error) {
      alert(`Registration failed: ${error.message}`);
      return;
    }
    
    router.push('/account');
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsAdmin(false);
    router.push('/login');
  };

  const value = {
    user: user ? {
      ...user,
      name: user.user_metadata?.full_name || user.email 
    } : null,
    isAuthenticated: !!user,
    isAdmin,
    loading,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};