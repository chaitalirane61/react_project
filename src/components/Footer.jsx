import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-white">
                Dava<span className="text-[#0b92d8]">Day</span>
              </span>
            </a>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              DavaDay is India's premier online pharmacy & healthcare platform delivering 100% genuine medicines, healthcare products, and expert diagnostic services directly to your doorstep.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-[#0b92d8]" />
                <span>Customer Care: +91 1800-200-DAVA (24x7)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-[#0b92d8]" />
                <span>Email: support@davaday.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Top Categories</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#medicines" className="hover:text-white transition-colors">Prescription Medicines</a></li>
              <li><a href="#personal-care" className="hover:text-white transition-colors">Personal Care & Hygiene</a></li>
              <li><a href="#baby-care" className="hover:text-white transition-colors">Baby Care Essentials</a></li>
              <li><a href="#nutrition" className="hover:text-white transition-colors">Vitamins & Supplements</a></li>
              <li><a href="#devices" className="hover:text-white transition-colors">Medical Devices & Monitors</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">About DavaDay</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers & Culture</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Editorial Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner Pharmacies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy & Security Policy</a></li>
            </ul>
          </div>

          {/* App Download */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Get the DavaDay App</h4>
            <p className="text-xs text-slate-400">Order medicines faster on our mobile app with real-time delivery tracking.</p>
            
            <div className="space-y-2">
              <button className="w-full bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-xl text-xs font-bold flex items-center gap-3 border border-slate-700 transition-colors">
                <Smartphone className="w-5 h-5 text-[#0b92d8]" />
                <div className="text-left">
                  <span className="block text-[9px] text-slate-400 uppercase">Available on</span>
                  <span>Google Play & App Store</span>
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal note */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} DavaDay Healthcare Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>CDSCO Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
