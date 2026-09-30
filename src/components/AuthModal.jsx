import React, { useState } from 'react';
import { X, Lock, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AuthModal({ isOpen, onClose }) {
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpSent) {
      if (mobile.length >= 10) setOtpSent(true);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <span className="text-2xl font-black text-slate-900">
            Dava<span className="text-[#0b92d8]">Day</span>
          </span>
          <h3 className="text-lg font-extrabold text-slate-900 mt-2">
            {otpSent ? 'Enter Verification OTP' : 'Log in or Sign Up'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {otpSent ? `Sent 4-digit code to +91 ${mobile}` : 'Get access to exclusive medicine discounts & order tracking'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!otpSent ? (
            <div className="relative">
              <span className="absolute left-3 top-3 text-xs font-bold text-slate-500">+91</span>
              <input 
                type="tel" 
                maxLength="10"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter Mobile Number"
                className="w-full pl-12 pr-4 py-2.5 border border-slate-300 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0b92d8]"
              />
            </div>
          ) : (
            <input 
              type="text" 
              maxLength="4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="4-Digit OTP (e.g. 1234)"
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-center text-base tracking-widest font-mono font-bold focus:outline-none focus:ring-2 focus:ring-[#0b92d8]"
            />
          )}

          <button 
            type="submit"
            className="w-full py-3 rounded-xl text-xs font-extrabold text-white bg-[#0b92d8] hover:bg-[#0877b0] shadow-md transition-colors"
          >
            {otpSent ? 'Verify & Continue' : 'Send OTP'}
          </button>
        </form>

        <p className="text-[10px] text-slate-400 text-center mt-4">
          By continuing, you agree to DavaDay's Terms of Use and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
