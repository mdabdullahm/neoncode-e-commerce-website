"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, MessageSquare, 
  Facebook, Instagram, Twitter, Clock, Zap 
} from 'lucide-react';

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] pb-20">
      
      {/* ১. হিরো সেকশন - বোল্ড টাইটেল */}
      <section className="px-4 py-8 md:px-12">
        <div className="bg-black rounded-[4rem] p-10 md:p-24 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5BF527]/10 rounded-full blur-[150px]"></div>
          
          <div className="relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#5BF527] font-black text-[10px] uppercase tracking-[0.6em] mb-6 block"
            >
              Get In Touch With Us
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter"
            >
              LET'S <span className="text-[#5BF527]">TALK</span>
            </motion.h1>
            <p className="text-gray-400 mt-10 max-w-xl mx-auto font-medium leading-relaxed uppercase tracking-widest text-[10px] md:text-xs">
              আপনার যেকোনো প্রশ্ন, অভিযোগ বা পরামর্শের জন্য আমাদের মেসেজ দিন। আমরা খুব দ্রুত আপনার সাথে যোগাযোগ করবো।
            </p>
          </div>
        </div>
      </section>

      {/* ২. কন্টাক্ট গ্রিড - ফর্ম এবং ইনফো */}
      <section className="px-4 md:px-12 mt-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* কন্টাক্ট ফর্ম (বাম পাশ) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-[1.5] bg-white rounded-[3.5rem] p-8 md:p-16 shadow-2xl border border-white/50"
          >
            <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-10 flex items-center gap-4">
               <MessageSquare className="text-[#5BF527]" size={32} /> Send Us A Message
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Full Name</label>
                   <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 ring-[#5BF527] font-bold outline-none" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Email Address</label>
                   <input type="email" placeholder="hello@example.com" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 ring-[#5BF527] font-bold outline-none" />
                </div>
              </div>
              
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Subject</label>
                 <input type="text" placeholder="How can we help?" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 ring-[#5BF527] font-bold outline-none" />
              </div>

              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase text-gray-400 ml-4">Message</label>
                 <textarea rows="5" placeholder="Write your message here..." className="w-full bg-gray-50 border-none rounded-[2rem] p-6 focus:ring-2 ring-[#5BF527] font-bold outline-none resize-none"></textarea>
              </div>

              <button className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-[#5BF527] hover:text-black transition-all shadow-xl active:scale-95 group">
                 Send Signal <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* কন্টাক্ট ইনফরমেশন (ডান পাশ) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-6"
          >
            {/* ৩টি কন্টাক্ট কার্ড */}
            <div className="bg-black text-white p-10 rounded-[3rem] shadow-2xl border border-white/5 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-[#5BF527]/10 rounded-full blur-2xl"></div>
               <Phone className="text-[#5BF527] mb-6" size={32} />
               <h3 className="font-black text-xl uppercase tracking-widest mb-2">Call Us</h3>
               <p className="text-gray-400 font-bold text-sm">+880 17XX XXXXXX</p>
               <p className="text-gray-400 font-bold text-sm">+880 18XX XXXXXX</p>
            </div>

            <div className="bg-white/30 backdrop-blur-xl p-10 rounded-[3rem] border border-white/50 shadow-xl group hover:bg-white transition-all">
               <Mail size={32} className="text-black mb-6" />
               <h3 className="font-black text-xl uppercase tracking-widest mb-2 text-black">Email Us</h3>
               <p className="text-black/60 font-bold text-sm">support@neoncode.com</p>
               <p className="text-black/60 font-bold text-sm">info@neoncode.com</p>
            </div>

            <div className="bg-black text-white p-10 rounded-[3rem] shadow-2xl border border-white/5 relative overflow-hidden">
               <MapPin className="text-[#5BF527] mb-6" size={32} />
               <h3 className="font-black text-xl uppercase tracking-widest mb-2">Visit Us</h3>
               <p className="text-gray-400 font-bold text-sm leading-relaxed">
                  Level 4, Neon Tower,<br />
                  Banani, Dhaka-1213,<br />
                  Bangladesh.
               </p>
            </div>

            {/* সাপোর্ট টাইম কার্ড */}
            <div className="bg-[#5BF527] text-black p-8 rounded-[2.5rem] shadow-xl flex items-center gap-5">
               <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#5BF527]">
                  <Clock size={24} />
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase">Support Hours</p>
                  <p className="font-bold text-sm">Sat - Thu: 10AM - 8PM</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ৩. সোশ্যাল মিডিয়া কানেক্ট */}
      <section className="px-4 md:px-12 mt-24 text-center">
         <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-10">Follow The <span className="text-white">Pulse</span></h2>
         <div className="flex justify-center gap-6">
            {[
              { icon: <Facebook />, link: "#", color: "hover:bg-blue-600" },
              { icon: <Instagram />, link: "#", color: "hover:bg-pink-600" },
              { icon: <Twitter />, link: "#", color: "hover:bg-sky-500" },
              { icon: <Zap />, link: "#", color: "hover:bg-yellow-500" },
            ].map((social, i) => (
              <motion.a 
                key={i}
                whileHover={{ y: -10, scale: 1.1 }}
                href={social.link}
                className={`w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-lg transition-all ${social.color} hover:text-white text-black`}
              >
                {social.icon}
              </motion.a>
            ))}
         </div>
      </section>

    </main>
  );
};

export default ContactPage;