"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Chrome, Facebook, Zap } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] flex items-center justify-center p-4 md:p-12">
      
      {/* ১. মেইন লগইন কার্ড */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[1100px] bg-white rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col lg:flex-row border border-white/50"
      >
        
        {/* বাম পাশ: ব্র্যান্ডিং এবং ইমেজ (মোবাইলে হাইড থাকবে) */}
        <div className="hidden lg:flex flex-1 bg-black p-20 flex-col justify-between relative overflow-hidden">
           {/* Decorative Glow */}
           <div className="absolute top-0 right-0 w-80 h-80 bg-[#5BF527]/20 rounded-full blur-[120px]"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5BF527]/10 rounded-full blur-[100px]"></div>

           <div className="relative z-10">
              <Link href="/" className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#5BF527]/30">
                    <img src="/neonlogo/neoncodelogo.jpg" alt="Logo" className="w-full h-full object-cover"/>
                 </div>
                 <div className="text-2xl font-black text-white tracking-tighter uppercase">
                    NEON<span className="text-[#5BF527]">CODE</span>
                 </div>
              </Link>
           </div>

           <div className="relative z-10">
              <h2 className="text-5xl font-black text-white leading-none uppercase tracking-tighter mb-6">
                Start Your <br /> <span className="text-[#5BF527]">Premium</span> <br /> Journey.
              </h2>
              <p className="text-gray-400 font-medium text-sm leading-relaxed uppercase tracking-widest">
                এক্সক্লুসিভ কালেকশন এবং পার্সোনালাইজড শপিং এক্সপেরিয়েন্স পেতে আজই লগইন করুন।
              </p>
           </div>

           <div className="relative z-10 flex items-center gap-2 text-gray-500 font-black text-[10px] uppercase tracking-[0.4em]">
              <Zap size={14} className="text-[#5BF527]" /> Join The Community
           </div>
        </div>

        {/* ডান পাশ: লগইন ফর্ম */}
        <div className="flex-[1.2] p-8 md:p-16 lg:p-24 bg-white">
           <div className="max-w-md mx-auto">
              <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-2">Hello Again!</h3>
              <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-12">Welcome back to NeonCode Store</p>

              <form className="space-y-6">
                 {/* ইমেইল ইনপুট */}
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 ml-4 tracking-widest">Email Address</label>
                    <div className="relative group">
                       <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#5BF527] transition-colors" size={20} />
                       <input 
                         type="email" 
                         placeholder="yourname@gmail.com" 
                         className="w-full bg-gray-50 border-none rounded-2xl py-5 pl-14 pr-6 font-bold text-sm outline-none focus:ring-2 ring-[#5BF527] transition-all"
                       />
                    </div>
                 </div>

                 {/* পাসওয়ার্ড ইনপুট */}
                 <div className="space-y-2">
                    <div className="flex justify-between items-center px-4">
                       <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Password</label>
                       <Link href="/forgot-password" size={14} className="text-[9px] font-black text-[#5BF527] uppercase tracking-widest hover:underline">Forgot?</Link>
                    </div>
                    <div className="relative group">
                       <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#5BF527] transition-colors" size={20} />
                       <input 
                         type={showPassword ? "text" : "password"} 
                         placeholder="••••••••" 
                         className="w-full bg-gray-50 border-none rounded-2xl py-5 pl-14 pr-14 font-bold text-sm outline-none focus:ring-2 ring-[#5BF527] transition-all"
                       />
                       <button 
                         type="button"
                         onClick={() => setShowPassword(!showPassword)}
                         className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                       >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                       </button>
                    </div>
                 </div>

                 {/* লগইন বাটন */}
                 <button className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-[#5BF527] hover:text-black transition-all shadow-xl active:scale-95 group mt-8">
                    Sign In Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </form>

              {/* সোশ্যাল লগইন */}
              <div className="mt-12 text-center">
                 <div className="relative mb-10">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                    <div className="relative flex justify-center text-[10px] uppercase font-black text-gray-400 tracking-widest">
                       <span className="bg-white px-4">Or continue with</span>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-3 py-4 border border-gray-100 rounded-2xl font-bold text-xs hover:bg-gray-50 transition-all active:scale-95">
                       <Chrome size={18} className="text-red-500" /> Google
                    </button>
                    <button className="flex items-center justify-center gap-3 py-4 border border-gray-100 rounded-2xl font-bold text-xs hover:bg-gray-50 transition-all active:scale-95">
                       <Facebook size={18} className="text-blue-600" /> Facebook
                    </button>
                 </div>
              </div>

              {/* সাইন আপ লিংক */}
              <p className="mt-12 text-center text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                 New Member? <Link href="/register" className="text-[#5BF527] hover:underline font-black">Register Here</Link>
              </p>
           </div>
        </div>

      </motion.div>

    </main>
  );
};

export default LoginPage;