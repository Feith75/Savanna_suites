export default function FeaturedProperties() {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Featured Luxury Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Property cards will be mapped here */}
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <h3 className="font-bold text-xl">Sample Property</h3>
            <p className="text-gray-600">Malindi, Kenya</p>
            <p className="text-orange-500 font-bold mt-2">KES 15,000 / night</p>
          </div>
        </div>
      </div>
    </section>
  )
}
