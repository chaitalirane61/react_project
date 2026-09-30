import React from 'react';
import { ShieldCheck, Award, Lock, RotateCcw, CheckCircle } from 'lucide-react';

const trustItems = [
  {
    title: '100% Genuine Medicines',
    desc: 'Every product is sourced from licensed manufacturers. FSSAI verified batch by batch.',
    icon: CheckCircle,
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    title: 'Licensed Pharmacy',
    desc: 'Government registered, FSSAI certified. Our pharmacists verify every prescription.',
    icon: Award,
    color: 'text-blue-600 bg-blue-50'
  },
  {
    title: 'Secure Payments',
    desc: '256-bit SSL encryption. All payment methods secured. PCI DSS compliant gateway.',
    icon: Lock,
    color: 'text-purple-600 bg-purple-50'
  },
  {
    title: 'Easy Returns',
    desc: 'Hassle-free return policy. Full refund for any unsealed product within 7 days.',
    icon: RotateCcw,
    color: 'text-amber-600 bg-amber-50'
  },
  {
    title: 'Verified Suppliers',
    desc: 'We work only with authorised distributors. Every supply chain link is authenticated.',
    icon: ShieldCheck,
    color: 'text-teal-600 bg-teal-50'
  }
];

export default function TrustAndSafety() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">TRUST & SAFETY</span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Your health is our responsibility
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {trustItems.map((item) => {
          const IconComp = item.icon;
          return (
            <div 
              key={item.title}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-between"
            >
              <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4`}>
                <IconComp className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-slate-900 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
