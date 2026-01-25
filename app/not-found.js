"use client"; // এটি অবশ্যই থাকতে হবে কারণ আমরা motion ব্যবহার করছি

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wrench, MessageSquare, Globe, ArrowRight, Construction } from 'lucide-react';

// ফাংশনটি অবশ্যই 'export default' হতে হবে
export default function NotFound() {
    return (
        <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] flex items-center justify-center p-6">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl w-full bg-white rounded-[3.5rem] p-10 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-white/50 relative overflow-hidden text-center"
            >

                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#5BF527]/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/5 rounded-full blur-3xl"></div>

                <div className="relative mb-10">
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mx-auto shadow-2xl relative z-10"
                    >
                        <Construction size={48} className="text-[#5BF527]" />
                    </motion.div>
                    <div className="absolute inset-0 bg-[#5BF527] rounded-full blur-3xl opacity-20"></div>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter mb-6 leading-tight">
                    Development <br /> <span className="text-[#5BF527]">In Progress</span>
                </h1>

                <div className="space-y-4 mb-12">
                    <p className="text-gray-600 font-bold text-lg md:text-xl leading-relaxed">
                        NEONCODE এখনো এই সাইটের <span className="text-black underline">Development</span> এর কাজ চলমান রেখেছে।
                    </p>
                    <p className="text-gray-400 font-medium text-sm md:text-base uppercase tracking-widest leading-relaxed">
                        আপনার যদি Relevant কোন সাইটের প্রয়োজন হয়, তাহলে আপনি NEONCODE এর Development Team এর সাথে Contact করুন।
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="https://wa.me/8801344224787" className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#5BF527] hover:text-black transition-all shadow-xl active:scale-95 group">
                        <MessageSquare size={18} /> Contact Dev Team
                    </Link>

                    <a
                        href="https://wa.me/8801344224787?text=Hello%20NEONCODE%20Dev%20Team,%20আমি%20আপনাদের%20ওয়েবসাইট%20থেকে%20মেসেজ%20দিচ্ছি।%20আমার%20একটি%20প্রোজেক্ট%20নিয়ে%20কথা%20বলার%20ছিল।"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#5BF527] hover:text-black transition-all shadow-xl active:scale-95 group"
                    >
                        <MessageSquare size={18} /> Contact Dev Team
                    </a>
                </div>

                <div className="mt-16 pt-10 border-t border-gray-50 flex items-center justify-center gap-2 text-gray-300 font-black text-[10px] uppercase tracking-[0.4em]">
                    <Wrench size={14} /> System Under Maintenance
                </div>

            </motion.div>

        </main>
    );
}