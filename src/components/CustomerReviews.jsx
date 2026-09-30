import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const reviewsList = [
  {
    id: 1,
    name: 'Priya Sharma',
    city: 'Mumbai',
    initials: 'PS',
    avatarBg: 'bg-sky-500 text-white',
    quote: '"Dava Day has been a lifesaver. My parents get their regular medications delivered within hours at prices that are nearly half of what I used to pay at a local pharmacy. The peace of mind knowing these are genuine medicines is priceless."'
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    city: 'Bangalore',
    initials: 'RM',
    avatarBg: 'bg-purple-500 text-white',
    quote: '"Super impressed with the service quality. Uploaded my prescription and everything was sorted within minutes. The app is incredibly intuitive and the delivery tracking is real-time. Finally a pharmacy platform that works."'
  },
  {
    id: 3,
    name: 'Anita Krishnan',
    city: 'Chennai',
    initials: 'AK',
    avatarBg: 'bg-amber-500 text-white',
    quote: '"The generic alternatives feature is brilliant. It saved me over ₹4,000 on my monthly medicines alone. The quality is identical — same active ingredients — just without the expensive brand name markup."'
  },
  {
    id: 4,
    name: 'Vikram Patel',
    city: 'Delhi',
    initials: 'VP',
    avatarBg: 'bg-emerald-500 text-white',
    quote: '"From prescription upload to delivery tracking, everything works seamlessly. Customer support is exceptionally responsive. Dava Day is the only pharmacy app I recommend to my entire family and colleagues."'
  }
];

export default function CustomerReviews() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header */}
      <div className="text-center max-w-md mx-auto mb-10 space-y-2">
        <span className="text-xs font-black text-[#0b92d8] uppercase tracking-widest">REVIEWS</span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">What Customers Say</h2>
        
        {/* Rating badge */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="font-extrabold text-slate-900 text-sm">4.9</span>
          <span className="text-slate-400 text-xs font-medium">· 50,000+ verified reviews</span>
        </div>
      </div>

      {/* Grid of 4 Testimonial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviewsList.map((item) => (
          <div 
            key={item.id}
            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* 5 Stars */}
              <div className="flex items-center text-amber-400 gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6 italic">
                {item.quote}
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
              <div className={`w-9 h-9 rounded-full ${item.avatarBg} font-bold text-xs flex items-center justify-center shrink-0`}>
                {item.initials}
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-xs">{item.name}</h4>
                <div className="flex items-center gap-1 text-[10px] text-slate-400">
                  <span>{item.city}</span>
                  <span>•</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
