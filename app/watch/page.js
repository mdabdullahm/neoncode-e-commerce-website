"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ১. ঘড়ির ডামি ডাটা
const watchProducts = [
    { id: 1, name: "Rolex Submariner Gold", price: "12,50,000", brand: "Rolex", type: "Analog", img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=400", badge: "Luxury" },
    { id: 2, name: "Apple Watch Series 9", price: "55,000", brand: "Apple", type: "Smart", img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=400", badge: "Top Tech" },
    { id: 3, name: "Casio G-Shock Black", price: "12,500", brand: "Casio", type: "Digital", img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=400", badge: "Durable" },
    { id: 4, name: "Fossil Heritage Leather", price: "18,500", brand: "Fossil", type: "Analog", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400", badge: "Classic" },
    { id: 5, name: "Samsung Galaxy Watch 6", price: "38,000", brand: "Samsung", type: "Smart", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=400", badge: "Trending" },
    { id: 6, name: "Seiko 5 Sports Automatic", price: "32,000", brand: "Seiko", type: "Analog", img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=400", badge: "Premium" },
];

const WatchPage = () => {
    const [filter, setFilter] = useState("All");

    return (
        <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] pb-20">

            {/* 2. Header Section */}
            <section className="px-4 py-8 md:px-12">
                <div className="bg-black rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#5BF527] rounded-full blur-[150px] opacity-20"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
                        <div className="text-center md:text-left">
                            <span className="text-[#5BF527] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Timeless Classics</span>
                            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase">
                                LUXURY <br /> <span className="text-[#5BF527] drop-shadow-[0_0_20px_rgba(91,245,39,0.5)]">WATCHES</span>
                            </h1>
                            <p className="text-gray-400 mt-6 max-w-sm font-medium italic">
                                "সময় আপনার, স্টাইল আমাদের।" সেরা সব ব্র্যান্ডের অরিজিনাল ঘড়ি এখন আপনার হাতের মুঠোয়।
                            </p>
                        </div>

                        <motion.div
                            initial={{ rotate: 10, y: 50 }}
                            animate={{ rotate: -10, y: 0 }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                            className="mt-12 md:mt-0"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400"
                                alt="Watch Banner"
                                className="w-64 md:w-80 drop-shadow-[0_35px_50px_rgba(91,245,39,0.3)]"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Filtering & Content */}
            <section className="px-4 md:px-12 mt-10">

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {["All", "Smart", "Analog", "Digital"].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-md ${filter === type ? 'bg-black text-[#5BF527]' : 'bg-white text-black hover:bg-black hover:text-white'}`}
                        >
                            {type} Watches
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {watchProducts
                        .filter(p => filter === "All" || p.type === filter)
                        .map((product) => (

                            /* ১. এখানে Link যোগ করুন এবং key-টি motion.div থেকে সরিয়ে Link-এ দিন */
                            <Link href={`/watch/${product.id}`} key={product.id} className="block">
                                <motion.div
                                    whileHover={{ y: -15 }}
                                    className="bg-white rounded-[3.5rem] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] group relative border border-white/50 h-full cursor-pointer"
                                >
                                    {/* Image Area */}
                                    <div className="relative h-72 bg-gray-50 rounded-[3rem] overflow-hidden flex items-center justify-center">
                                        <span className="absolute top-6 left-6 bg-black text-[#5BF527] px-4 py-1.5 rounded-full text-[9px] font-black uppercase z-20">
                                            {product.badge}
                                        </span>
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Buy Now Overlay */}
                                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center translate-y-full group-hover:translate-y-0">
                                            <span className="bg-[#5BF527] text-black px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-2xl">
                                                View Details 🛍️
                                            </span>
                                        </div>
                                    </div>

                                    {/* Info Area */}
                                    <div className="mt-8 px-4 text-center">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">{product.brand} • {product.type}</p>
                                        <h3 className="text-xl font-black text-gray-900 group-hover:text-[#5BF527] transition-colors uppercase leading-tight">
                                            {product.name}
                                        </h3>
                                        <div className="mt-4 flex flex-col items-center">
                                            <p className="text-2xl font-black text-black">৳{product.price}</p>
                                            <div className="h-1 w-10 bg-[#5BF527] mt-2 group-hover:w-20 transition-all duration-500"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                </div>

            </section>

            {/* 4. Quality Promise Section */}
            <section className="px-4 md:px-12 mt-20">
                <div className="bg-white/20 backdrop-blur-md rounded-[3rem] border border-white/30 p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center justify-between shadow-xl">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-black text-black uppercase">100% Original Products</h2>
                        <p className="text-sm font-bold text-black/60 mt-2">আমরা গ্যারান্টি দিচ্ছি প্রতিটি ঘড়ি সরাসরি অথরাইজড ডিলার থেকে সংগৃহীত।</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-black text-[#5BF527] px-6 py-4 rounded-2xl font-black text-[10px] uppercase">Official Warranty</div>
                        <div className="bg-white text-black px-6 py-4 rounded-2xl font-black text-[10px] uppercase shadow-lg">Easy Returns</div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default WatchPage;