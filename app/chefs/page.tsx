export default function ChefsPage() {
  const chefs = [
    {
      name: 'Chef Amina Hassan',
      cuisines: ['Swahili', 'Seafood', 'BBQ'],
      rating: 4.9,
      pricePerDay: 8000,
      image: '👩‍🍳'
    },
    {
      name: 'Chef David Omondi',
      cuisines: ['Italian', 'French', 'Fusion'],
      rating: 4.8,
      pricePerDay: 10000,
      image: '👨‍🍳'
    },
    {
      name: 'Chef Grace Wanjiru',
      cuisines: ['Vegan', 'Healthy', 'International'],
      rating: 5.0,
      pricePerDay: 7500,
      image: '👩‍🍳'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Private Chef Services</h1>
        <p className="text-gray-600 mb-8">Enjoy gourmet meals prepared by professional chefs during your stay</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {chefs.map((chef) => (
            <div key={chef.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-200 to-amber-300 flex items-center justify-center text-6xl">
                {chef.image}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl">{chef.name}</h3>
                  <span className="text-yellow-500">★ {chef.rating}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {chef.cuisines.map((cuisine) => (
                    <span key={cuisine} className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded">
                      {cuisine}
                    </span>
                  ))}
                </div>
                <p className="text-orange-500 font-bold text-lg mb-4">
                  KES {chef.pricePerDay.toLocaleString()} / day
                </p>
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
                  Book Chef
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Service Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-bold mb-2">Breakfast Only</h3>
              <p className="text-sm text-gray-600 mb-2">Fresh breakfast prepared daily</p>
              <p className="text-orange-500 font-semibold">From KES 2,000/day</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-bold mb-2">Full Day Service</h3>
              <p className="text-sm text-gray-600 mb-2">Breakfast, lunch, and dinner</p>
              <p className="text-orange-500 font-semibold">From KES 8,000/day</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-bold mb-2">Romantic Dinner</h3>
              <p className="text-sm text-gray-600 mb-2">Special 3-course dinner for two</p>
              <p className="text-orange-500 font-semibold">From KES 5,000</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-bold mb-2">Event Catering</h3>
              <p className="text-sm text-gray-600 mb-2">For parties and celebrations</p>
              <p className="text-orange-500 font-semibold">Custom pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
