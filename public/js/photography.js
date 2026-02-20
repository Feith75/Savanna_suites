// Photography services data
const photographers = [
    {
        id: 'safari-pro',
        name: 'David Kimani',
        specialty: 'Wildlife & Safari Photography',
        experience: '10+ years',
        rating: 5.0,
        reviews: 127,
        hourlyRate: 5000,
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop',
        portfolio: [
            'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&h=300&fit=crop'
        ],
        description: 'Specializes in capturing stunning wildlife moments and safari adventures.',
        packages: '2hrs: KES 10,000 | 4hrs: KES 18,000 | Full Day: KES 35,000'
    },
    {
        id: 'beach-expert',
        name: 'Amina Hassan',
        specialty: 'Beach & Coastal Photography',
        experience: '8+ years',
        rating: 4.9,
        reviews: 98,
        hourlyRate: 4500,
        image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop',
        portfolio: [
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
        ],
        description: 'Expert in beach portraits, sunset shots, and coastal landscapes.',
        packages: '2hrs: KES 9,000 | 4hrs: KES 16,000 | Full Day: KES 30,000'
    },
    {
        id: 'event-master',
        name: 'James Omondi',
        specialty: 'Event & Portrait Photography',
        experience: '12+ years',
        rating: 5.0,
        reviews: 156,
        hourlyRate: 6000,
        image: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&h=400&fit=crop',
        portfolio: [
            'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop'
        ],
        description: 'Professional event coverage and stunning portrait photography.',
        packages: '2hrs: KES 12,000 | 4hrs: KES 22,000 | Full Day: KES 40,000'
    },
    {
        id: 'adventure-lens',
        name: 'Sarah Wanjiku',
        specialty: 'Adventure & Travel Photography',
        experience: '7+ years',
        rating: 4.8,
        reviews: 84,
        hourlyRate: 4000,
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop',
        portfolio: [
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=300&fit=crop'
        ],
        description: 'Captures thrilling adventure moments and travel experiences.',
        packages: '2hrs: KES 8,000 | 4hrs: KES 15,000 | Full Day: KES 28,000'
    },
    {
        id: 'cultural-focus',
        name: 'Peter Mwangi',
        specialty: 'Cultural & Heritage Photography',
        experience: '15+ years',
        rating: 5.0,
        reviews: 142,
        hourlyRate: 5500,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
        portfolio: [
            'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400&h=300&fit=crop'
        ],
        description: 'Documents cultural experiences and heritage sites beautifully.',
        packages: '2hrs: KES 11,000 | 4hrs: KES 20,000 | Full Day: KES 38,000'
    },
    {
        id: 'drone-specialist',
        name: 'Michael Kariuki',
        specialty: 'Aerial & Drone Photography',
        experience: '5+ years',
        rating: 4.9,
        reviews: 67,
        hourlyRate: 7000,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop',
        portfolio: [
            'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
        ],
        description: 'Stunning aerial shots and unique perspectives from above.',
        packages: '2hrs: KES 14,000 | 4hrs: KES 26,000 | Full Day: KES 50,000'
    }
]

let currentPhotographer = null

// Load photographers on page load
function loadPhotographers() {
    const grid = document.getElementById('photographersGrid')
    
    grid.innerHTML = photographers.map(photographer => `
        <div class="property-card-enhanced">
            <div class="property-image-container">
                <div class="property-badge">${photographer.specialty.split(' ')[0]}</div>
                <img src="${photographer.image}" alt="${photographer.name}" class="property-image-enhanced">
            </div>
            <div class="property-content-enhanced">
                <div class="property-type">${photographer.specialty}</div>
                <h3 class="property-title-enhanced">${photographer.name}</h3>
                <div class="property-location-enhanced">
                    <span>📸</span>
                    <span>${photographer.experience} Experience</span>
                </div>
                <p style="color: #666; font-size: 0.875rem; margin: 0.75rem 0;">
                    ${photographer.description}
                </p>
                
                <!-- Portfolio Preview -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin: 0.75rem 0;">
                    ${photographer.portfolio.map(img => `
                        <img src="${img}" alt="Portfolio" style="width: 100%; height: 80px; object-fit: cover; border-radius: 6px;">
                    `).join('')}
                </div>
                
                <div style="background: #f3f4f6; padding: 0.75rem; border-radius: 6px; margin: 0.75rem 0;">
                    <p style="font-size: 0.75rem; color: #666; margin-bottom: 0.25rem;">Packages:</p>
                    <p style="font-size: 0.875rem; font-weight: 600;">${photographer.packages}</p>
                </div>
                
                <div class="property-footer">
                    <div class="property-price-enhanced">
                        <span class="price-amount">KES ${photographer.hourlyRate.toLocaleString()}</span>
                        <span class="price-period">per hour</span>
                    </div>
                    <div class="property-rating-enhanced">
                        <span class="rating-star">★</span>
                        <span class="rating-value">${photographer.rating}</span>
                        <span style="font-size: 0.75rem; color: #666;">(${photographer.reviews})</span>
                    </div>
                </div>
                
                <button onclick="openBookingModal('${photographer.id}')" class="btn-primary" style="width: 100%; margin-top: 1rem;">
                    📅 Book Photographer
                </button>
            </div>
        </div>
    `).join('')
}

