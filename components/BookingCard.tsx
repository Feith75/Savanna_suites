'use client'

export default function BookingCard() {
  return (
    <div className="border rounded-lg p-6 shadow-lg sticky top-4">
      <div className="mb-4">
        <span className="text-3xl font-bold text-orange-500">KES 18,500</span>
        <span className="text-gray-600"> / night</span>
      </div>

      <div className="space-y-3 mb-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Check-in</label>
          <input type="date" className="w-full border rounded-lg px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Check-out</label>
          <input type="date" className="w-full border rounded-lg px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Guests</label>
          <select className="w-full border rounded-lg px-3 py-2">
            <option>1 guest</option>
            <option>2 guests</option>
            <option>3 guests</option>
            <option>4 guests</option>
            <option>5 guests</option>
            <option>6 guests</option>
          </select>
        </div>
      </div>

      <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 mb-4">
        Reserve
      </button>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>KES 18,500 × 3 nights</span>
          <span>KES 55,500</span>
        </div>
        <div className="flex justify-between">
          <span>Cleaning fee</span>
          <span>KES 2,500</span>
        </div>
        <div className="flex justify-between">
          <span>Service fee</span>
          <span>KES 3,000</span>
        </div>
        <div className="border-t pt-2 flex justify-between font-bold">
          <span>Total</span>
          <span>KES 61,000</span>
        </div>
      </div>
    </div>
  )
}
