export default function PlacesToVisit() {
  const attractions = [
    { name: 'Malindi Marine National Park', category: 'Nature & Marine' },
    { name: 'Vasco da Gama Pillar', category: 'Historical' },
    { name: 'Marafa Depression (Hell\'s Kitchen)', category: 'Natural Wonder' },
  ]

  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Places to Visit in Malindi</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {attractions.map((attraction) => (
          <div key={attraction.name} className="border rounded-lg p-4 shadow">
            <div className="h-32 bg-gray-200 rounded mb-3"></div>
            <h3 className="font-bold">{attraction.name}</h3>
            <p className="text-sm text-gray-600">{attraction.category}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
