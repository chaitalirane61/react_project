import React, { useState } from 'react';
import { Search, Link as LinkIcon, ChevronRight, ChevronDown, CheckCircle2, Clock } from 'lucide-react';
import DoctorGraphic from './DoctorGraphic';

export default function HeroSection({ onOpenUploadModal, onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <section className="relative w-full bg-[#e8f4fa] pt-6 sm:pt-8 overflow-hidden font-sans border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Search Bar Box */}
        <div className="max-w-3xl mx-auto mb-6 sm:mb-8 space-y-1.5">
          <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-800">
            <span className="text-[11px] sm:text-xs">What are you looking for?</span>
            <button 
              onClick={onOpenUploadModal}
              className="flex items-center gap-1 text-[#0096da] hover:underline font-extrabold uppercase tracking-wide text-[10px] sm:text-[11px]"
            >
              <span>UPLOAD NOW</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Responsive Search Input */}
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <Search className="absolute left-4 sm:left-5 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search medicines, vitamins..."
              className="w-full pl-10 sm:pl-12 pr-32 sm:pr-36 py-3 sm:py-3.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0096da] placeholder-slate-400 font-medium"
            />
            <button 
              type="submit"
              className="absolute right-1 sm:right-1.5 bg-[#0096da] hover:bg-[#0082be] text-white px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold shadow-xs transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end pt-2">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 pb-6 lg:pb-12 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#d4ebf7]/80 text-[#0096da] px-3.5 py-1.5 rounded-full text-xs font-bold">
              <LinkIcon className="w-3.5 h-3.5 text-[#0096da]" />
              <span>Licensed Online Pharmacy</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Say Hi👋 to Big Savings on Every Medicine
            </h1>

            {/* CTA Button */}
            <div className="pt-1">
              <button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-extrabold px-8 py-3 rounded-2xl text-sm shadow-md shadow-orange-500/20 transition-transform active:scale-95">
                Get App
              </button>
            </div>

            {/* Feature Checkmarks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5 pt-2 text-xs font-bold text-emerald-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Licensed Pharmacy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Genuine Products</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>2-4 Hour Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Doctor Half-Body Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative self-end w-full">
            <DoctorGraphic />
          </div>

        </div>

        {/* Bottom Explore Link */}
        <div className="py-4 flex flex-col items-center justify-center gap-1 text-[11px] font-bold text-[#0096da] cursor-pointer hover:opacity-80 transition-opacity">
          <ChevronDown className="w-4 h-4 text-[#0096da] animate-bounce" />
          <span className="tracking-widest uppercase">EXPLORE</span>
        </div>

      </div>
    </section>
  );
}
