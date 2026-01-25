"use client";
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { ShieldCheck, Truck, CreditCard, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cartItems, totalPrice } = useCart();
  const deliveryCharge = 60;
  const finalTotal = totalPrice + deliveryCharge;

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        <Link href="/cart" className="inline-flex items-center gap-2 mb-8 text-black font-black text-[10px] uppercase tracking-widest">
           <ArrowLeft size={16} /> Return to Cart
        </Link>

        <h1 className="text-4xl font-black text-black uppercase mb-10 tracking-tighter">Complete <span className="text-white">Your Order</span></h1>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* বাম পাশ: কাস্টমার ইনফর্মেশন ফর্ম */}
          <div className="flex-[1.5] space-y-6">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/50">
              <h2 className="text-2xl font-black uppercase text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#5BF527] rounded-full flex items-center justify-center text-black">1</div>
                Shipping Address
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Full Name</label>
                  <input type="text" placeholder="Enter your name" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 ring-[#5BF527] font-bold outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Phone Number</label>
                  <input type="text" placeholder="017XXXXXXXX" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 ring-[#5BF527] font-bold outline-none" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Full Address</label>
                  <textarea placeholder="House no, Road no, Area..." rows="3" className="w-full bg-gray-50 border-none rounded-3xl p-6 focus:ring-2 ring-[#5BF527] font-bold outline-none resize-none"></textarea>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/50">
               <h2 className="text-2xl font-black uppercase text-gray-900 mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#5BF527] rounded-full flex items-center justify-center text-black">2</div>
                  Payment Method
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="border-2 border-[#5BF527] bg-[#5BF527]/5 p-6 rounded-3xl flex items-center justify-between cursor-pointer">
                     <div className="flex items-center gap-4">
                        <Truck className="text-black" />
                        <span className="font-black text-xs uppercase">Cash on Delivery</span>
                     </div>
                     <div className="w-5 h-5 rounded-full border-4 border-black"></div>
                  </label>
                  <label className="border-2 border-gray-100 p-6 rounded-3xl flex items-center justify-between cursor-not-allowed opacity-50">
                     <div className="flex items-center gap-4">
                        <CreditCard className="text-gray-400" />
                        <span className="font-black text-xs uppercase text-gray-400">Online Payment</span>
                     </div>
                     <div className="w-5 h-5 rounded-full border-2 border-gray-200"></div>
                  </label>
               </div>
            </div>
          </div>

          {/* ডান পাশ: অর্ডার সামারি */}
          <div className="flex-1">
            <div className="bg-black text-white p-10 rounded-[3rem] shadow-2xl sticky top-28 border border-gray-800">
               <h3 className="text-xl font-black uppercase text-[#5BF527] mb-8">Your Order</h3>
               
               <div className="space-y-4 max-h-60 overflow-y-auto mb-8 pr-2 custom-scrollbar">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center gap-4">
                       <div className="flex items-center gap-3">
                          <img src={item.img} className="w-12 h-12 rounded-xl object-cover border border-gray-800" />
                          <div>
                             <p className="text-[10px] font-black uppercase leading-tight line-clamp-1">{item.name}</p>
                             <p className="text-[9px] text-gray-500 font-bold">QTY: {item.quantity}</p>
                          </div>
                       </div>
                       <p className="text-xs font-black text-[#5BF527]">৳{item.price}</p>
                    </div>
                  ))}
               </div>

               <div className="space-y-4 pt-6 border-t border-gray-800">
                  <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                     <span>Subtotal</span>
                     <span>৳{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                     <span>Shipping</span>
                     <span>৳{deliveryCharge}</span>
                  </div>
                  <div className="flex justify-between text-2xl font-black text-[#5BF527] pt-4">
                     <span>Total</span>
                     <span>৳{finalTotal.toLocaleString()}</span>
                  </div>
               </div>

               <button className="w-full bg-[#5BF527] text-black py-5 rounded-2xl font-black uppercase text-xs tracking-widest mt-10 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(91,245,39,0.3)]">
                  Confirm Order 🚀
               </button>

               <div className="mt-8 flex items-center justify-center gap-2 text-gray-500">
                  <ShieldCheck size={14} />
                  <span className="text-[8px] font-bold uppercase tracking-widest">Secure Checkout Guaranteed</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}