'use client'

export default function SearchBar() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Location"
          className="border rounded-lg px-4 py-3"
        />
        <input
          type="date"
          placeholder="Check-in"
          className="border rounded-lg px-4 py-3"
        />
        <input
          type="date"
          placeholder="Check-out"
          className="border rounded-lg px-4 py-3"
        />
        <input
          type="number"
          placeholder="Guests"
          min="1"
          className="border rounded-lg px-4 py-3"
        />
      </div>
      <button className="w-full mt-4 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600">
        Search Properties
      </button>
    </div>
  )
}
