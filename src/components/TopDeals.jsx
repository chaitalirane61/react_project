import React from 'react';
import { Gift, ArrowRight, Pill, Activity, Sparkles, HeartPulse } from 'lucide-react';

const deals = [
  {
    id: 1,
    title: 'Fever Essentials',
    discount: 'Up to 30% off',
    subtitle: 'Paracetamol, Dolo & more',
    tags: ['Dolo 650', 'Crocin', 'Combiflam'],
    buttonBg: 'bg-blue-600 hover:bg-blue-700',
    badgeBg: 'bg-blue-100 text-blue-800',
    icon: Pill,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Diabetes Care',
    discount: 'Up to 25% off',
    subtitle: 'Monitors, strips & medicines',
    tags: ['Metformin', 'Glucometer', 'Test Strips'],
    buttonBg: 'bg-emerald-600 hover:bg-emerald-700',
    badgeBg: 'bg-emerald-100 text-emerald-800',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Skin & Hair',
    discount: 'Up to 40% off',
    subtitle: 'Dermatologist recommended',
    tags: ['Minoxidil', 'SPF 50', 'Biotin'],
    buttonBg: 'bg-pink-600 hover:bg-pink-700',
    badgeBg: 'bg-pink-100 text-pink-800',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1608248597379-8acbf0c67485?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Vitamin Store',
    discount: 'Up to 35% off',
    subtitle: 'D3, B12, Omega-3 & more',
    tags: ['Vitamin D3', 'B-Complex', 'Zinc'],
    buttonBg: 'bg-orange-500 hover:bg-orange-600',
    badgeBg: 'bg-orange-100 text-orange-800',
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1550572017-edf7b4700d66?w=600&auto=format&fit=crop&q=80'
  }
];

export default function TopDeals() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">
            <Gift className="w-4 h-4 text-purple-600" />
            <span>EXCLUSIVE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Top Deals</h2>
          <p className="text-xs text-slate-500 mt-1">Unlock your best healthcare savings today</p>
        </div>

        <a href="#all-deals" className="inline-flex items-center gap-1 text-xs font-bold text-[#0b92d8] hover:text-[#0877b0] transition-colors">
          <span>All deals</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Grid of 4 Deal Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal) => {
          const IconComp = deal.icon;
          return (
            <div 
              key={deal.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Image Banner Header */}
              <div className="relative h-44 bg-slate-100 overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Discount Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black shadow-md text-slate-900">
                  {deal.discount}
                </div>

                {/* Deal Title on Banner */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white">
                  <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <IconComp className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-extrabold text-base tracking-tight">{deal.title}</h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-3">{deal.subtitle}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {deal.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-2.5 rounded-xl text-xs font-bold text-white shadow-sm flex items-center justify-center gap-1.5 transition-colors ${deal.buttonBg}`}>
                  <span>Shop Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
