import React, { useState } from 'react';
import { MapPin, ShoppingBag, Sparkles, Zap, Menu, X } from 'lucide-react';

export default function Header({ cartCount, onOpenCart, onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useState('Mumbai - 400001');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white font-sans border-b border-slate-100 shadow-xs">
      
      {/* Top Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div className="flex items-center -space-x-1.5">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-3 sm:border-4 border-[#0096da] bg-white shadow-xs"></div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-3 sm:border-4 border-orange-500 bg-white shadow-xs"></div>
          </div>
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
            Dava<span className="text-slate-900">Day</span>
          </span>
        </a>

        {/* Right: Location Pill + User Avatar 'R' + Cart Icon */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          
          {/* Location Selector (Positioned right next to 'R' avatar) */}
          <div 
            onClick={() => setIsLocationModalOpen(true)}
            className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full cursor-pointer transition-colors shadow-2xs"
          >
            <MapPin className="w-3.5 h-3.5 text-[#0096da] shrink-0" />
            <div className="text-left">
              <span className="block text-[9px] text-slate-400 font-medium leading-none">Deliver to</span>
              <span className="font-bold text-slate-800 text-[11px] sm:text-xs">{location}</span>
            </div>
          </div>

          {/* User Profile Avatar 'R' */}
          <button 
            onClick={onOpenAuth}
            className="w-8 h-8 rounded-full bg-[#0096da] text-white font-bold text-xs flex items-center justify-center shadow-xs hover:bg-[#0082be] transition-colors shrink-0"
            title="User Profile"
          >
            R
          </button>

          {/* Shopping Cart Icon */}
          <button 
            onClick={onOpenCart}
            className="relative p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shrink-0"
            title="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
              {cartCount > 0 ? cartCount : 3}
            </span>
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-700 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Blue Top Announcement Banner */}
      <div className="bg-[#0096da] text-white py-1.5 px-3 text-[11px] sm:text-xs font-medium text-center flex items-center justify-center gap-1.5 flex-wrap">
        <Sparkles className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
        <span>Welcome to <strong>DavaDay!</strong> Get 20% off your first order with code</span>
        <span className="bg-white/20 text-white font-mono font-bold px-1.5 py-0.5 rounded text-[10px] tracking-wide">
          FIRST20
        </span>
      </div>

      {/* Sub Navigation Links */}
      <nav className="flex items-center gap-6 sm:gap-8 px-4 py-2.5 overflow-x-auto whitespace-nowrap text-xs font-bold text-slate-700 border-t border-slate-100 md:justify-center no-scrollbar">
        <a href="#medicines" className="hover:text-[#0096da] transition-colors shrink-0">Medicines</a>
        <a href="#personal-care" className="hover:text-[#0096da] transition-colors shrink-0">Personal Care</a>
        <a href="#baby-care" className="hover:text-[#0096da] transition-colors shrink-0">Baby Care</a>
        <a href="#offers" className="hover:text-[#0096da] transition-colors shrink-0">Offers</a>
        <a href="#super-saver" className="flex items-center gap-1 text-orange-500 hover:text-orange-600 font-extrabold shrink-0">
          <Zap className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
          <span>Super Saver</span>
        </a>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-3 bg-slate-50 border-t border-slate-100 space-y-2 text-xs font-semibold">
          <a href="#medicines" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-700">Medicines</a>
          <a href="#personal-care" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-700">Personal Care</a>
          <a href="#baby-care" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-700">Baby Care</a>
          <a href="#offers" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-700">Offers</a>
          <a href="#super-saver" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-orange-500 font-bold">⚡ Super Saver</a>
        </div>
      )}

      {/* Location Modal */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl">
            <h3 className="text-base font-bold text-slate-900 mb-2">Select Delivery Location</h3>
            <input 
              type="text" 
              defaultValue={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Mumbai - 400001"
              className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0096da] mb-4"
            />
            <div className="flex justify-end gap-2 text-xs">
              <button onClick={() => setIsLocationModalOpen(false)} className="px-3 py-1.5 text-slate-600 font-medium">Cancel</button>
              <button onClick={() => setIsLocationModalOpen(false)} className="px-4 py-1.5 bg-[#0096da] text-white font-bold rounded-lg">Save</button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
