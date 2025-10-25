// /app/page.jsx

import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FeaturedProducts from "../components/FeaturedProducts";
import BrandPhilosophy from "@/components/BrandPhilosophy";
import InstagramFeed from "@/components/InstagramFeed";
import Newsletter from "@/components/Newsletter";
import SeasonalBanner from "@/components/SeasonalBanner";
import { getFeaturedProducts } from "@/lib/data";


export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      
      <CategorySection />
      <SeasonalBanner />
      <FeaturedProducts products={featuredProducts} />
      <BrandPhilosophy />
      <Newsletter />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
