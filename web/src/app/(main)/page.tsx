import CarouselBanner from '@/features/main/home/components/CarouselBanner';
import FeaturedProducts from '@/features/main/home/components/FeaturedProducts';

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <CarouselBanner />
      <div className="grid grid-cols-4 gap-4">
        {[1,2,3,4,5].map((i) => (
          <FeaturedProducts key={i} />
        ))}
      </div>
    </div>
  );
}
