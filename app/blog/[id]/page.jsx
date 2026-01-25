"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, Clock, Share2, 
  Facebook, Twitter, Linkedin, Bookmark, MessageCircle 
} from 'lucide-react';

// ১. ব্লগের পূর্ণাঙ্গ ডাটাবেস (ID অনুযায়ী সঠিক ডাটা দেখানোর জন্য)
const blogPosts = [
  { 
    id: "b1", 
    title: "স্মার্টফোন কেনার আগে ৫টি বিষয় অবশ্যই মাথায় রাখুন", 
    category: "Tech", 
    date: "Oct 12, 2024", 
    readTime: "5 min read", 
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600",
    content: `
      বর্তমান বাজারে অসংখ্য স্মার্টফোনের ভিড়ে আপনার জন্য সঠিকটি বেছে নেওয়া বেশ কঠিন কাজ। একটি স্মার্টফোন শুধুমাত্র কল করা বা মেসেজ করার যন্ত্র নয়, এটি এখন আমাদের জীবনের অবিচ্ছেদ্য অংশ। তাই কেনার আগে নিচের ৫টি বিষয় অবশ্যই দেখে নিন:
      
      ১. ডিসপ্লে কোয়ালিটি: আপনি যদি প্রচুর মুভি দেখেন বা গেম খেলেন, তবে অবশ্যই AMOLED বা OLED ডিসপ্লে প্যানেল বেছে নিন।
      ২. প্রসেসর: পারফরম্যান্সের জন্য প্রসেসর সবচেয়ে গুরুত্বপূর্ণ। গেমিং এর জন্য স্ন্যাপড্রাগন ৮ সিরিজ বা অ্যাপলের এ সিরিজ প্রসেসর সেরা।
      ৩. ক্যামেরা সেন্সর: শুধুমাত্র মেগাপিক্সেল দেখে ক্যামেরা বিচার করবেন না। লেন্সের অ্যাপারচার এবং সেন্সর সাইজ দেখে নিন।
      ৪. ব্যাটারি ও চার্জিং: সারাদিন ব্যবহারের জন্য অন্তত ৫০০০ মিলিঅ্যাম্পিয়ার ব্যাটারি এবং ফাস্ট চার্জিং সুবিধা থাকা জরুরি।
      ৫. সফটওয়্যার আপডেট: ফোনটি কতদিন সিকিউরিটি এবং ওএস আপডেট পাবে তা নিশ্চিত হয়ে নিন।
    `
  },
  { 
    id: "b2", 
    title: "শীতকালে ত্বকের যত্ন নেওয়ার সেরা ঘরোয়া উপায়", 
    category: "Beauty", 
    date: "Oct 15, 2024", 
    readTime: "4 min read", 
    img: "https://i.ibb.co.com/S7mnkkXx/front-view-young-beautiful-female-pink-bathrobe-holding-spray-plant.jpg",
    content: `
      শীতের শুষ্ক আবহাওয়ায় আমাদের ত্বক তার স্বাভাবিক আর্দ্রতা হারিয়ে ফেলে। এই সময়ে ত্বকের সতেজতা ধরে রাখতে কিছু প্রাকৃতিক উপায় অবলম্বন করা যেতে পারে:
      
      ১. পর্যাপ্ত পানি পান: বাইরে ঠান্ডা থাকলেও শরীরের ভেতর থেকে হাইড্রেট থাকা জরুরি। দিনে অন্তত ৩ লিটার পানি পান করুন।
      ২. নারিকেল তেলের ব্যবহার: গোসলের আগে বা পরে খাঁটি নারিকেল তেল মালিশ করলে ত্বক কোমল থাকে।
      ৩. মধুর ফেসপ্যাক: মধু এবং কাঁচা দুধ মিশিয়ে মুখে লাগালে ত্বকের উজ্জ্বলতা বাড়ে।
      ৪. গরম পানি এড়িয়ে চলুন: খুব বেশি গরম পানিতে মুখ ধুলে ত্বকের ন্যাচারাল অয়েল নষ্ট হয়ে যায়, হালকা কুসুম গরম পানি ব্যবহার করুন।
    `
  },
  // ... (বাকি পোস্টগুলো আগের মেইন পেজ থেকে আইডি অনুযায়ী কপি করে নেবে)
];

