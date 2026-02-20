import { malindiAttractions } from '@/lib/attractions-data'

export default function AttractionsPage() {
  const categories = ['All', 'Nature & Marine', 'Historical & Cultural', 'Wildlife & Adventure', 'Natural Wonder']

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Places to Visit in Malindi</h1>
        <p className="text-gray-600 mb-8">Discover the best attractions and experiences</p>

        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full border hover:border-orange-500 hover:bg-orange-50 whitespace-nowrap"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {malindiAttractions.map((attraction) => (
            <div key={attraction.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-200 to-teal-300"></div>
              <div className="p-6">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded mb-2 inline-block">
                  {attraction.category}
                </span>
                <h3 className="font-bold text-xl mb-2">{attraction.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{attraction.description}</p>
                
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Entry Fee:</span>
                    <span className="font-semibold">KES {attraction.entryFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{attraction.estimatedDuration} mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-semibold text-xs">{attraction.bestTimeToVisit}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 text-sm">
                    Add to Trip
                  </button>
                  <button className="flex-1 border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-50 text-sm">
                    Book Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
