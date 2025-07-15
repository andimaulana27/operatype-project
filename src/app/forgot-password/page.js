// src/app/forgot-password/page.js
"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Untuk saat ini, kita hanya menampilkan alert dan mengubah UI
    console.log('Password reset request for:', email);
    setSubmitted(true);
  };

  const inputStyle = "bg-[#F2F2F2] border-none p-4 my-2 w-full rounded-xl outline-none text-[#3F3F3F] font-light pl-5";
  const formButtonStyle = "bg-[#C8705C] text-white rounded-full w-full py-3 text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:bg-[#FF7C5E]";

  return (
    <div className="flex items-center justify-center p-4 min-h-[calc(100vh-220px)] bg-[#f9f9f9]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-10 text-center">
        {!submitted ? (
          <>
            <h1 className="text-3xl font-medium text-[#3F3F3F]">Forgot Password</h1>
            <div className="w-16 h-1 bg-[#C8705C] my-6 mx-auto" />
            <p className="text-sm font-light text-gray-500 mb-6">
              Enter the email address associated with your account, and we&apos;ll send you a link to reset your password.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email Address"
                className={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className={`${formButtonStyle} mt-4`}>
                Send Reset Link
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-medium text-[#3F3F3F]">Check Your Email</h1>
            <div className="w-16 h-1 bg-[#C8705C] my-6 mx-auto" />
            <p className="text-sm font-light text-gray-500 mb-6">
              We have sent a password reset link to <span className="font-medium text-[#3F3F3F]">{email}</span>. Please check your inbox and follow the instructions.
            </p>
            <Link href="/login" className={`${formButtonStyle} inline-block w-auto px-12 py-3`}>
                Back to Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}