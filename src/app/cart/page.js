// src/app/cart/page.js
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import CartItem from '@/components/CartItem';
import Button from '@/components/Button';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext'; // 1. Import useAuth

export default function CartPage() {
    const { cartItems, removeFromCart } = useCart();
    const { user, isAuthenticated } = useAuth(); // 2. Panggil useAuth

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // 3. State untuk countdown timer
    const [timeLeft, setTimeLeft] = useState({
        hours: 12,
        minutes: 0,
        seconds: 0,
    });

    // 4. Logika untuk countdown
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(prevTime => {
                const { hours, minutes, seconds } = prevTime;
                if (seconds > 0) {
                    return { ...prevTime, seconds: seconds - 1 };
                }
                if (minutes > 0) {
                    return { ...prevTime, minutes: minutes - 1, seconds: 59 };
                }
                if (hours > 0) {
                    return { hours: hours - 1, minutes: 59, seconds: 59 };
                }
                return prevTime; // Waktu habis
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    // Fungsi untuk format angka (01, 02, etc.)
    const formatTime = (time) => time.toString().padStart(2, '0');

    return (
        <main className="container mx-auto max-w-[1748px] px-6 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-medium text-[#3F3F3F]">Check-Out</h1>
                <div className="w-24 h-1 bg-[#C8705C] mx-auto mt-4"></div>
            </div>

            {/* PERUBAHAN DI SINI: Countdown Timer Section */}
            <div className="bg-[#3F3F3F] text-white p-6 rounded-2xl mb-12 text-center">
                <h3 className="text-lg font-medium">Don't miss out on these deals!</h3>
                <p className="font-light text-sm mt-1">Prices will change when the clock runs out, shop now before it's too late.</p>
                <div className="flex justify-center items-center space-x-4 mt-4 text-3xl font-medium">
                    <div>{formatTime(timeLeft.hours)}</div>
                    <div>:</div>
                    <div>{formatTime(timeLeft.minutes)}</div>
                    <div>:</div>
                    <div>{formatTime(timeLeft.seconds)}</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Kolom Kiri: Order Summary */}
                <div>
                    <h2 className="text-2xl font-medium text-[#3F3F3F]">Order Summary</h2>
                    <div className="mt-6 divide-y divide-gray-200">
                        {cartItems.length > 0 ? (
                            cartItems.map(item => (
                                <CartItem
                                    key={item.id}
                                    name={item.name}
                                    license={item.license}
                                    price={item.price}
                                    quantity={item.quantity}
                                    imageUrl={item.imageUrl}
                                    onRemove={() => removeFromCart(item.id)}
                                />
                            ))
                        ) : (
                            <p className="py-4 text-center text-gray-500">Your cart is empty.</p>
                        )}
                    </div>
                </div>

                {/* Kolom Kanan: Info & Pembayaran */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-medium text-[#3F3F3F] mb-4">Logged in As</h2>
                        <div className="bg-[#F2F2F2] p-6 rounded-lg">
                           {/* 5. Tampilkan data pengguna dinamis */}
                           {isAuthenticated && user ? (
                             <>
                                <div className="mb-4">
                                    <p className="text-sm text-gray-500">Full Name :</p>
                                    <p className="text-lg text-[#3F3F3F]">{user.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email Address :</p>
                                    <p className="text-lg text-[#3F3F3F]">{user.email}</p>
                                </div>
                             </>
                           ) : (
                            <p className="text-gray-500">
                                Please <Link href="/login" className="text-[#C8705C] hover:underline">login</Link> to proceed.
                            </p>
                           )}
                        </div>
                        {isAuthenticated && (
                            <p className="text-sm text-gray-500 mt-2">Not you? <Link href="/logout" className="text-[#C8705C] hover:underline">Logout</Link></p>
                        )}
                    </div>
                    
                    <div className="flex justify-between items-center border border-gray-300 rounded-[17px] px-8 py-4">
                        <span className="text-xl text-[#3F3F3F]">Total</span>
                        <span className="text-2xl font-medium text-[#C8705C]">${total.toFixed(2)}</span>
                    </div>

                    <div>
                        <h2 className="text-2xl font-medium text-[#3F3F3F] mb-4">Payment Method</h2>
                        <Button 
                            href="#" 
                            variant="primary" 
                            className="w-full h-16 text-xl rounded-[40px] flex items-center justify-center"
                            disabled={!isAuthenticated || cartItems.length === 0} // Disable jika belum login atau keranjang kosong
                        >
                            Pay with PayPal
                        </Button>
                        <p className="text-center text-sm text-gray-500 mt-4 max-w-sm mx-auto">
                            Your receipt and download links will be sent to your dashboard profile after purchase.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}