import React from 'react';
import { Pill, Heart, Baby, Sparkles, ShieldCheck, Activity, ArrowRight, Zap } from 'lucide-react';
import { categories } from '../data/mockData';

const iconMap = {
  Pill: Pill,
  Heart: Heart,
  Baby: Baby,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Activity: Activity
};

export default function PopularCategories({ onSelectCategory }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="medicines">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b92d8] uppercase tracking-wider mb-1">
            <Zap className="w-3.5 h-3.5 fill-[#0b92d8]" />
            <span>BROWSE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Popular Categories</h2>
          <p className="text-xs text-slate-500 mt-1">Everything you need, neatly organised</p>
        </div>

        <a href="#all-categories" className="inline-flex items-center gap-1 text-xs font-bold text-[#0b92d8] hover:text-[#0877b0] transition-colors">
          <span>See all</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Grid of 6 Category Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => {
          const IconComponent = iconMap[cat.icon] || Pill;
          return (
            <div 
              key={cat.id}
              onClick={() => onSelectCategory && onSelectCategory(cat.id)}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 text-center cursor-pointer flex flex-col items-center justify-between group"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl ${cat.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <IconComponent className={`w-7 h-7 ${cat.color.split(' ')[1]}`} />
              </div>

              {/* Text Info */}
              <div className="space-y-1 w-full">
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#0b92d8] transition-colors">{cat.name}</h3>
                <p className="text-[11px] font-semibold text-slate-400">{cat.count}</p>
                <p className="text-[10px] text-slate-500 border-t border-slate-100 pt-2 mt-2">{cat.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
