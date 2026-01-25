"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  User, Mail, Lock, Phone, Eye, EyeOff, 
  ArrowRight, Chrome, Facebook, Zap, CheckCircle 
} from 'lucide-react';

const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] flex items-center justify-center p-4 md:p-12">
      
      {/* ১. মেইন রেজিস্ট্রেশন কার্ড */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[1200px] bg-white rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col lg:flex-row border border-white/50"
      >
        
        {/* বাম পাশ: ব্র্যান্ডিং এবং ইউজার বেনিফিট (মোবাইলে হাইড থাকবে) */}
        <div className="hidden lg:flex flex-1 bg-black p-16 flex-col justify-between relative overflow-hidden">
           {/* Decorative Elements */}
           <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#5BF527]/20 rounded-full blur-[120px]"></div>
           
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
              <h2 className="text-5xl font-black text-white leading-tight uppercase tracking-tighter mb-8">
                Create Your <br /> <span className="text-[#5BF527]">Elite</span> Account.
              </h2>
              
              {/* সুবিধাগুলোর লিস্ট */}
              <div className="space-y-5">
                 {[
                   "Access to exclusive drops",
                   "Faster checkout experience",
                   "Personalized tech suggestions",
                   "Early bird discounts & rewards"
                 ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                       <CheckCircle size={16} className="text-[#5BF527]" /> {text}
                    </div>
                 ))}
              </div>
           </div>

           <div className="relative z-10 flex items-center gap-2 text-gray-500 font-black text-[10px] uppercase tracking-[0.4em]">
              <Zap size={14} className="text-[#5BF527]" /> Powering Your Lifestyle
           </div>
        </div>

        {/* ডান পাশ: সাইন আপ ফর্ম */}
        <div className="flex-[1.3] p-8 md:p-12 lg:p-20 bg-white">
           <div className="max-w-lg mx-auto">
              <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-2">Join NeonCode</h3>
              <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-10">Become a part of the future store</p>

              <form className="space-y-5">
                 {/* নাম এবং ইমেইল (একই রো-তে বড় ডিভাইসে) */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                       <label className="text-[9px] font-black uppercase text-gray-400 ml-4 tracking-widest">Full Name</label>
                       <div className="relative">
                          <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          <input type="text" placeholder="Alex Morgan" className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-14 pr-6 font-bold text-sm outline-none focus:ring-2 ring-[#5BF527] transition-all" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[9px] font-black uppercase text-gray-400 ml-4 tracking-widest">Phone Number</label>
                       <div className="relative">
                          <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          <input type="text" placeholder="017XXXXXXXX" className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-14 pr-6 font-bold text-sm outline-none focus:ring-2 ring-[#5BF527] transition-all" />
                       </div>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase text-gray-400 ml-4 tracking-widest">Email Address</label>
                    <div className="relative">
                       <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                       <input type="email" placeholder="alex@neoncode.com" className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-14 pr-6 font-bold text-sm outline-none focus:ring-2 ring-[#5BF527] transition-all" />
                    </div>
                 </div>

                 {/* পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                       <label className="text-[9px] font-black uppercase text-gray-400 ml-4 tracking-widest">Password</label>
                       <div className="relative">
                          <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          <input type={showPass ? "text" : "password"} placeholder="••••••••" className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-14 pr-12 font-bold text-sm outline-none focus:ring-2 ring-[#5BF527] transition-all" />
                          <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black">
                             {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[9px] font-black uppercase text-gray-400 ml-4 tracking-widest">Confirm Password</label>
                       <div className="relative">
                          <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          <input type={showConfirmPass ? "text" : "password"} placeholder="••••••••" className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-14 pr-12 font-bold text-sm outline-none focus:ring-2 ring-[#5BF527] transition-all" />
                          <button type="button" onClick={() => setShowConfirmPass(!showConfirmPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black">
                             {showConfirmPass ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                       </div>
                    </div>
                 </div>

                 {/* টার্মস এন্ড কন্ডিশনস */}
                 <div className="flex items-center gap-3 px-2 pt-2">
                    <input type="checkbox" className="w-4 h-4 accent-[#5BF527]" />
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">
                       I agree to the <span className="text-black underline cursor-pointer">Terms & Conditions</span>
                    </p>
                 </div>

                 <button className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-[#5BF527] hover:text-black transition-all shadow-xl active:scale-95 group mt-4">
                    Create Account <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </form>

              {/* সোশ্যাল সাইন আপ */}
              <div className="mt-10">
                 <div className="relative mb-8 text-center">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                    <span className="relative bg-white px-4 text-[9px] uppercase font-black text-gray-400 tracking-widest">Fast Registration</span>
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

              <p className="mt-10 text-center text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                 Already a Member? <Link href="/login" className="text-[#5BF527] hover:underline font-black">Login Now</Link>
              </p>
           </div>
        </div>

      </motion.div>

    </main>
  );
};

export default RegisterPage;