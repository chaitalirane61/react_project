import React from 'react';
import { ShieldCheck, IndianRupee, PiggyBank, Truck, ArrowRight } from 'lucide-react';

export default function HealthcareBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative bg-gradient-to-br from-[#ebf8ff] via-[#f0fdf4]/50 to-white rounded-3xl p-6 sm:p-10 border border-blue-100 shadow-xl overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-slate-900">Dava<span className="text-[#0b92d8]">Day</span></span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Healthcare <span className="text-[#0b92d8]">Made</span> <span className="text-orange-500">Simple</span>
            </h2>

            <p className="text-sm text-slate-600 font-medium max-w-lg">
              Your trusted online pharmacy for genuine medicines, delivered safely to your doorstep.
            </p>

            {/* 4 Value Proposition Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0b92d8] flex items-center justify-center mx-auto mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs">Trust</h4>
                <p className="text-[10px] text-slate-400 font-medium mt-0.5">Verified medicines</p>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto mb-2">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs">Affordability</h4>
                <p className="text-[10px] text-slate-400 font-medium mt-0.5">Fair, honest pricing</p>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                  <PiggyBank className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs">Savings</h4>
                <p className="text-[10px] text-slate-400 font-medium mt-0.5">Big on health, light cost</p>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-2">
                  <Truck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs">Convenience</h4>
                <p className="text-[10px] text-slate-400 font-medium mt-0.5">Fast & easy delivery</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-7 py-3 rounded-full inline-flex items-center gap-2 shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5">
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Side: Delivery Agent & App Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&auto=format&fit=crop&q=80" 
                  alt="DavaDay Delivery Agent" 
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Mobile Phone Mockup Overlay */}
              <div className="absolute -bottom-6 -right-4 w-44 bg-white rounded-2xl shadow-2xl p-3 border-2 border-slate-100 transform rotate-3">
                <div className="space-y-2 text-[10px]">
                  <div className="flex items-center justify-between text-[#0b92d8] font-bold">
                    <span>Quality Medicines</span>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-slate-700">
                    <p className="font-bold text-[9px]">Trust</p>
                    <p className="text-[8px] text-slate-500">Verified medicines</p>
                  </div>
                  <div className="bg-emerald-50 p-2 rounded-lg text-emerald-700">
                    <p className="font-bold text-[9px]">Your Health, Our Priority</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
