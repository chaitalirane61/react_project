import React from 'react';
import { ArrowRight, Tag, ShieldCheck, Heart, Sparkles, Truck } from 'lucide-react';

export default function PromoBanners() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="super-saver">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Banner 1: Super Saver */}
        <div className="relative bg-gradient-to-br from-[#eff6ff] to-[#fff7ed] rounded-3xl p-6 border border-blue-100 shadow-md flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="space-y-3 z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#0b92d8]">DavaDay</span>
              <span className="bg-orange-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">Limited Time</span>
            </div>
            <h3 className="text-2xl font-black text-orange-600">Super Saver</h3>
            <p className="text-xs font-medium text-slate-600">Biggest discounts on everyday medicines</p>
            
            <div className="inline-flex items-center gap-2 bg-white/90 border border-orange-200 px-3 py-1.5 rounded-full text-xs text-slate-700 font-bold">
              <Tag className="w-3.5 h-3.5 text-orange-500" />
              <span>Use code <strong className="text-orange-600">SAVE20</strong> | 20% OFF</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/60 z-10 space-y-2 text-[11px] font-medium text-slate-600">
            <div className="grid grid-cols-2 gap-1.5">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#0b92d8]" /> 100% Genuine</span>
              <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5 text-[#0b92d8]" /> Fast Delivery</span>
            </div>
          </div>

          {/* Decorative graphic background */}
          <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-orange-200/40 rounded-full blur-2xl group-hover:scale-125 transition-transform"></div>
        </div>

        {/* Banner 2: Cancer Care */}
        <div className="relative bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-3xl p-6 border border-blue-100 shadow-md flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="space-y-3 z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#0b92d8]">DavaDay Care</span>
              <span className="text-blue-500 bg-white/80 text-[10px] font-bold px-2 py-0.5 rounded-full">🎗️ Specialized Care</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
              Stronger Together, <br/><span className="text-[#0b92d8]">Against Cancer</span>
            </h3>
            <p className="text-xs text-slate-600">Compassionate care. Advanced treatment. Better outcomes.</p>

            <button className="bg-[#0b92d8] hover:bg-[#0877b0] text-white text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm transition-colors">
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-6 bg-[#0b92d8]/10 -mx-6 -mb-6 p-3 text-[11px] font-bold text-[#0b92d8] text-center border-t border-[#0b92d8]/20 z-10">
            Because Every Life Deserves The Best Care
          </div>
        </div>

        {/* Banner 3: Better Health Every Day */}
        <div className="relative bg-gradient-to-br from-white to-[#f0f9ff] rounded-3xl p-6 border border-slate-200 shadow-md flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="space-y-3 z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#0b92d8]">DavaDay</span>
              <span className="text-emerald-600 bg-emerald-50 text-[10px] font-bold px-2 py-0.5 rounded-full">Heart & Care</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
              Better Health, <br/><span className="text-[#0b92d8]">Every Day</span>
            </h3>
            <p className="text-xs text-slate-600">Your trusted partner for medicines & expert care.</p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm transition-colors">
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500 font-semibold z-10 pt-2 border-t border-slate-100">
            <span>✓ Genuine Medicines</span>
            <span>✓ Expert Advice</span>
          </div>
        </div>

      </div>
    </section>
  );
}