function openBookingModal(photographerId) {
    currentPhotographer = photographers.find(p => p.id === photographerId)
    
    if (!currentPhotographer) return
    
    document.getElementById('modalPhotographerName').textContent = currentPhotographer.name
    document.getElementById('modalPhotographerSpecialty').textContent = currentPhotographer.specialty
    document.getElementById('modalPackageDetails').textContent = currentPhotographer.packages
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0]
    document.getElementById('photoDate').min = today
    
    updatePrice()
    
    document.getElementById('bookingModal').style.display = 'block'
    document.body.style.overflow = 'hidden'
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none'
    document.body.style.overflow = 'auto'
}

function updatePrice() {
    if (!currentPhotographer) return
    
    const hours = parseInt(document.getElementById('photoHours').value)
    const total = currentPhotographer.hourlyRate * hours
    
    document.getElementById('modalTotalPrice').textContent = `KES ${total.toLocaleString()}`
}

function addToCart() {
    const date = document.getElementById('photoDate').value
    const time = document.getElementById('photoTime').value
    const location = document.getElementById('photoLocation').value
    const hours = parseInt(document.getElementById('photoHours').value)
    const requests = document.getElementById('photoRequests').value
    
    if (!date || !location) {
        alert('Please fill in all required fields')
        return
    }
    
    const total = currentPhotographer.hourlyRate * hours
    
    const item = {
        id: currentPhotographer.id + '-' + Date.now(),
        type: 'photography',
        name: `${currentPhotographer.name} - ${currentPhotographer.specialty}`,
        price: total,
        hours: hours,
        date: date,
        time: time,
        location: location,
        requests: requests,
        quantity: 1
    }
    
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push(item)
    localStorage.setItem('cart', JSON.stringify(cart))
    
    updateCartCount()
    closeBookingModal()
    
    if (confirm(`${currentPhotographer.name} added to cart!\n\nView Cart now?`)) {
        window.location.href = 'cart.html'
    }
}

function payNow() {
    const date = document.getElementById('photoDate').value
    const time = document.getElementById('photoTime').value
    const location = document.getElementById('photoLocation').value
    const hours = parseInt(document.getElementById('photoHours').value)
    const requests = document.getElementById('photoRequests').value
    
    if (!date || !location) {
        alert('Please fill in all required fields')
        return
    }
    
    const total = currentPhotographer.hourlyRate * hours
    
    // Store booking details
    localStorage.setItem('bookingType', 'photography')
    localStorage.setItem('bookingName', `${currentPhotographer.name} - ${currentPhotographer.specialty}`)
    localStorage.setItem('bookingPrice', `KES ${total.toLocaleString()}`)
    localStorage.setItem('bookingDays', '1')
    localStorage.setItem('bookingDetails', JSON.stringify({
        date: date,
        time: time,
        location: location,
        hours: hours,
        requests: requests
    }))
    
    closeBookingModal()
    window.location.href = 'checkout.html'
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    const countElements = document.querySelectorAll('#cartCount, .cart-count')
    countElements.forEach(el => {
        if (el) el.textContent = count
    })
}

// Initialize
loadPhotographers()
updateCartCount()
