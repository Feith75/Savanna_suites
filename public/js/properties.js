const API_URL = '/api'

// Virtual tour data for properties
const virtualTours = {
    '1': {
        name: 'Ocean View Penthouse',
        price: 15000,
        images: [
            {
                url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
                title: 'Exterior View',
                description: 'Stunning ocean view penthouse with modern architecture'
            },
            {
                url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
                title: 'Living Room',
                description: 'Spacious living area with floor-to-ceiling windows'
            },
            {
                url: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop',
                title: 'Master Bedroom',
                description: 'Luxurious master suite with ocean views'
            },
            {
                url: 'https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=800&h=600&fit=crop',
                title: 'Kitchen',
                description: 'Modern kitchen with premium appliances'
            },
            {
                url: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop',
                title: 'Balcony',
                description: 'Private balcony with breathtaking ocean views'
            }
        ]
    },
    '2': {
        name: 'Luxury Beach Villa',
        price: 25000,
        images: [
            {
                url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
                title: 'Exterior View',
                description: 'Magnificent beachfront villa with private pool'
            },
            {
                url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
                title: 'Living Area',
                description: 'Open-plan living space with elegant furnishings'
            },
            {
                url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
                title: 'Master Suite',
                description: 'Spacious master bedroom with ensuite bathroom'
            },
            {
                url: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=600&fit=crop',
                title: 'Pool Area',
                description: 'Private infinity pool with ocean views'
            },
            {
                url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
                title: 'Beach Access',
                description: 'Direct access to pristine beach'
            }
        ]
    },
    '3': {
        name: 'Modern Penthouse Suite',
        price: 12000,
        images: [
            {
                url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
                title: 'Exterior View',
                description: 'Contemporary penthouse in prime location'
            },
            {
                url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
                title: 'Living Space',
                description: 'Modern living area with designer furniture'
            },
            {
                url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
                title: 'Bedroom',
                description: 'Comfortable bedroom with city views'
            },
            {
                url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
                title: 'Terrace',
                description: 'Private terrace with panoramic views'
            }
        ]
    },
    '4': {
        name: 'Beachfront Paradise Villa',
        price: 30000,
        images: [
            {
                url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
                title: 'Exterior View',
                description: 'Luxurious beachfront villa with tropical gardens'
            },
            {
                url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
                title: 'Living Room',
                description: 'Elegant living space with ocean views'
            },
            {
                url: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop',
                title: 'Master Bedroom',
                description: 'Spacious master suite with private balcony'
            },
            {
                url: 'https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=800&h=600&fit=crop',
                title: 'Kitchen',
                description: 'Gourmet kitchen with island'
            },
            {
                url: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop',
                title: 'Pool',
                description: 'Large infinity pool overlooking the beach'
            },
            {
                url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
                title: 'Beach',
                description: 'Private beach access'
            }
        ]
    },
    '5': {
        name: 'Coastal Luxury Apartment',
        price: 18000,
        images: [
            {
                url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
                title: 'Exterior View',
                description: 'Modern coastal apartment with stunning views'
            },
            {
                url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
                title: 'Living Area',
                description: 'Bright living space with coastal decor'
            },
            {
                url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
                title: 'Bedroom',
                description: 'Comfortable bedroom with ocean breeze'
            },
            {
                url: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=600&fit=crop',
                title: 'Balcony',
                description: 'Private balcony with coastal views'
            }
        ]
    },
    '6': {
        name: 'Sunset View Penthouse',
        price: 20000,
        images: [
            {
                url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
                title: 'Exterior View',
                description: 'Spectacular penthouse with sunset views'
            },
            {
                url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
                title: 'Living Space',
                description: 'Luxurious living area with panoramic windows'
            },
            {
                url: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop',
                title: 'Master Bedroom',
                description: 'King-size bedroom with sunset views'
            },
            {
                url: 'https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=800&h=600&fit=crop',
                title: 'Kitchen',
                description: 'Modern kitchen with premium finishes'
            },
            {
                url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
                title: 'Rooftop Terrace',
                description: 'Private rooftop with stunning sunset views'
            }
        ]
    }
}

let currentTourIndex = 0
let currentTour = null
let currentPropertyId = null

