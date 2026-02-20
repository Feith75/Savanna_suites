'use client'
import { useState } from 'react'

export default function BuildTripPage() {
  const [selectedProperty, setSelectedProperty] = useState(false)
  const [selectedChef, setSelectedChef] = useState(false)
  const [selectedRide, setSelectedRide] = useState(false)
  const [selectedAttractions, setSelectedAttractions] = useState<string[]>([])

  const calculateTotal = () => {
    let total = 0
    if (selectedProperty) total += 45000
    if (selectedChef) total += 24000
    if (selectedRide) total += 12000
    total += selectedAttractions.length * 3000
    return total * 0.85
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Build My Complete Trip</h1>
        <p className="text-gray-600 mb-2">Create your perfect vacation package</p>
        <p className="text-orange-500 font-semibold mb-8">Save up to 15% when you bundle!</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">1. Select Property</h2>
              <div className="border rounded-lg p-4 cursor-pointer hover:border-orange-500"
                   onClick={() => setSelectedProperty(!selectedProperty)}>
                <div className="flex items-center gap-4">
                  <input type="checkbox" checked={selectedProperty} readOnly />
                  <div className="flex-1">
                    <h3 className="font-bold">Ocean View Penthouse</h3>
                    <p className="text-sm text-gray-600">3 nights • 3 beds • 6 guests</p>
                  </div>
                  <p className="font-bold text-orange-500">KES 45,000</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">2. Add Private Chef (Optional)</h2>
              <div className="border rounded-lg p-4 cursor-pointer hover:border-orange-500"
                   onClick={() => setSelectedChef(!selectedChef)}>
                <div className="flex items-center gap-4">
                  <input type="checkbox" checked={selectedChef} readOnly />
                  <div className="flex-1">
                    <h3 className="font-bold">Chef Amina Hassan</h3>
                    <p className="text-sm text-gray-600">Full day service • 3 days</p>
                  </div>
                  <p className="font-bold text-orange-500">KES 24,000</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">3. Add Transport (Optional)</h2>
              <div className="border rounded-lg p-4 cursor-pointer hover:border-orange-500"
                   onClick={() => setSelectedRide(!selectedRide)}>
                <div className="flex items-center gap-4">
                  <input type="checkbox" checked={selectedRide} readOnly />
                  <div className="flex-1">
                    <h3 className="font-bold">Airport Transfer + Daily Chauffeur</h3>
                    <p className="text-sm text-gray-600">Pickup, drop-off & 3 days service</p>
                  </div>
                  <p className="font-bold text-orange-500">KES 12,000</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">4. Select Attractions (Optional)</h2>
              <div className="space-y-3">
                {['Malindi Marine Park', 'Vasco da Gama Pillar', 'Marafa Depression'].map((attraction) => (
                  <div key={attraction} className="border rounded-lg p-4 cursor-pointer hover:border-orange-500"
                       onClick={() => {
                         if (selectedAttractions.includes(attraction)) {
                           setSelectedAttractions(selectedAttractions.filter(a => a !== attraction))
                         } else {
                           setSelectedAttractions([...selectedAttractions, attraction])
                         }
                       }}>
                    <div className="flex items-center gap-4">
                      <input type="checkbox" checked={selectedAttractions.includes(attraction)} readOnly />
                      <div className="flex-1">
                        <h3 className="font-bold">{attraction}</h3>
                      </div>
                      <p className="font-bold text-orange-500">KES 3,000</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-lg sticky top-4">
              <h3 className="text-xl font-bold mb-4">Trip Summary</h3>
              <div className="space-y-3 mb-4">
                {selectedProperty && (
                  <div className="flex justify-between text-sm">
                    <span>Property (3 nights)</span>
                    <span>KES 45,000</span>
                  </div>
                )}
                {selectedChef && (
                  <div className="flex justify-between text-sm">
                    <span>Private Chef (3 days)</span>
                    <span>KES 24,000</span>
                  </div>
                )}
                {selectedRide && (
                  <div className="flex justify-between text-sm">
                    <span>Transport</span>
                    <span>KES 12,000</span>
                  </div>
                )}
                {selectedAttractions.map((attraction) => (
                  <div key={attraction} className="flex justify-between text-sm">
                    <span>{attraction}</span>
                    <span>KES 3,000</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>KES {(calculateTotal() / 0.85).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-green-600 font-semibold">
                  <span>Bundle Discount (15%)</span>
                  <span>-KES {((calculateTotal() / 0.85) * 0.15).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xl font-bold border-t pt-2">
                  <span>Total</span>
                  <span className="text-orange-500">KES {calculateTotal().toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 mt-6">
                Book Complete Package
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
