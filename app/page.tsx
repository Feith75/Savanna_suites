import SearchBar from '@/components/SearchBar'
import FeaturedProperties from '@/components/FeaturedProperties'
import ServicesPreview from '@/components/ServicesPreview'
import PlacesToVisit from '@/components/PlacesToVisit'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4">
            Book Luxury Stays & Experiences in Kenya
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Penthouses, Private Chefs, Rides & Curated Tours
          </p>
          <SearchBar />
        </div>
      </section>

      <FeaturedProperties />
      <ServicesPreview />
      <PlacesToVisit />
    </main>
  )
}
