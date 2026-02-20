import PropertyCard from '@/components/PropertyCard'

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Luxury Properties</h1>
        
        <div className="flex gap-8">
          <aside className="w-64 bg-white p-6 rounded-lg shadow h-fit">
            <h3 className="font-bold mb-4">Filters</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <input type="range" min="0" max="50000" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bedrooms</label>
                <select className="w-full border rounded px-3 py-2">
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Amenities</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Pool
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    WiFi
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Kitchen
                  </label>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