async function loadProperties() {
    try {
        const urlParams = new URLSearchParams(window.location.search)
        const location = urlParams.get('location') || ''
        const minPrice = urlParams.get('minPrice') || ''
        const maxPrice = urlParams.get('maxPrice') || ''
        
        const queryString = new URLSearchParams({
            ...(location && { location }),
            ...(minPrice && { minPrice }),
            ...(maxPrice && { maxPrice })
        }).toString()

        const response = await fetch(`${API_URL}/properties?${queryString}`)
        const properties = await response.json()
        displayProperties(properties)
    } catch (error) {
        console.error('Error loading properties:', error)
        displaySampleProperties()
    }
}

function displaySampleProperties() {
    const sampleProperties = [
        {
            id: '1',
            name: 'Ocean View Penthouse',
            location: 'Malindi Beach, Kenya',
            pricePerNight: 15000,
            bedrooms: 3,
            bathrooms: 2,
            guestCapacity: 6,
            type: 'Penthouse',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&h=300&fit=crop'
        },
        {
            id: '2',
            name: 'Luxury Beach Villa',
            location: 'Watamu, Kenya',
            pricePerNight: 25000,
            bedrooms: 4,
            bathrooms: 3,
            guestCapacity: 8,
            type: 'Villa',
            rating: 5.0,
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop'
        },
        {
            id: '3',
            name: 'Modern Penthouse Suite',
            location: 'Malindi Town, Kenya',
            pricePerNight: 12000,
            bedrooms: 2,
            bathrooms: 2,
            guestCapacity: 4,
            type: 'Penthouse',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop'
        },
        {
            id: '4',
            name: 'Beachfront Paradise Villa',
            location: 'Malindi Beach, Kenya',
            pricePerNight: 30000,
            bedrooms: 5,
            bathrooms: 4,
            guestCapacity: 10,
            type: 'Villa',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'
        },
        {
            id: '5',
            name: 'Coastal Luxury Apartment',
            location: 'Watamu, Kenya',
            pricePerNight: 18000,
            bedrooms: 3,
            bathrooms: 2,
            guestCapacity: 6,
            type: 'Apartment',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop'
        },
        {
            id: '6',
            name: 'Sunset View Penthouse',
            location: 'Malindi Beach, Kenya',
            pricePerNight: 20000,
            bedrooms: 4,
            bathrooms: 3,
            guestCapacity: 8,
            type: 'Penthouse',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop'
        }
    ]
    
    displayProperties(sampleProperties)
}

function displayProperties(properties) {
    const grid = document.getElementById('propertiesGrid')
    
    if (properties.length === 0) {
        grid.innerHTML = '<p>No properties found.</p>'
        return
    }

    const bookedProperties = JSON.parse(localStorage.getItem('bookedProperties') || '[]')

    grid.innerHTML = properties.map(property => {
        const isBooked = bookedProperties.includes(property.name)
        
        return `
        <div class="property-card-enhanced" style="position: relative;">
            <div class="property-image-container">
                <div class="property-favorite" onclick="toggleFavorite(event)">❤</div>
                <div class="property-badge">${property.type || 'Featured'}</div>
                ${isBooked ? '<div class="booked-badge" style="position: absolute; top: 1rem; right: 1rem; background: #ef4444; color: white; padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">BOOKED</div>' : ''}
                <img src="${property.image || 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&h=300&fit=crop'}" alt="${property.name}" class="property-image-enhanced">
            </div>
            <div class="property-content-enhanced">
                <div class="property-type">${property.type || 'Luxury Property'}</div>
                <h3 class="property-title-enhanced">${property.name}</h3>
                <div class="property-location-enhanced">
                    <span>📍</span>
                    <span>${property.location}</span>
                </div>
                <div class="property-stats">
                    <div class="property-stat">
                        <span>🛏️</span>
                        <span>${property.bedrooms} Beds</span>
                    </div>
                    <div class="property-stat">
                        <span>🚿</span>
                        <span>${property.bathrooms} Baths</span>
                    </div>
                    <div class="property-stat">
                        <span>👥</span>
                        <span>${property.guestCapacity} Guests</span>
                    </div>
                </div>
                <div class="property-amenities-enhanced">
                    <span class="amenity-badge">WiFi</span>
                    <span class="amenity-badge">Pool</span>
                    <span class="amenity-badge">AC</span>
                    <span class="amenity-badge">Kitchen</span>
                </div>
                <div class="property-footer">
                    <div class="property-price-enhanced">
                        <span class="price-amount">KES ${property.pricePerNight.toLocaleString()}</span>
                        <span class="price-period">per night</span>
                    </div>
                    <div class="property-rating-enhanced">
                        <span class="rating-star">★</span>
                        <span class="rating-value">${property.rating || '4.9'}</span>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem; margin-top: 1rem;">
                    <button 
                        class="btn-primary" 
                        style="padding: 0.75rem; font-size: 0.875rem; ${isBooked ? 'opacity: 0.5; cursor: not-allowed;' : ''}" 
                        onclick="${isBooked ? 'event.stopPropagation(); alert(\'This property is currently booked.\'); return false;' : `event.stopPropagation(); openVirtualTour('${property.id}')`}"
                        ${isBooked ? 'disabled' : ''}>
                        ${isBooked ? 'Booked' : '🏠 Tour'}
                    </button>
                    <button 
                        class="btn-primary" 
                        style="padding: 0.75rem; font-size: 0.875rem; background: #f97316; ${isBooked ? 'opacity: 0.5; cursor: not-allowed;' : ''}" 
                        onclick="${isBooked ? 'event.stopPropagation(); alert(\'This property is currently booked.\'); return false;' : `event.stopPropagation(); quickAddToCart('${property.id}', '${property.name}', ${property.pricePerNight})`}"
                        ${isBooked ? 'disabled' : ''}>
                        🛒 Cart
                    </button>
                    <button 
                        class="btn-primary" 
                        style="padding: 0.75rem; font-size: 0.875rem; background: #10b981; ${isBooked ? 'opacity: 0.5; cursor: not-allowed;' : ''}" 
                        onclick="${isBooked ? 'event.stopPropagation(); alert(\'This property is currently booked.\'); return false;' : `event.stopPropagation(); quickPayNow('${property.id}', '${property.name}', ${property.pricePerNight})`}"
                        ${isBooked ? 'disabled' : ''}>
                        💳 Pay
                    </button>
                </div>
            </div>
        </div>
    `}).join('')
}

