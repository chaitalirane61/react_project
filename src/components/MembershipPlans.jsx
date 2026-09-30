import React from 'react';
import { Crown, CheckCircle2, Star } from 'lucide-react';

export default function MembershipPlans() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 bg-blue-50 text-[#0b92d8] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Crown className="w-4 h-4 text-[#0b92d8]" />
          <span>MEMBERSHIP</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Unlock Better Healthcare Savings
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          Join Dava Day Care Plan and enjoy exclusive pricing, priority healthcare services, faster delivery, and loyalty rewards – all in one membership.
        </p>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        
        {/* Plan 1: BASIC */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">BASIC</span>
              <p className="text-xs text-slate-500 font-medium mt-1">Essential healthcare savings</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">₹299</span>
                <span className="text-xs font-bold text-slate-400">/month</span>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-600 font-medium border-t border-slate-100 pt-6 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Auto Refill</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Priority Reminders</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Free Delivery above ₹500</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>5% Extra Savings on Generics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Email Support</span>
              </li>
            </ul>
          </div>

          <button className="w-full py-3 rounded-2xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors">
            Get Started
          </button>
        </div>

        {/* Plan 2: PREMIUM (Most Popular) */}
        <div className="bg-white rounded-3xl border-2 border-[#0b92d8] p-8 shadow-2xl relative flex flex-col justify-between transform md:-translate-y-2">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0b92d8] text-white text-[11px] font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-white" />
            <span>Most Popular</span>
          </div>

          <div>
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#0b92d8] uppercase tracking-widest">PREMIUM</span>
              <p className="text-xs text-slate-500 font-medium mt-1">Everything you need, unlocked</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-slate-900">₹599</span>
                <span className="text-xs font-bold text-slate-400">/month</span>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-700 font-semibold border-t border-slate-100 pt-6 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0b92d8] shrink-0" />
                <span>Everything in Basic</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0b92d8] shrink-0" />
                <span>Locked Medicine Prices</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0b92d8] shrink-0" />
                <span>Free Delivery on Every Order</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0b92d8] shrink-0" />
                <span>15% Extra Savings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0b92d8] shrink-0" />
                <span>2x Loyalty Rewards</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0b92d8] shrink-0" />
                <span>Priority Customer Support</span>
              </li>
            </ul>
          </div>

          <button className="w-full py-3.5 rounded-2xl text-xs font-extrabold text-white bg-[#0b92d8] hover:bg-[#0877b0] shadow-lg shadow-blue-500/25 transition-all">
            Subscribe Now
          </button>
        </div>

        {/* Plan 3: ANNUAL */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative">
          <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-0.5 rounded-md">
            Save ₹2,189
          </div>

          <div>
            <div className="mb-4">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">ANNUAL</span>
              <p className="text-xs text-slate-500 font-medium mt-1">Best value for families</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">₹4,999</span>
                <span className="text-xs font-bold text-slate-400">/year</span>
              </div>
              <span className="text-[10px] font-medium text-slate-400 block mt-0.5">Billed annually (₹417/mo)</span>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-600 font-medium border-t border-slate-100 pt-6 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Everything in Premium</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Annual Health Report</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Priority Lab Test Booking</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Dedicated Health Manager</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Family Sharing (3 Members)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Exclusive Health Events</span>
              </li>
            </ul>
          </div>

          <button className="w-full py-3 rounded-2xl text-xs font-extrabold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md">
            Choose Annual Plan
          </button>
        </div>

      </div>
    </section>
  );
}
