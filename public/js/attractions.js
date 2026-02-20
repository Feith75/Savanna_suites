function addToTrip(button) {
    const card = button.closest('.property-card')
    const attractionName = card.querySelector('.property-title').textContent
    const price = card.querySelector('.property-price').textContent
    
    // Store in localStorage
    let trip = JSON.parse(localStorage.getItem('trip') || '{"attractions": []}')
    trip.attractions.push({
        name: attractionName,
        price: price
    })
    localStorage.setItem('trip', JSON.stringify(trip))
    
    alert(`${attractionName} added to your trip!\n\nGo to "Build My Trip" to see your complete package.`)
}

function bookTour(button) {
    const card = button.closest('.property-card')
    const attractionName = card.querySelector('.property-title').textContent
    
    if (confirm(`Book tour to ${attractionName}?\n\nProceed to booking?`)) {
        window.location.href = 'build-trip.html'
    }
}
