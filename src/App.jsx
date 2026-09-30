import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LoginBanner from './components/LoginBanner';
import PromoBanners from './components/PromoBanners';
import PopularCategories from './components/PopularCategories';
import FrequentlyOrdered from './components/FrequentlyOrdered';
import HealthcareBanner from './components/HealthcareBanner';
import TrendingNow from './components/TrendingNow';
import TopDeals from './components/TopDeals';
import GenericAlternative from './components/GenericAlternative';
import MembershipPlans from './components/MembershipPlans';
import TrustAndSafety from './components/TrustAndSafety';
import CustomerReviews from './components/CustomerReviews';
import PrescriptionUploadModal from './components/PrescriptionUploadModal';
import CartDrawer from './components/CartDrawer';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import { frequentlyOrderedProducts } from './data/mockData';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      ...frequentlyOrderedProducts[0],
      quantity: 1
    },
    {
      ...frequentlyOrderedProducts[1],
      quantity: 2
    }
  ]);

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#0b92d8] selection:text-white">
      
      {/* Top Header Navigation */}
      <Header 
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Search & Prescription Upload CTA */}
        <HeroSection 
          onOpenUploadModal={() => setIsUploadModalOpen(true)}
          onSearch={(query) => console.log('Searching:', query)}
        />

        {/* 2. Login Banner (Figma Image 2) */}
        <LoginBanner onOpenAuth={() => setIsAuthOpen(true)} />

        {/* 3. Promotional Banners (Super Saver, Cancer Care, Better Health) */}
        <PromoBanners />

        {/* 4. Popular Categories (Figma Image 5) */}
        <PopularCategories />

        {/* 5. Frequently Ordered Medicines Carousel/Grid (Figma Image 3) */}
        <FrequentlyOrdered onAddToCart={handleAddToCart} />

        {/* 6. Healthcare Made Simple Banner (Figma Image 4) */}
        <HealthcareBanner />

        {/* 7. Trending Now Products (Figma Image 6) */}
        <TrendingNow onAddToCart={handleAddToCart} />

        {/* 8. Top Deals Cards (Figma Image 7) */}
        <TopDeals />

        {/* 9. Save with Generic Alternative Calculator (Figma Image 8) */}
        <GenericAlternative 
          onSelectGeneric={(item) => handleAddToCart({
            id: `generic-${item.id}`,
            name: item.genericName,
            manufacturer: item.genericPharma,
            price: item.genericPrice,
            mrp: item.brandPrice,
            save: item.savingsAmount,
            image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80'
          })} 
        />

        {/* 10. DavaDay Care Membership Pricing Plans (Figma Image 9) */}
        <MembershipPlans />

        {/* 11. Trust & Safety Guarantees (Figma Image 10) */}
        <TrustAndSafety />

        {/* 12. Customer Testimonial Reviews (Figma Image 11) */}
        <CustomerReviews />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals & Slide-overs */}
      <PrescriptionUploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

    </div>
  );
}
