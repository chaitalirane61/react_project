import React from 'react';
import { User } from 'lucide-react';

export default function LoginBanner({ onOpenAuth }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <div className="bg-[#e8f4fa] border border-[#d2e9f7] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
        
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-full bg-[#0096da]/15 flex items-center justify-center text-[#0096da] shrink-0">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-slate-900">Welcome to DavaDay</h3>
            <p className="text-xs text-slate-500 font-medium">Log in for faster checkout, order history and exclusive deals</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button 
            onClick={onOpenAuth}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#0096da] hover:bg-[#0082be] transition-colors shadow-sm"
          >
            Log In
          </button>
          <button 
            onClick={onOpenAuth}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors shadow-xs"
          >
            Sign Up
          </button>
        </div>

      </div>
    </section>
  );
}
