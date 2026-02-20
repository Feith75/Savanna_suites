import AddServicesSection from '@/components/AddServicesSection'

export default function PropertyDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6">
              <div className="h-96 bg-gradient-to-br from-orange-200 to-amber-300"></div>
              <div className="grid grid-cols-4 gap-2 p-2">
                <div className="h-24 bg-gray-200 rounded"></div>
                <div className="h-24 bg-gray-200 rounded"></div>
                <div className="h-24 bg-gray-200 rounded"></div>
                <div className="h-24 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Ocean View Penthouse</h1>
                  <p className="text-gray-600">Malindi Beach, Kenya</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-orange-500">KES 15,000</p>
                  <p className="text-sm text-gray-600">per night</p>
                </div>
              </div>

              <div className="flex gap-6 py-4 border-y">
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-gray-600">Bedrooms</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-gray-600">Bathrooms</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">6</p>
                  <p className="text-sm text-gray-600">Guests</p>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-bold mb-3">About this property</h2>
                <p className="text-gray-700 leading-relaxed">
                  Experience luxury living in this stunning ocean-view penthouse. Wake up to breathtaking views of the Indian Ocean, 
                  enjoy modern amenities, and relax in spacious, elegantly designed rooms. Perfect for families or groups seeking 
                  an unforgettable coastal getaway.
                </p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-bold mb-3">Amenities</h2>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <span>✓</span> WiFi
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span> Swimming Pool
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span> Air Conditioning
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span> Full Kitchen
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span> 24/7 Security
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span> Free Parking
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-bold mb-3">House Rules</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Check-in: 2:00 PM - 10:00 PM</li>
                  <li>• Check-out: 11:00 AM</li>
                  <li>• No smoking</li>
                  <li>• No pets</li>
                  <li>• No parties or events</li>
                </ul>
              </div>
            </div>

            <AddServicesSection />

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Guest Reviews</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="font-semibold">John D.</span>
                    <span className="text-sm text-gray-500">• 2 weeks ago</span>
                  </div>
                  <p className="text-gray-700">Amazing property with stunning views. The host was very responsive and helpful.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-lg sticky top-4">
              <h3 className="text-xl font-bold mb-4">Book Your Stay</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Check-in</label>
                  <input type="date" className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Check-out</label>
                  <input type="date" className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Guests</label>
                  <input type="number" min="1" max="6" defaultValue="2" className="w-full border rounded px-3 py-2" />
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>KES 15,000 × 3 nights</span>
                    <span>KES 45,000</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Cleaning fee</span>
                    <span>KES 2,000</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Service fee</span>
                    <span>KES 1,500</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                    <span>Total</span>
                    <span>KES 48,500</span>
                  </div>
                </div>

                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600">
                  Reserve Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
