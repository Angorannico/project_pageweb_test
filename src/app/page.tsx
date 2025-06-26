import { Suspense } from 'react'
import { HeroSection } from '../components/home/HeroSection'
import { FeaturedProducts } from '../components/home/FeaturedProducts'
import { CategorySection } from '../components/home/CategorySection'
import { WhyChooseUs } from '../components/home/WhyChooseUs'
import { NewsletterSection } from '../components/home/NewsletterSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <FeaturedProducts />
      </Suspense>
      
      <CategorySection />
      <WhyChooseUs />
      <NewsletterSection />
    </div>
  )
}