loadProperties()


// Apply filters function
function applyFilters() {
    const priceRange = document.getElementById('priceRange').value
    const bedrooms = document.querySelector('select').value
    
    // Get checked amenities
    const amenities = []
    document.querySelectorAll('.filter-checkbox input:checked').forEach(checkbox => {
        amenities.push(checkbox.id)
    })
    
    alert(`Filters Applied!\nMax Price: KES ${parseInt(priceRange).toLocaleString()}\nBedrooms: ${bedrooms}\nAmenities: ${amenities.join(', ') || 'None'}`)
    
    // In production, this would filter the properties
    loadProperties()
}

// Favorite toggle
function toggleFavorite(event) {
    event.stopPropagation()
    const heart = event.target
    heart.style.color = heart.style.color === 'red' ? '#666' : 'red'
    alert(heart.style.color === 'red' ? 'Added to favorites!' : 'Removed from favorites')
}

// Virtual Tour Functions
function openVirtualTour(propertyId) {
    currentPropertyId = propertyId
    currentTour = virtualTours[propertyId]
    
    if (!currentTour) {
        alert('Virtual tour not available for this property')
        return
    }
    
    currentTourIndex = 0
    
    const modal = document.getElementById('virtualTourModal')
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    
    renderTour()
}

function closeVirtualTour() {
    const modal = document.getElementById('virtualTourModal')
    modal.style.display = 'none'
    document.body.style.overflow = 'auto'
}

