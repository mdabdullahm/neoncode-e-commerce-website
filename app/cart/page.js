"use client";
import React from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] flex flex-col items-center justify-center p-6">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={40} className="text-gray-300" />
          </div>
          <h2 className="text-3xl font-black text-black uppercase mb-4">Your cart is empty!</h2>
          <p className="text-gray-500 mb-8">এখনো কিছু কেনাকাটা করেননি? আমাদের কালেকশন দেখুন।</p>
          <Link href="/" className="bg-black text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#5BF527] hover:text-black transition-all">
            Start Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] py-12 px-4 md:px-12">
      <h1 className="text-4xl font-black text-black uppercase mb-10 text-center">My <span className="text-white">Shopping Cart</span></h1>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Side: Items List */}
        <div className="lg:w-2/3 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-[2.5rem] p-4 flex items-center gap-6 shadow-xl border border-white/50">
              <div className="w-24 h-24 bg-gray-50 rounded-2xl overflow-hidden shrink-0">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-black text-sm md:text-lg text-gray-900 uppercase leading-tight">{item.name}</h3>
                <p className="font-black text-[#5BF527] mt-1">৳{item.price}</p>
              </div>

              <div className="flex items-center bg-gray-100 rounded-xl p-1 gap-4">
                <button onClick={() => updateQuantity(item.id, 'dec')} className="w-8 h-8 flex items-center justify-center font-bold">-</button>
                <span className="font-black text-sm">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 'inc')} className="w-8 h-8 flex items-center justify-center font-bold">+</button>
              </div>

              <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 p-2 transition-colors">
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Right Side: Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-black text-white p-8 rounded-xl shadow-2xl sticky top-28">
            <h3 className="text-xl font-black uppercase border-b border-gray-800 pb-4 mb-6 text-[#5BF527]">Order Summary</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between font-bold text-gray-400 uppercase text-xs">
                <span>Subtotal</span>
                <span>৳{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-gray-400 uppercase text-xs">
                <span>Delivery Charge</span>
                <span>৳60</span>
              </div>
              <div className="flex justify-between text-xl font-black border-t border-gray-800 pt-4 text-[#5BF527]">
                <span>Total</span>
                <span>৳{(totalPrice + 60).toLocaleString()}</span>
              </div>
            </div>
            <button className="w-full bg-[#5BF527] text-black py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(91,245,39,0.3)]">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;