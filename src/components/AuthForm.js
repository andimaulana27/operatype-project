// src/components/AuthForm.js
"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function AuthForm() {
  const { login, register } = useAuth();

  // State UI
  const [isLoginView, setIsLoginView] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // PERUBAHAN: Tambah state untuk loading

  // State form Login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // State form Register
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // State untuk visibilitas password
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  // Styling (Struktur asli Anda)
  const inputStyle = "bg-[#F2F2F2] border-none p-4 my-2 w-full rounded-xl outline-none text-[#3F3F3F] font-light pl-5 pr-12";
  const formButtonStyle = "bg-[#C8705C] text-white rounded-full w-full py-3 text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:bg-[#FF7C5E] disabled:bg-gray-400 disabled:cursor-not-allowed";
  const overlayButtonStyle = "bg-transparent border border-white text-white rounded-full px-12 py-3 text-sm font-medium tracking-wider uppercase transition-all hover:bg-white hover:text-[#C8705C]";

  // Fungsi switch UI
  const switchToLogin = () => setIsLoginView(false);
  const switchToRegister = () => setIsLoginView(true);

  // PERUBAHAN: Fungsi handler submit sekarang bersifat async dan mengatur state loading
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await login(loginEmail, loginPassword);
    setIsLoading(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (regPassword !== regConfirm) {
      alert("Passwords do not match!");
      return;
    }
    if (!agreeTerms) {
      alert("You must agree to the terms of service.");
      return;
    }
    setIsLoading(true);
    await register(regName, regEmail, regPassword);
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center p-4 min-h-[calc(100vh-140px)] bg-[#f9f9f9]">
      <div className="relative w-full max-w-4xl h-[550px] bg-white rounded-2xl shadow-lg overflow-hidden flex">
        
        {/* FORM WRAPPER (Struktur asli Anda dipertahankan) */}
        <div
          className={`flex w-full h-full transition-transform duration-500 ease-in-out ${
            isLoginView ? "translate-x-0" : "-translate-x-1/2"
          }`}
          style={{ width: "200%" }}
        >
          {/* PANEL KIRI (Duplikat untuk animasi) */}
          <div className="w-1/2 flex flex-col justify-center items-center px-10 bg-white">
            <form onSubmit={isLoginView ? handleLogin : handleRegister} className="w-full max-w-sm text-center">
              <h1 className="text-3xl font-medium text-[#3F3F3F]">{isLoginView ? "Login" : "Registration"}</h1>
              <div className="w-16 h-1 bg-[#C8705C] my-6 mx-auto" />

              {isLoginView ? (
                <>
                  <input type="email" placeholder="Email Address" className={inputStyle.replace('pr-12', 'pl-5')} value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
                  <div className="relative w-full">
                    <input type={isPasswordVisible ? "text" : "password"} placeholder="Password" className={inputStyle} value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
                    <button type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400">
                      {isPasswordVisible ? <EyeSlashIcon className="h-5 w-5"/> : <EyeIcon className="h-5 w-5"/>}
                    </button>
                  </div>
                  <Link href="/forgot-password" legacyBehavior>
                    <a className="text-xs text-gray-500 my-5 block hover:underline font-light">Forgot Password?</a>
                  </Link>
                  {/* PERUBAHAN: Menambahkan disabled dan teks loading */}
                  <button type="submit" disabled={isLoading} className={formButtonStyle}>
                    {isLoading ? 'Loading...' : 'Login'}
                  </button>
                </>
              ) : (
                <>
                  <input type="text" placeholder="Full Name" className={inputStyle.replace('pr-12', 'pl-5')} value={regName} onChange={(e) => setRegName(e.target.value)} required />
                  <input type="email" placeholder="Email Address" className={inputStyle.replace('pr-12', 'pl-5')} value={regEmail} onChange={(e) => setRegEmail(e.target.value)} required />
                  <div className="relative w-full">
                    <input type={isPasswordVisible ? "text" : "password"} placeholder="Create Password" className={inputStyle} value={regPassword} onChange={(e) => setRegPassword(e.target.value)} required />
                    <button type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400">
                      {isPasswordVisible ? <EyeSlashIcon className="h-5 w-5"/> : <EyeIcon className="h-5 w-5"/>}
                    </button>
                  </div>
                  <div className="relative w-full">
                    <input type={isConfirmPasswordVisible ? "text" : "password"} placeholder="Confirm Password" className={inputStyle} value={regConfirm} onChange={(e) => setRegConfirm(e.target.value)} required />
                     <button type="button" onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400">
                      {isConfirmPasswordVisible ? <EyeSlashIcon className="h-5 w-5"/> : <EyeIcon className="h-5 w-5"/>}
                    </button>
                  </div>
                  <div className="flex items-center w-full my-4 text-left">
                    <input type="checkbox" id="terms1" className="h-4 w-4 mr-2" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} />
                    <label htmlFor="terms1" className="text-xs text-gray-500 font-light cursor-pointer">
                      I agree to the Terms of Service and Privacy Policy.
                    </label>
                  </div>
                  {/* PERUBAHAN: Menambahkan disabled dan teks loading */}
                  <button type="submit" disabled={!agreeTerms || isLoading} className={formButtonStyle}>
                    {isLoading ? 'Loading...' : 'Register'}
                  </button>
                </>
              )}
            </form>
          </div>

          {/* PANEL KANAN (Duplikat untuk animasi) */}
          <div className="w-1/2 flex flex-col justify-center items-center px-10 bg-white">
            <form onSubmit={!isLoginView ? handleLogin : handleRegister} className="w-full max-w-sm text-center">
              <h1 className="text-3xl font-medium text-[#3F3F3F]">{!isLoginView ? "Login" : "Registration"}</h1>
              <div className="w-16 h-1 bg-[#C8705C] my-6 mx-auto" />
              {!isLoginView ? (
                <>
                   <input type="email" placeholder="Email Address" className={inputStyle.replace('pr-12', 'pl-5')} value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
                  <div className="relative w-full">
                    <input type={isPasswordVisible ? "text" : "password"} placeholder="Password" className={inputStyle} value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
                    <button type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400">
                      {isPasswordVisible ? <EyeSlashIcon className="h-5 w-5"/> : <EyeIcon className="h-5 w-5"/>}
                    </button>
                  </div>
                  <Link href="/forgot-password" legacyBehavior>
                    <a className="text-xs text-gray-500 my-5 block hover:underline font-light">Forgot Password?</a>
                  </Link>
                  {/* PERUBAHAN: Menambahkan disabled dan teks loading */}
                  <button type="submit" disabled={isLoading} className={formButtonStyle}>
                    {isLoading ? 'Loading...' : 'Login'}
                  </button>
                </>
              ) : (
                <>
                  <input type="text" placeholder="Full Name" className={inputStyle.replace('pr-12', 'pl-5')} value={regName} onChange={(e) => setRegName(e.target.value)} required />
                  <input type="email" placeholder="Email Address" className={inputStyle.replace('pr-12', 'pl-5')} value={regEmail} onChange={(e) => setRegEmail(e.target.value)} required />
                   <div className="relative w-full">
                    <input type={isPasswordVisible ? "text" : "password"} placeholder="Create Password" className={inputStyle} value={regPassword} onChange={(e) => setRegPassword(e.target.value)} required />
                    <button type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400">
                      {isPasswordVisible ? <EyeSlashIcon className="h-5 w-5"/> : <EyeIcon className="h-5 w-5"/>}
                    </button>
                  </div>
                  <div className="relative w-full">
                    <input type={isConfirmPasswordVisible ? "text" : "password"} placeholder="Confirm Password" className={inputStyle} value={regConfirm} onChange={(e) => setRegConfirm(e.target.value)} required />
                     <button type="button" onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400">
                      {isConfirmPasswordVisible ? <EyeSlashIcon className="h-5 w-5"/> : <EyeIcon className="h-5 w-5"/>}
                    </button>
                  </div>
                  <div className="flex items-center w-full my-4 text-left">
                     <input type="checkbox" id="terms2" className="h-4 w-4 mr-2" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} />
                    <label htmlFor="terms2" className="text-xs text-gray-500 font-light cursor-pointer">
                      I agree to the Terms of Service and Privacy Policy.
                    </label>
                  </div>
                  {/* PERUBAHAN: Menambahkan disabled dan teks loading */}
                  <button type="submit" disabled={!agreeTerms || isLoading} className={formButtonStyle}>
                    {isLoading ? 'Loading...' : 'Register'}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        {/* PANEL OVERLAY ORANYE (Struktur asli Anda dipertahankan) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
          <div className={`absolute top-0 h-full w-1/2 flex flex-col items-center justify-center text-white text-center p-10 transition-all duration-500 ease-in-out pointer-events-auto ${isLoginView ? "bg-[#C8705C] left-0 rounded-r-[60px] lg:rounded-r-[150px]" : "bg-[#C8705C] left-1/2 rounded-l-[60px] lg:rounded-l-[150px]"}`}>
            {isLoginView ? (
              <>
                <h1 className="text-3xl font-medium">Welcome Back!</h1>
                <p className="text-sm my-4 font-light">Sign in to continue your creative journey.</p>
                <button onClick={switchToLogin} className={overlayButtonStyle}>Login Now</button>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-medium">Hello, Friend!</h1>
                <p className="text-sm my-4 font-light">Create an account and start exploring high quality typeface.</p>
                <button onClick={switchToRegister} className={overlayButtonStyle}>Register Now</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}