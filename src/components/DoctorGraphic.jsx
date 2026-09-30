import React from 'react';
import doctorImg from '../assets/hero-doctor.jpg';

export default function DoctorGraphic() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto flex justify-center lg:justify-end items-end">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0096da]/10 via-[#0096da]/5 to-transparent rounded-full blur-2xl transform scale-90"></div>
      
      {/* Doctor Image with clean blend & responsive scaling */}
      <img 
        src={doctorImg} 
        alt="DavaDay Certified Expert Doctor" 
        className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] h-auto object-contain object-bottom mix-blend-multiply filter contrast-105"
      />
    </div>
  );
}