export default function BlogDetail() {
  const { id } = useParams();
  const router = useRouter();

  // সঠিক ব্লগ পোস্টটি খুঁজে বের করা
  const post = blogPosts.find((p) => p.id === id) || blogPosts[0];

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] py-8 px-4 md:px-12">
      
      {/* ব্যাক বাটন */}
      <div className="max-w-4xl mx-auto mb-8">
        <button 
          onClick={() => router.back()} 
          className="inline-flex items-center gap-2 text-black font-black text-[10px] uppercase tracking-widest hover:translate-x-[-5px] transition-transform"
        >
          <ArrowLeft size={16} /> Back to Knowledge Hub
        </button>
      </div>

      {/* মেইন আর্টিকেল কন্টেইনার */}
      <article className="max-w-4xl mx-auto bg-white rounded-[3.5rem] shadow-2xl border border-white/50 overflow-hidden">
        
        {/* ফিচার ইমেজ */}
        <div className="h-[300px] md:h-[500px] w-full relative overflow-hidden">
           <motion.img 
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 1.5 }}
             src={post.img} 
             alt={post.title} 
             className="w-full h-full object-cover"
           />
           <div className="absolute top-8 left-8">
              <span className="bg-[#5BF527] text-black px-6 py-2 rounded-full font-black text-[9px] uppercase tracking-widest shadow-xl">
                 {post.category} Insight
              </span>
           </div>
        </div>

        {/* কন্টেন্ট এরিয়া */}
        <div className="p-8 md:p-16">
          
          {/* মেটা ইনফো */}
          <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-100 pb-8">
             <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full"><Calendar size={14} className="text-[#5BF527]"/> {post.date}</span>
             <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full"><Clock size={14} className="text-[#5BF527]"/> {post.readTime}</span>
             <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full"><MessageCircle size={14} className="text-[#5BF527]"/> 12 Comments</span>
          </div>

          {/* টাইটেল */}
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 uppercase leading-tight tracking-tighter mb-10">
            {post.title}
          </h1>

          {/* ব্লগের মূল লেখা (Body Text) */}
          <div className="text-gray-600 text-base md:text-lg font-medium leading-relaxed space-y-6">
             {post.content.split('\n').map((para, index) => (
               para.trim() && <p key={index}>{para.trim()}</p>
             ))}
          </div>

          {/* সোশ্যাল শেয়ারিং সেকশন */}
          <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-4">
                <p className="font-black text-[10px] uppercase text-gray-400 tracking-widest">Share this story:</p>
                <div className="flex gap-3">
                   <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-blue-600 hover:bg-[#5BF527] hover:text-black transition-all shadow-sm"><Facebook size={18}/></button>
                   <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-blue-400 hover:bg-[#5BF527] hover:text-black transition-all shadow-sm"><Twitter size={18}/></button>
                   <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-blue-800 hover:bg-[#5BF527] hover:text-black transition-all shadow-sm"><Linkedin size={18}/></button>
                </div>
             </div>
             <button className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#5BF527] hover:text-black transition-all shadow-xl active:scale-95">
                <Bookmark size={14} /> Save for later
             </button>
          </div>
        </div>
      </article>

      {/* সাজেস্টেড পোস্ট সেকশন */}
      <section className="max-w-4xl mx-auto mt-24">
         <div className="flex items-center justify-between mb-10 px-2">
            <h2 className="text-3xl font-black text-black uppercase tracking-tighter">You May Also <span className="text-white italic">Read</span></h2>
            <Link href="/blog" className="text-[10px] font-black uppercase text-black/60 border-b-2 border-black/20 pb-1">All Posts</Link>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.filter(p => p.id !== id).slice(0, 2).map((item) => (
              <Link href={`/blog/${item.id}`} key={item.id} className="group">
                 <div className="bg-white/40 backdrop-blur-md p-4 rounded-[3rem] border border-white/50 hover:bg-white transition-all duration-500 shadow-lg flex items-center gap-6 group-hover:-translate-y-2">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                       <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <p className="text-[8px] font-black text-[#5BF527] uppercase tracking-widest mb-1">{item.category}</p>
                       <h3 className="font-black text-sm text-gray-900 uppercase leading-tight line-clamp-2 tracking-tight">{item.title}</h3>
                    </div>
                 </div>
              </Link>
            ))}
         </div>
      </section>

    </main>
  );
}