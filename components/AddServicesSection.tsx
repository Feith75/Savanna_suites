import Link from 'next/link'

export default function AddServicesSection() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Enhance Your Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/chefs" className="border rounded-lg p-4 hover:border-orange-500 transition">
          <h3 className="font-bold text-lg mb-2">🍽️ Add Private Chef</h3>
          <p className="text-sm text-gray-600 mb-2">
            Enjoy gourmet meals prepared by professional chefs
          </p>
          <p className="text-orange-500 font-semibold">From KES 5,000/day</p>
        </Link>

        <Link href="/transport" className="border rounded-lg p-4 hover:border-orange-500 transition">
          <h3 className="font-bold text-lg mb-2">🚗 Add Transport</h3>
          <p className="text-sm text-gray-600 mb-2">
            Airport pickup, chauffeur service, luxury car rental
          </p>
          <p className="text-orange-500 font-semibold">From KES 3,000</p>
        </Link>

        <Link href="/attractions" className="border rounded-lg p-4 hover:border-orange-500 transition">
          <h3 className="font-bold text-lg mb-2">🏖️ Book Tours</h3>
          <p className="text-sm text-gray-600 mb-2">
            Explore Malindi's best attractions with guided tours
          </p>
          <p className="text-orange-500 font-semibold">From KES 2,000</p>
        </Link>

        <Link href="/build-trip" className="border rounded-lg p-4 hover:border-orange-500 transition bg-orange-50">
          <h3 className="font-bold text-lg mb-2">✨ Build Complete Trip</h3>
          <p className="text-sm text-gray-600 mb-2">
            Bundle everything and save up to 15%
          </p>
          <p className="text-orange-500 font-semibold">Get Package Deal</p>
        </Link>
      </div>
    </div>
  )
}
