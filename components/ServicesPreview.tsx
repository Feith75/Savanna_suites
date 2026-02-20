export default function ServicesPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Enhance Your Stay</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-2">Private Chef Service</h3>
            <p className="text-gray-600">Enjoy gourmet meals prepared by professional chefs</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-2">Ride & Transport</h3>
            <p className="text-gray-600">Airport pickup, chauffeur service, luxury car rental</p>
          </div>
        </div>
      </div>
    </section>
  )
}
