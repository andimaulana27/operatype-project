// src/components/AuthForm.js
"use client";
import { useState } from 'react';

export default function AuthForm() {
  const [isLoginView, setIsLoginView] = useState(true);

  // Style dasar yang akan kita gunakan
  const inputStyle = "bg-[#F2F2F2] border-none p-4 my-2 w-full rounded-xl outline-none text-[#3F3F3F] font-light";
  const formButtonStyle = "bg-[#C8705C] text-white rounded-full w-full py-3 text-sm font-medium tracking-wider uppercase transition-transform hover:scale-105";
  const overlayButtonStyle = "bg-transparent border border-white text-white rounded-full px-12 py-3 text-sm font-medium tracking-wider uppercase transition-all hover:bg-white hover:text-[#C8705C]";

  if (isLoginView) {
    // === TAMPILAN LOGIN (DEFAULT) ===
    return (
      <div className="flex items-center justify-center p-4 min-h-[80vh]">
        <div className="grid grid-cols-2 w-full max-w-4xl min-h-[550px] bg-white rounded-2xl shadow-lg overflow-hidden">
          
          {/* Panel Kiri (Overlay Oranye) */}
          <div className="bg-[#C8705C] text-white flex flex-col items-center justify-center text-center p-10 rounded-r-[100px] lg:rounded-r-[150px]">
            <h1 className="text-3xl font-medium">Hello, Friend!</h1>
            <p className="text-sm my-4 font-light">Create an account and start exploring high quality typeface.</p>
            <button onClick={() => setIsLoginView(false)} type="button" className={overlayButtonStyle}>
              Register Now
            </button>
          </div>

          {/* Panel Kanan (Form Login) */}
          <div className="flex flex-col items-center justify-center p-10">
            <form className="w-full px-8 text-center">
              <h1 className="text-3xl font-medium text-[#3F3F3F]">Login</h1>
              <div className="w-16 h-1 bg-[#C8705C] my-6 mx-auto"></div>
              <input type="email" placeholder="Email Address" className={inputStyle} />
              <input type="password" placeholder="Password" className={inputStyle} />
              <a href="#" className="text-xs text-gray-500 my-5 block hover:underline font-light">Forgot Password?</a>
              <button type="button" className={formButtonStyle}>Login</button>
            </form>
          </div>

        </div>
      </div>
    );
  }

  // === TAMPILAN REGISTRASI ===
  return (
    <div className="flex items-center justify-center p-4 min-h-[80vh]">
      <div className="grid grid-cols-2 w-full max-w-4xl min-h-[550px] bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Panel Kiri (Form Registrasi) */}
        <div className="flex flex-col items-center justify-center p-10">
            <form className="w-full px-8 text-center">
                <h1 className="text-3xl font-medium text-[#3F3F3F]">Registration</h1>
                <div className="w-16 h-1 bg-[#C8705C] my-4 mx-auto"></div>
                <input type="text" placeholder="Full Name" className={inputStyle} />
                <input type="email" placeholder="Email Address" className={inputStyle} />
                <input type="password" placeholder="Create Password" className={inputStyle} />
                <input type="password" placeholder="Confirm Password" className={inputStyle} />
                <div className="flex items-center w-full my-4">
                    <input type="checkbox" id="terms" className="mr-2" />
                    <label htmlFor="terms" className="text-xs text-gray-500 font-light">I agree to the Terms of Service and Privacy Policy.</label>
                </div>
                <button type="button" className={formButtonStyle}>Register</button>
            </form>
        </div>

        {/* Panel Kanan (Overlay Oranye) */}
        <div className="bg-[#C8705C] text-white flex flex-col items-center justify-center text-center p-10 rounded-l-[100px] lg:rounded-l-[150px]">
          <h1 className="text-3xl font-medium">Welcome Back!</h1>
          <p className="text-sm my-4 font-light">Sign in to continue your creative journey.</p>
          <button onClick={() => setIsLoginView(true)} type="button" className={overlayButtonStyle}>
            Login Now
          </button>
        </div>
      </div>
    </div>
  );
}