function renderTour() {
    const content = document.getElementById('tourContent')
    const image = currentTour.images[currentTourIndex]
    
    content.innerHTML = `
        <div style="background: white; border-radius: 16px; overflow: hidden;">
            <div style="position: relative;">
                <img src="${image.url}" alt="${image.title}" style="width: 100%; height: 600px; object-fit: cover;">
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); padding: 2rem; color: white;">
                    <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">${image.title}</h2>
                    <p style="font-size: 1.125rem; opacity: 0.9;">${image.description}</p>
                </div>
            </div>
            
            <div style="padding: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                    <h3 style="font-size: 1.5rem;">${currentTour.name}</h3>
                    <div style="color: #666;">
                        ${currentTourIndex + 1} / ${currentTour.images.length}
                    </div>
                </div>
                
                <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                    <button onclick="previousImage()" ${currentTourIndex === 0 ? 'disabled' : ''} 
                        style="flex: 1; padding: 1rem; border: 2px solid #f97316; background: white; color: #f97316; border-radius: 8px; font-size: 1rem; cursor: pointer; font-weight: 600; ${currentTourIndex === 0 ? 'opacity: 0.5; cursor: not-allowed;' : ''}">
                        ← Previous
                    </button>
                    <button onclick="nextImage()" ${currentTourIndex === currentTour.images.length - 1 ? 'disabled' : ''}
                        style="flex: 1; padding: 1rem; background: #f97316; color: white; border: none; border-radius: 8px; font-size: 1rem; cursor: pointer; font-weight: 600; ${currentTourIndex === currentTour.images.length - 1 ? 'opacity: 0.5; cursor: not-allowed;' : ''}">
                        Next →
                    </button>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 0.5rem;">
                    ${currentTour.images.map((img, index) => `
                        <div onclick="jumpToImage(${index})" style="cursor: pointer; border: ${index === currentTourIndex ? '3px solid #f97316' : '2px solid #ddd'}; border-radius: 8px; overflow: hidden;">
                            <img src="${img.url}" alt="${img.title}" style="width: 100%; height: 80px; object-fit: cover;">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `
}

function nextImage() {
    if (currentTourIndex < currentTour.images.length - 1) {
        currentTourIndex++
        renderTour()
    }
}

function previousImage() {
    if (currentTourIndex > 0) {
        currentTourIndex--
        renderTour()
    }
}

function jumpToImage(index) {
    currentTourIndex = index
    renderTour()
}

// Add to Cart Function
function addPropertyToCart() {
    const item = {
        id: currentPropertyId,
        type: 'property',
        name: currentTour.name,
        price: currentTour.price,
        days: 1
    }
    
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    
    // Check if item already exists
    const existingIndex = cart.findIndex(i => i.id === item.id && i.type === item.type)
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1
    } else {
        cart.push({...item, quantity: 1})
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCartCount()
    
    closeVirtualTour()
    
    if (confirm(`${item.name} added to cart!\n\nView Cart now?`)) {
        window.location.href = 'cart.html'
    }
}

// Pay Now Function
function payNowProperty() {
    // Store booking details
    localStorage.setItem('bookingType', 'property')
    localStorage.setItem('bookingName', currentTour.name)
    localStorage.setItem('bookingPrice', `KES ${currentTour.price.toLocaleString()}`)
    localStorage.setItem('bookingDays', '1')
    
    // Mark as booked
    markAsBooked(currentTour.name)
    
    closeVirtualTour()
    window.location.href = 'checkout.html'
}

// Quick Add to Cart from card (without opening virtual tour)
function quickAddToCart(propertyId, propertyName, price) {
    const item = {
        id: propertyId,
        type: 'property',
        name: propertyName,
        price: price,
        days: 1
    }
    
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    
    // Check if item already exists
    const existingIndex = cart.findIndex(i => i.id === item.id && i.type === item.type)
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1
    } else {
        cart.push({...item, quantity: 1})
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCartCount()
    
    if (confirm(`${item.name} added to cart!\n\nView Cart now?`)) {
        window.location.href = 'cart.html'
    }
}

// Quick Pay Now from card (without opening virtual tour)
function quickPayNow(propertyId, propertyName, price) {
    // Store booking details
    localStorage.setItem('bookingType', 'property')
    localStorage.setItem('bookingName', propertyName)
    localStorage.setItem('bookingPrice', `KES ${price.toLocaleString()}`)
    localStorage.setItem('bookingDays', '1')
    
    // Mark as booked
    markAsBooked(propertyName)
    
    window.location.href = 'checkout.html'
}

function markAsBooked(propertyName) {
    const bookedProperties = JSON.parse(localStorage.getItem('bookedProperties') || '[]')
    if (!bookedProperties.includes(propertyName)) {
        bookedProperties.push(propertyName)
        localStorage.setItem('bookedProperties', JSON.stringify(bookedProperties))
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    const countElements = document.querySelectorAll('#cartCount, .cart-count')
    countElements.forEach(el => {
        if (el) el.textContent = count
    })
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('virtualTourModal')
    if (modal && modal.style.display === 'block') {
        if (e.key === 'ArrowRight') nextImage()
        if (e.key === 'ArrowLeft') previousImage()
        if (e.key === 'Escape') closeVirtualTour()
    }
})

// Initialize cart count on page load
updateCartCount()
