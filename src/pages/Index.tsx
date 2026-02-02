import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import BestSellersSection from "@/components/home/BestSellersSection";
import TestimonialSection from "@/components/home/TestimonialSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <BestSellersSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
