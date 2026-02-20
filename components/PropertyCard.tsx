import Link from 'next/link'

export default function PropertyCard() {
  return (
    <Link href="/properties/1" className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
        <div className="h-48 bg-gradient-to-br from-orange-200 to-amber-300"></div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-xl">Ocean View Penthouse</h3>
            <span className="text-yellow-500">★ 4.9</span>
          </div>
          <p className="text-gray-600 text-sm mb-2">Malindi Beach, Kenya</p>
          <div className="flex gap-4 text-sm text-gray-600 mb-3">
            <span>3 Beds</span>
            <span>2 Baths</span>
            <span>6 Guests</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
            <span className="bg-gray-100 px-2 py-1 rounded">WiFi</span>
            <span className="bg-gray-100 px-2 py-1 rounded">Pool</span>
            <span className="bg-gray-100 px-2 py-1 rounded">AC</span>
          </div>
          <p className="text-orange-500 font-bold text-lg">KES 15,000 <span className="text-sm text-gray-600">/ night</span></p>
        </div>
      </div>
    </Link>
  )
}
