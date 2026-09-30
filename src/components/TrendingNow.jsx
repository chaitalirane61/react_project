import React, { useState } from 'react';
import { Flame, Star, Check } from 'lucide-react';

const trendingProductsList = [
  {
    id: 201,
    name: 'Omega-3 Fish Oil',
    brand: 'HealthKart',
    category: 'Supplements',
    tag: 'Trending',
    discount: '-30%',
    rating: 4.8,
    reviews: '2.3k',
    price: 349,
    mrp: 499,
    image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 202,
    name: 'Whey Protein 1kg',
    brand: 'MuscleBlaze',
    category: 'Supplements',
    tag: 'Best Seller',
    discount: '-33%',
    rating: 4.9,
    reviews: '5.7k',
    price: 799,
    mrp: 1199,
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 203,
    name: 'Glucometer Kit',
    brand: 'Accu-Chek',
    category: 'Diabetes',
    tag: 'New',
    discount: '-28%',
    rating: 4.7,
    reviews: '1.9k',
    price: 649,
    mrp: 899,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 204,
    name: 'Multivitamin 60s',
    brand: 'Centrum',
    category: 'Supplements',
    tag: 'Trending',
    discount: '-28%',
    rating: 4.8,
    reviews: '3.2k',
    price: 429,
    mrp: 599,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 205,
    name: 'Ashwagandha 500',
    brand: 'Himalaya',
    category: 'Supplements',
    tag: 'Popular',
    discount: '-24%',
    rating: 4.8,
    reviews: '4.1k',
    price: 189,
    mrp: 249,
    image: 'https://images.unsplash.com/photo-1608248597379-8acbf0c67485?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 206,
    name: 'BP Monitor Digital',
    brand: 'Omron',
    category: 'Devices',
    tag: 'Best Seller',
    discount: '-28%',
    rating: 4.9,
    reviews: '6.9k',
    price: 1299,
    mrp: 1799,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80'
  }
];

export default function TrendingNow({ onAddToCart }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [addedMap, setAddedMap] = useState({});

  const filters = ['All', 'Supplements', 'Devices', 'Skincare', 'Diabetes'];

  const filteredProducts = activeFilter === 'All' 
    ? trendingProductsList 
    : trendingProductsList.filter(p => p.category === activeFilter);

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedMap(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedMap(prev => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="offers">
      <div className="space-y-1 mb-6">
        <div className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 uppercase tracking-wider">
          <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
          <span>HOT RIGHT NOW</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Trending Now</h2>
        <p className="text-xs text-slate-500">Most purchased by customers like you this week</p>
      </div>

      {/* Responsive Tabs */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-colors shrink-0 ${
              activeFilter === filter
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Fully Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
        {filteredProducts.map((item) => {
          const isAdded = addedMap[item.id];
          return (
            <div 
              key={item.id}
              className="bg-white rounded-2xl border border-slate-100 p-3 sm:p-4 shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between group relative"
            >
              <div className="flex items-center justify-between z-10 mb-2">
                <span className="bg-orange-100 text-orange-700 text-[9px] sm:text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                  {item.tag}
                </span>
                <span className="bg-slate-100 text-slate-700 text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">
                  {item.discount}
                </span>
              </div>

              <div className="w-full h-28 sm:h-32 rounded-xl bg-slate-50 mb-2.5 sm:mb-3 overflow-hidden flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="h-full object-contain max-w-full"
                />
              </div>

              <div className="space-y-1 mb-3">
                <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight group-hover:text-[#0096da] transition-colors truncate">
                  {item.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium truncate">{item.brand}</p>
                
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-amber-500 pt-0.5">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{item.rating}</span>
                  <span className="text-slate-400 font-normal">({item.reviews})</span>
                </div>

                <div className="pt-1 flex items-baseline gap-1">
                  <span className="text-sm sm:text-base font-black text-slate-900">₹{item.price}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 line-through">₹{item.mrp}</span>
                </div>
              </div>

              <button 
                onClick={() => handleAdd(item)}
                className={`w-full py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1 ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#0096da] hover:bg-[#0082be] text-white shadow-xs'
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
