import React, { useState } from 'react';
import { RefreshCw, CheckCircle2, ShieldCheck, ArrowRight, Zap, Pill } from 'lucide-react';

const genericItems = [
  {
    id: 'azithromycin',
    label: 'Azithromycin 500mg',
    brandName: 'Azithral 500',
    brandSalt: 'Azithromycin 500mg',
    brandPharma: 'Alembic',
    brandPrice: 132,
    genericName: 'Azithromycin 500',
    genericSalt: 'Azithromycin 500mg',
    genericPharma: 'DavaGen',
    genericPrice: 38,
    savingsPercent: 71,
    savingsAmount: 94
  },
  {
    id: 'atorvastatin',
    label: 'Atorvastatin 10mg',
    brandName: 'Atorva 10',
    brandSalt: 'Atorvastatin 10mg',
    brandPharma: 'Zydus',
    brandPrice: 145,
    genericName: 'Atorvastatin 10',
    genericSalt: 'Atorvastatin 10mg',
    genericPharma: 'DavaGen',
    genericPrice: 42,
    savingsPercent: 71,
    savingsAmount: 103
  },
  {
    id: 'pantoprazole',
    label: 'Pantoprazole 40mg',
    brandName: 'Pantocid 40',
    brandSalt: 'Pantoprazole 40mg',
    brandPharma: 'Sun Pharma',
    brandPrice: 160,
    genericName: 'Pantoprazole 40',
    genericSalt: 'Pantoprazole 40mg',
    genericPharma: 'DavaGen',
    genericPrice: 45,
    savingsPercent: 72,
    savingsAmount: 115
  },
  {
    id: 'metformin',
    label: 'Metformin 500mg',
    brandName: 'Glycomet 500',
    brandSalt: 'Metformin 500mg',
    brandPharma: 'USV',
    brandPrice: 68,
    genericName: 'Metformin 500',
    genericSalt: 'Metformin 500mg',
    genericPharma: 'DavaGen',
    genericPrice: 18,
    savingsPercent: 73,
    savingsAmount: 50
  }
];

export default function GenericAlternative({ onSelectGeneric }) {
  const [activeId, setActiveId] = useState('azithromycin');
  const [switched, setSwitched] = useState(false);

  const activeItem = genericItems.find((item) => item.id === activeId) || genericItems[0];

  const handleSwitch = () => {
    setSwitched(true);
    if (onSelectGeneric) onSelectGeneric(activeItem);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white rounded-3xl border border-emerald-100 p-6 sm:p-8 shadow-xl">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-100 pb-6">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Save with a Generic Alternative
              </h3>
              <p className="text-xs text-slate-500 font-medium">Same salt composition – verified lower price</p>
            </div>
          </div>

          {/* Selector Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {genericItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveId(item.id);
                  setSwitched(false);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeId === item.id
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-6">
          
          {/* Left Card: Brand Option */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">YOU SELECTED</span>
                <span className="bg-slate-200 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded">Brand</span>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Pill className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base">{activeItem.brandName}</h4>
                  <p className="text-xs text-slate-500">{activeItem.brandSalt}</p>
                  <p className="text-[11px] text-slate-400 font-medium">{activeItem.brandPharma}</p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">PRICE PER STRIP</span>
              <div className="text-3xl font-black text-slate-900">₹{activeItem.brandPrice}</div>
              
              {/* Cost bar */}
              <div className="mt-3">
                <div className="flex justify-between text-[10px] text-slate-500 font-bold mb-1">
                  <span>Cost</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-slate-400 h-full w-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Generic Option (RECOMMENDED) */}
          <div className="bg-emerald-50/50 rounded-2xl p-6 border-2 border-emerald-400 flex flex-col justify-between relative shadow-md">
            <div className="absolute -top-3 right-6 bg-emerald-600 text-white text-[10px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              RECOMMENDED
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">GENERIC OPTION</span>
                <span className="bg-emerald-200 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">DavaGen</span>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Pill className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base">{activeItem.genericName}</h4>
                  <p className="text-xs text-emerald-700 font-medium">{activeItem.genericSalt}</p>
                  <p className="text-[11px] text-emerald-600 font-bold">{activeItem.genericPharma}</p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold text-emerald-700 uppercase">PRICE PER STRIP</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-emerald-700">₹{activeItem.genericPrice}</span>
                <span className="text-sm text-slate-400 line-through">₹{activeItem.brandPrice}</span>
                <span className="bg-emerald-100 text-emerald-800 font-black text-xs px-2 py-0.5 rounded-md">
                  -{activeItem.savingsPercent}%
                </span>
              </div>
              
              {/* Cost bar */}
              <div className="mt-3">
                <div className="flex justify-between text-[10px] text-emerald-700 font-bold mb-1">
                  <span>Cost</span>
                  <span>Only {100 - activeItem.savingsPercent}% of brand</span>
                </div>
                <div className="w-full bg-emerald-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full" style={{ width: `${100 - activeItem.savingsPercent}%` }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Savings Action Banner Bar */}
        <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <span className="text-sm font-black text-slate-900">
                You save on this item: <strong className="text-emerald-700">₹{activeItem.savingsAmount}</strong> ({activeItem.savingsPercent}% off)
              </span>
              <p className="text-[11px] text-slate-500">Same salt composition and strength per CDSCO guidelines.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => setSwitched(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-white hover:bg-slate-100 border border-slate-200"
            >
              Keep original
            </button>
            <button 
              onClick={handleSwitch}
              className="px-5 py-2.5 rounded-xl text-xs font-black text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-colors flex items-center gap-1.5"
            >
              {switched ? 'Switched to Generic! ✓' : 'Switch to Generic'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
