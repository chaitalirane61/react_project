import React, { useState } from 'react';
import { X, UploadCloud, FileText, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

export default function PrescriptionUploadModal({ isOpen, onClose }) {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      setUploaded(true);
      setTimeout(() => {
        setUploaded(false);
        setFile(null);
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0b92d8] flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">Upload Prescription</h3>
            <p className="text-xs text-slate-500 font-medium">Our licensed pharmacists will read & fulfill your order.</p>
          </div>
        </div>

        {uploaded ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-lg font-extrabold text-slate-900">Prescription Uploaded!</h4>
            <p className="text-xs text-slate-500">Our pharmacist will call you within 15 minutes to confirm medicines.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Upload Area */}
            <label className="border-2 border-dashed border-slate-300 hover:border-[#0b92d8] rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer bg-slate-50/50 hover:bg-blue-50/30 transition-all">
              <UploadCloud className="w-10 h-10 text-[#0b92d8] mb-2" />
              <span className="text-sm font-bold text-slate-800">
                {file ? file.name : 'Click or drag & drop prescription file here'}
              </span>
              <span className="text-xs text-slate-400 mt-1">Supports PNG, JPG, JPEG, or PDF up to 10MB</span>
              <input type="file" onChange={handleFileChange} accept="image/*,.pdf" className="hidden" />
            </label>

            {/* Verification Note */}
            <div className="bg-blue-50 p-3.5 rounded-2xl flex items-start gap-2.5 text-xs text-slate-700">
              <ShieldCheck className="w-5 h-5 text-[#0b92d8] shrink-0 mt-0.5" />
              <div>
                <strong className="block font-extrabold text-slate-900">100% Privacy & Data Security</strong>
                <span>Your medical records are stored with 256-bit HIPAA compliant encryption.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button 
                type="button" 
                onClick={onClose}
                className="w-1/2 py-3 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                disabled={!file}
                className={`w-1/2 py-3 rounded-xl text-xs font-bold text-white shadow-md transition-all ${
                  file ? 'bg-[#0b92d8] hover:bg-[#0877b0]' : 'bg-slate-300 cursor-not-allowed'
                }`}
              >
                Submit Prescription
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
