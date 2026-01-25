"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Facebook, Instagram, Twitter, Youtube, Mail, 
  Phone, MapPin, Send, Zap, ShieldCheck, Truck, RotateCcw 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 rounded-t-[3.5rem] md:rounded-t-[5rem] overflow-hidden relative shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-white/5">
      
      {/* ১. ব্যাকগ্রাউন্ড ডেকোরেশন (Neon Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-[#5BF527] to-transparent opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5BF527]/5 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ২. নিউজলেটার সেকশন (Top Part) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-24 bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 backdrop-blur-xl">
           <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">
                Join The <span className="text-[#5BF527]">Neon</span> Circle
              </h2>
              <p className="text-gray-400 font-medium text-xs md:text-sm uppercase tracking-widest">নতুন কালেকশন এবং অফারের আপডেট পেতে ইমেইল দিন।</p>
           </div>
           <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input type="email" placeholder="YOUR EMAIL ADDRESS" className="bg-black/50 border border-white/10 rounded-2xl py-4 px-6 text-white text-xs font-bold outline-none focus:ring-2 ring-[#5BF527] w-full lg:w-80" />
              <button className="bg-[#5BF527] text-black px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
                 Join Now <Send size={14} />
              </button>
           </div>
        </div>

        {/* ৩. মেইন ফুটার গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* কলাম ১: ব্র্যান্ড ইনফো */}
          <div className="space-y-8 text-center md:text-left">
             <Link href="/" className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#5BF527]/30">
                   <img src="/neonlogo/neoncodelogo.jpg" alt="Logo" className="w-full h-full object-cover"/>
                </div>
                <div className="text-2xl font-black tracking-tighter uppercase">
                   NEON<span className="text-[#5BF527]">CODE</span>
                </div>
             </Link>
             <p className="text-gray-500 font-medium text-sm leading-relaxed">
                বাংলাদেশের প্রিমিয়াম ই-কমার্স ব্র্যান্ড। আমরা বিশ্বাস করি মডার্ন টেকনোলজি এবং আভিজাত্যের সমন্বয়ে আপনার লাইফস্টাইলকে আরও স্মার্ট করে তুলতে।
             </p>
             <div className="flex justify-center md:justify-start gap-4">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                  <Link key={i} href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#5BF527] hover:text-black transition-all">
                    <Icon size={18} />
                  </Link>
                ))}
             </div>
          </div>

          {/* কলাম ২: শপ ক্যাটাগরি */}
          <div className="text-center md:text-left">
             <h3 className="text-[#5BF527] font-black text-xs uppercase tracking-[0.3em] mb-8">Shop Collection</h3>
             <ul className="space-y-4 text-sm font-bold text-gray-400 uppercase tracking-widest">
                {["Mobile", "Watch", "Shoes", "Laptop", "Gadgets"].map((item) => (
                  <li key={item}><Link href={`/${item.toLowerCase()}`} className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 group"><Zap size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#5BF527]"/> {item}</Link></li>
                ))}
             </ul>
          </div>

          {/* কলাম ৩: কুইক লিংক */}
          <div className="text-center md:text-left">
             <h3 className="text-[#5BF527] font-black text-xs uppercase tracking-[0.3em] mb-8">Company</h3>
             <ul className="space-y-4 text-sm font-bold text-gray-400 uppercase tracking-widest">
                {["About Us", "Contact Us", "Blog", "Privacy Policy", "Terms"].map((item) => (
                   <li key={item}><Link href={`/${item.toLowerCase().replace(' ', '')}`} className="hover:text-white transition-colors">{item}</Link></li>
                ))}
             </ul>
          </div>

          {/* কলাম ৪: কন্টাক্ট ইনফো */}
          <div className="text-center md:text-left">
             <h3 className="text-[#5BF527] font-black text-xs uppercase tracking-[0.3em] mb-8">Contact Lab</h3>
             <div className="space-y-6">
                <div className="flex items-center justify-center md:justify-start gap-4 text-gray-400">
                   <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#5BF527]"><MapPin size={20}/></div>
                   <p className="text-[11px] font-bold uppercase leading-tight">Banani, Neon Tower <br/> Dhaka, Bangladesh</p>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4 text-gray-400">
                   <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#5BF527]"><Mail size={20}/></div>
                   <p className="text-[11px] font-bold uppercase">support@neoncode.com</p>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4 text-gray-400">
                   <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#5BF527]"><Phone size={20}/></div>
                   <p className="text-[11px] font-bold uppercase">+880 17XX XXXXXX</p>
                </div>
             </div>
          </div>

        </div>

        {/* ৪. ট্রাস্ট ব্যাজ সেকশন */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-12 border-y border-white/5 mb-12">
           <div className="flex flex-col items-center gap-3">
              <ShieldCheck className="text-[#5BF527]" size={24} />
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 text-center">100% Secure Payments</p>
           </div>
           <div className="flex flex-col items-center gap-3">
              <Truck className="text-[#5BF527]" size={24} />
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 text-center">Express Global Delivery</p>
           </div>
           <div className="flex flex-col items-center gap-3">
              <RotateCcw className="text-[#5BF527]" size={24} />
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 text-center">7 Days Easy Returns</p>
           </div>
           <div className="flex flex-col items-center gap-3">
              <Zap className="text-[#5BF527]" size={24} />
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 text-center">Official Brand Warranty</p>
           </div>
        </div>

        {/* ৫. কপিরাইট পার্ট */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
           <p>© 2026 NEONCODE STORE. ALL RIGHTS RESERVED.</p>
           <div className="flex gap-8">
              <p className="flex items-center gap-2">Designed by <span className="text-white">NEON LAB</span></p>
              <div className="flex gap-4">
                 <img src="https://img.icons8.com/color/48/visa.png" className="h-4 grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Visa"/>
                 <img src="https://img.icons8.com/color/48/mastercard.png" className="h-4 grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Mastercard"/>
                 <img src="https://img.icons8.com/color/48/paypal.png" className="h-4 grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Paypal"/>
              </div>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;