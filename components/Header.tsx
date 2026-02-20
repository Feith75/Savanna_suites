import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            LuxuryStay
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/properties" className="hover:text-orange-500">Properties</Link>
            <Link href="/chefs" className="hover:text-orange-500">Chefs</Link>
            <Link href="/transport" className="hover:text-orange-500">Transport</Link>
            <Link href="/attractions" className="hover:text-orange-500">Attractions</Link>
            <Link href="/build-trip" className="font-semibold text-orange-500">Build My Trip</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hover:text-orange-500">Sign In</button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              List Property
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
