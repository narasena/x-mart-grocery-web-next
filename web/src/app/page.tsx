import CarouselBanner from '@/features/home/components/CarouselBanner';
import FeaturedProducts from '@/features/home/components/FeaturedProducts';

export default function Home() {
  return (
    <div className="flex flex-col">
      <CarouselBanner />
      <FeaturedProducts />
    </div>
  );
}
