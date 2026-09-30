import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Tag, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  const [coupon, setCoupon] = useState('FIRST20');
  const [discountApplied, setDiscountApplied] = useState(true);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalMrp = cartItems.reduce((acc, item) => acc + item.mrp * item.quantity, 0);
  const discountAmount = discountApplied ? Math.round(subtotal * 0.2) : 0;
  const deliveryFee = subtotal > 499 ? 0 : 40;
  const finalTotal = subtotal - discountAmount + deliveryFee;
  const totalSaved = (totalMrp - subtotal) + discountAmount;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (coupon.toUpperCase() === 'FIRST20') {
      setDiscountApplied(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Cart Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#0b92d8]" />
            <h3 className="text-lg font-black text-slate-900">Your Cart ({cartItems.length})</h3>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-slate-700">Your cart is empty</h4>
              <p className="text-xs text-slate-400">Add medicines or healthcare essentials to get started.</p>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-3 p-3 rounded-2xl border border-slate-100 bg-white shadow-sm">
                  <img src={item.image} alt={item.name} className="w-14 h-14 object-contain rounded-lg bg-slate-50 p-1" />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-extrabold text-xs text-slate-900 truncate">{item.name}</h4>
                    <p className="text-[10px] text-slate-400">{item.manufacturer || item.brand}</p>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="font-black text-xs text-slate-900">₹{item.price}</span>
                      <span className="text-[10px] text-slate-400 line-through">₹{item.mrp}</span>
                    </div>
                  </div>

                  {/* Quantity Actions */}
                  <div className="flex items-center gap-2 bg-slate-100 px-2 py-1 rounded-xl">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:text-[#0b92d8] text-slate-600"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold text-slate-900 w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:text-[#0b92d8] text-slate-600"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1 text-slate-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Coupon Box */}
              <form onSubmit={handleApplyCoupon} className="pt-2 flex gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Coupon Code"
                    className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-xs uppercase font-mono font-bold text-slate-800"
                  />
                </div>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800"
                >
                  Apply
                </button>
              </form>

              {discountApplied && (
                <div className="bg-emerald-50 text-emerald-800 p-2.5 rounded-xl text-xs font-bold flex items-center justify-between border border-emerald-200">
                  <span>Code FIRST20 Applied!</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
            <div className="space-y-1.5 text-xs text-slate-600 font-medium">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Coupon Discount (20%)</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span>{deliveryFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `₹${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-200">
                <span>Total Amount</span>
                <span>₹{finalTotal}</span>
              </div>
              <div className="text-[11px] font-bold text-emerald-600 text-right">
                You saved ₹{totalSaved} on this order!
              </div>
            </div>

            <button className="w-full py-3.5 rounded-2xl text-xs font-extrabold text-white bg-[#0b92d8] hover:bg-[#0877b0] shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all">
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
