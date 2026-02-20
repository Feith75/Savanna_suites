export default function TransportPage() {
  const services = [
    {
      title: 'Airport Pickup & Drop-off',
      description: 'Comfortable transfer from Malindi Airport to your property',
      price: 3000,
      duration: 'One way'
    },
    {
      title: 'Chauffeur Service (Hourly)',
      description: 'Professional driver at your disposal',
      price: 2000,
      duration: 'Per hour'
    },
    {
      title: 'Chauffeur Service (Daily)',
      description: 'Full day driver service (8 hours)',
      price: 12000,
      duration: 'Per day'
    },
    {
      title: 'Luxury Car Rental',
      description: 'Self-drive luxury vehicles',
      price: 8000,
      duration: 'Per day'
    }
  ]

  const vehicles = [
    { name: 'Toyota Land Cruiser', capacity: 7, type: 'SUV' },
    { name: 'Mercedes-Benz S-Class', capacity: 4, type: 'Luxury Sedan' },
    { name: 'Range Rover Sport', capacity: 5, type: 'Luxury SUV' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Ride & Transport Services</h1>
        <p className="text-gray-600 mb-8">Luxury transportation for your entire stay</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-orange-500 font-bold text-lg">
                    KES {service.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">{service.duration}</p>
                </div>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Available Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vehicles.map((vehicle) => (
              <div key={vehicle.name} className="border rounded-lg p-4">
                <div className="h-32 bg-gray-200 rounded mb-4 flex items-center justify-center text-4xl">
                  🚗
                </div>
                <h3 className="font-bold mb-1">{vehicle.name}</h3>
                <p className="text-sm text-gray-600">{vehicle.type}</p>
                <p className="text-sm text-gray-600">Capacity: {vehicle.capacity} passengers</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
