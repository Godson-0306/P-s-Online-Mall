import { useQuery } from '@tanstack/react-query';
import AnnouncementBar from '../components/AnnouncementBar.jsx';
import Benefits from '../components/Benefits.jsx';
import CategoryGrid from '../components/CategoryGrid.jsx';
import FeaturedProducts from '../components/FeaturedProducts.jsx';
import FlashSale from '../components/FlashSale.jsx';
import Footer from '../components/Footer.jsx';
import HeroSlider from '../components/HeroSlider.jsx';
import LoadingSkeleton from '../components/LoadingSkeleton.jsx';
import Navbar from '../components/Navbar.jsx';
import Newsletter from '../components/Newsletter.jsx';
import TopBrands from '../components/TopBrands.jsx';
import { getBrands, getCategories, getHeroSlides, getProducts } from '../services/api.js';

export default function HomePage() {
  const heroQuery = useQuery({ queryKey: ['hero-slides'], queryFn: getHeroSlides });
  const categoryQuery = useQuery({ queryKey: ['categories'], queryFn: getCategories });
  const productQuery = useQuery({ queryKey: ['products'], queryFn: getProducts });
  const brandQuery = useQuery({ queryKey: ['brands'], queryFn: getBrands });

  const loading =
    heroQuery.isLoading ||
    categoryQuery.isLoading ||
    productQuery.isLoading ||
    brandQuery.isLoading;

  if (loading) {
    return <LoadingSkeleton />;
  }

  const products = productQuery.data || [];
  const flashSaleProducts = products.filter((product) => product.isFlashSale || product.discount);
  const featuredProducts = products.filter((product) => product.isFeatured).slice(0, 8);

  return (
    <div className="min-h-screen bg-white text-brand-ink">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSlider slides={heroQuery.data || []} />
        <CategoryGrid categories={categoryQuery.data || []} />
        <FlashSale products={flashSaleProducts} />
        <FeaturedProducts products={featuredProducts} />
        <Benefits />
        <TopBrands brands={brandQuery.data || []} />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
