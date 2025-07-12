// src/app/cart/page.js
"use client";
import Link from 'next/link';
import CartItem from '@/components/CartItem';
import Button from '@/components/Button';
import { useCart } from '@/context/CartContext';

const userInfo = {
    fullName: 'John doe',
    email: 'Johndoe@gmail.com'
};

export default function CartPage() {
    // 2. Panggil hook useCart untuk mendapatkan state dan fungsi
    const { cartItems, removeFromCart } = useCart();

    // 3. Hitung total harga secara dinamis
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <main className="container mx-auto max-w-[1748px] px-6 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-medium text-[#3F3F3F]">Check-Out</h1>
                <div className="w-24 h-1 bg-[#C8705C] mx-auto mt-4"></div>
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
                                    // 4. Kirim fungsi remove ke komponen CartItem
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
                            <div className="mb-4">
                                <p className="text-sm text-gray-500">Full Name :</p>
                                <p className="text-lg text-[#3F3F3F]">{userInfo.fullName}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email Address :</p>
                                <p className="text-lg text-[#3F3F3F]">{userInfo.email}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Not you? <Link href="/logout" className="text-[#C8705C] hover:underline">Logout</Link></p>
                    </div>
                    
                    <div className="flex justify-between items-center border border-gray-300 rounded-[17px] px-8 py-4">
                        <span className="text-xl text-[#3F3F3F]">Total</span>
                        <span className="text-2xl font-medium text-[#C8705C]">${total.toFixed(2)}</span>
                    </div>

                    <div>
                        <h2 className="text-2xl font-medium text-[#3F3F3F] mb-4">Payment Method</h2>
                        <Button href="#" variant="primary" className="w-full h-16 text-xl rounded-[40px] flex items-center justify-center">
                            Pay with PayPal
                        </Button>
                        <p className="text-center text-sm text-gray-500 mt-4 max-w-sm mx-auto">
                            Your receipt and download links will be sent to this your dashboard profile after purchase.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}