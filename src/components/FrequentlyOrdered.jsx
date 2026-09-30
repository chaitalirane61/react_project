import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, ArrowRight, Check } from 'lucide-react';
import { frequentlyOrderedProducts } from '../data/mockData';

export default function FrequentlyOrdered({ onAddToCart }) {
  const [wishlist, setWishlist] = useState([]);
  const [addedMap, setAddedMap] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Frequently Ordered</h2>
          <p className="text-xs text-slate-500 mt-1">Popular medicines at the best prices</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <a href="#all" className="inline-flex items-center gap-1 text-xs font-bold text-[#0096da] hover:text-[#0082be] transition-colors ml-2">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Product Cards Grid - Fully Responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
        {frequentlyOrderedProducts.map((product) => {
          const isWishlisted = wishlist.includes(product.id);
          const isAdded = addedMap[product.id];

          return (
            <div 
              key={product.id}
              className="bg-white rounded-2xl border border-slate-100 p-3 sm:p-4 shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between group relative"
            >
              {/* Discount Tag */}
              <div className="absolute top-2.5 left-2.5 z-10 bg-orange-500 text-white text-[9px] sm:text-[10px] font-black px-1.5 py-0.5 rounded shadow-xs">
                {product.discount}
              </div>

              {/* Wishlist Icon */}
              <button 
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-2.5 right-2.5 z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/80 backdrop-blur-xs border border-slate-100 flex items-center justify-center shadow-xs hover:scale-110 transition-transform"
                title="Save to Wishlist"
              >
                <Heart className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-slate-400'}`} />
              </button>

              {/* Product Image */}
              <div className="w-full h-28 sm:h-32 rounded-xl bg-slate-50 mb-2.5 sm:mb-3 overflow-hidden flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full object-contain max-w-full"
                />
              </div>

              {/* Details */}
              <div className="space-y-1 mb-3">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block truncate">
                  {product.category}
                </span>
                <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight group-hover:text-[#0096da] transition-colors truncate">
                  {product.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium truncate">{product.manufacturer}</p>
                
                <div className="pt-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm sm:text-base font-black text-slate-900">₹{product.price}</span>
                    <span className="text-[10px] sm:text-xs text-slate-400 line-through">₹{product.mrp}</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 block">
                    Save ₹{product.save}
                  </span>
                </div>
              </div>

              {/* Add Button */}
              <button 
                onClick={() => handleAdd(product)}
                className={`w-full py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold border transition-all duration-200 flex items-center justify-center gap-1 ${
                  isAdded 
                    ? 'bg-emerald-600 text-white border-emerald-600' 
                    : 'bg-white hover:bg-[#0096da] text-[#0096da] hover:text-white border-[#0096da]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added</span>
                  </>
                ) : (
                  <span>Add to Cart</span>
                )}
              </button>

            </div>
          );
        })}
      </div>
    </section>
  );
}
